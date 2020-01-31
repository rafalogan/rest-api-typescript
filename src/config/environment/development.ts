
module.exports = {
	env: process.env.NODE_ENV || 'development',
	db: process.env.DB_NAME || 'ts-api',
	dialect: 'postgres',
	username: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'root',
	host: process.env.SERVER_HOST || 'localhost',
	serverPort: process.env.SERVER_PORT || '9000',
	baseUrl: `http://${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '9000'}`,
	dbPort: process.env.DB_PORT || '5432',
	dbUrl: `postgres//postgres:${process.env.DB_USER || 'root' }@localhost:${process.env.DB_PORT || '5432'}/${process.env.DB_NAME || 'ts-api'}`,
	authSecret: process.env.AUTH_SECRET || `#@$AloyR@f@elLEt!c!@#`
};
