'use strict';

var express = require('express');
var controller = require('./state.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/nameandvotes', controller.nameandvotes);
router.get('/statsbystate', controller.statsbystate);

module.exports = router;
