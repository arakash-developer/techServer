const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("test.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);
// This part is what I am looking for
const customRouter = jsonServer.customRouter('db.json')
server.use(customRouter)


server.listen(port);