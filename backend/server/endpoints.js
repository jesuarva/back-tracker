module.exports = (server) => {
  server.use('/', (req, res) => {
    res.status(200).send('API up and running');
  });
};
