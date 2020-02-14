import * as http from 'http';

import App from './api/app.api';
import ConfigEnv from './config/config.env';

const config = ConfigEnv.env;
const server = http.createServer(App);

server.listen(config.serverPort);
server.on('listening', () => console.log('Servdor online', `http://${config.serverHost}:${config.serverPort}`));
server.on('error', (err: NodeJS.ErrnoException) => console.log('Ocorreu um erro', err));
