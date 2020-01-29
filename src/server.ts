import * as http from 'http';

import App from './api/app-api';

const config = require('./config/config')();
const server = http.createServer(App);

server.listen(config.serverPort);
server.on('listening', () => console.log('Servdor online', config.baseUrl));
server.on('error', (err: NodeJS.ErrnoException) => console.log('Ocorreu um erro', err));
