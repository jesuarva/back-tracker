const personRouter = require('../api/routes/person.router');

module.exports = (server) => {
  server.use('/person', personRouter);
  server.use('/', (req, res) => {
    res.status(200).send('API up and running');
  });
};
