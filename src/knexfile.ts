// Update with your config settings.
import 'ts-node/register';

const config = require('./config/config')();

module.exports = {
	client: 'postgresql',
	connection: {
		database: config.db,
		user: config.username,
		password: config.password
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		directory: 'migrations',
		tableName: 'knex_migrations'
	},
	timezone: 'America/Sao_Paulo'
};
