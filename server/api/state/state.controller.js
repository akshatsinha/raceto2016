'use strict';

var _ = require('lodash');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'raceto2916'
});


exports.index = function(req, res) {
    var states = [];
    connection.query('select state_name from states order by id', function (err, rows, fields) {
        if (err) throw err;
        _(rows).forEach(function (elem) {
            states.push(elem['state_name']);
        });
        res.json(states);
    });
};

exports.nameandvotes = function(req, res) {
    var name_and_votes = [];
    connection.query('select state_name as name, electoral_votes as votes from states order by id', function (err, rows, fields) {
        if (err) throw err;
        _(rows).forEach(function (elem) {
            name_and_votes.push(elem);
        });
        res.json(name_and_votes);
    });
};

exports.statsbystate = function(req, res) {
    var statsbystate = {};
    var past_results = [];
    var prediction_map = {
        '1': 'Democrat - Safe',
        '2': 'Republican - Safe',
        '3': 'Democrat - Likely',
        '4': 'Republican - Likely',
        '5': 'Either Party'
    };
    connection.query('select ss.state_name, ss.electoral_votes, ss.prediction_2016, ss.state_about, pr.year, pr.dem_pv_percent, pr.gop_pv_percent, pr.dem_candidate, pr.gop_candidate, pr.dem_pv_count, pr.gop_pv_count from states ss inner join past_results pr on ss.id = pr.state_id where ss.state_name = "' + req.query.state + '" order by year asc', function (err, rows, fields) {
        if (err) throw err;
        _(rows).forEach(function (elem) {
            //console.log(elem);
            var pr = {};
            pr.year = elem.year;
            pr.data = [];
            pr.data.push(elem.dem_pv_percent, elem.gop_pv_percent);
            pr.participants = [];
            pr.participants.push(elem.dem_candidate, elem.gop_candidate);
            pr.popular_vote = [];
            pr.popular_vote.push(elem.dem_pv_count, elem.gop_pv_count);
            past_results.push(pr);
        });
        statsbystate = {
            'votes': rows[0]['electoral_votes'],
            'prediction2016': prediction_map[rows[0]['prediction_2016']],
            'past_results': past_results
        };
        res.json(statsbystate);
    });
};
