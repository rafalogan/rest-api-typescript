// Update with your config settings.
require('ts-node/register');

import ConfigEnv from './config/config.env';

module.exports = {
	client: ConfigEnv.client,
	connection: ConfigEnv.connection,
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
