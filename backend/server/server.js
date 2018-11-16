const server = require('express')();
const setUpGlobalMiddlewares = require('./middlewares').globalMiddlewares;
const setUpEnpoints = require('./endpoints');

/**
 * Apply global middlewares to 'server'
 */
setUpGlobalMiddlewares(server);

/**
 * Apply endpoints
 */
setUpEnpoints(server);

module.exports = { server };
