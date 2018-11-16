const server = require('express')();
const setUpGlobalMiddlewares = require('./middlewares').globalMiddlewares;

/**
 * Apply global middlewares to 'server'
 */
setUpGlobalMiddlewares(server);

module.exports = { server };
