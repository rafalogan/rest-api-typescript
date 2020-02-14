// Update with your config settings.
require('ts-node/register');

import ConfigEnv from './config/config.env';
const config = ConfigEnv.env;

module.exports = {
	client: config.client,
	connection: config.connection,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: 'migrations'
	},
	timezone: 'America/Sao_Paulo'
};
