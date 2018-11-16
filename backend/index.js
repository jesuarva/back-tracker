require('dotenv').config();
const { server } = require('./server/server');
const mongoose = require('mongoose');

const port = process.env.PORT || 7171;
const { MONGODB_URI } = process.env;

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true },
  )
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('*** CONNECTED to database ***');
    server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`*** Listening on port ${port} ***`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('*** ERROR connecting to database ***', err);
  });
