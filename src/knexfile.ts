// Update with your config settings.
require('ts-node/register');

const configDB = require('./config/config')();

module.exports = {
	client: 'pg',
	connection: {
		database: configDB.db,
		user: configDB.username,
		password: configDB.password
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: 'src/migrations'
	},
	timezone: 'America/Sao_Paulo'
};
