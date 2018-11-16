const express = require('express');
const personModel = require('../models/person.model');
const { RouterFactory } = require('express-router-factory');

const router = express.Router();
const personRouterFactory = new RouterFactory(router, personModel);

/**
 * Setup all CRUD enpoints for person model
 */
personRouterFactory.CRUD();

module.exports = router;
