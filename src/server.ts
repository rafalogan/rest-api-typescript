import * as http from 'http';

import App from './api/app-api';

const models = require('./models');
const config = require('./config/config')();
const server = http.createServer(App);

models.sequelize.sync().then(() => {
		server.listen(config.serverPort);
		server.on('listening', () => console.log('Servdor online', config.baseUrl));
		server.on('error', (err: NodeJS.ErrnoException) => console.log('Ocorreu um erro', err));
	}).catch((err: Error) => console.log('Error Sequelize', err));
