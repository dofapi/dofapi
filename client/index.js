const express = require('express');
const next = require('next');

module.exports = async function({ beforeNext = () => {}, dir = '.' } = {}) {
  const dev = process.env.NODE_ENV === 'development';
  const port = process.env.PORT || 3000;

  const app = next({ dev, dir });
  const handle = app.getRequestHandler();
  const server = express();

  await app.prepare();
  await beforeNext(server);

  server.use(express.static(`${dir}/static`));
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port: ${port}`);
  });
};
