const jsonServer = require('josn-server');
const server = jsonServer.create();
const router = jsonServer.router('db.josn');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);