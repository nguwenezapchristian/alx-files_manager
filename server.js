/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';

// create express server
const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
