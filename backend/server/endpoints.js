const personRouter = require('../api/routes/person.router');

module.exports = (server) => {
  server.use('/person-bags', personRouter);
  server.use('/', (req, res) => {
    res.status(200).send('API up and running');
  });
};
