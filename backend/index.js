require('dotenv').config();
const { server } = require('./server/server');

const port = process.env.PORT || 7171;

server.listen(port, () => {
  console.log(`\n*** Listening on port ${port} ***\n`);
});
