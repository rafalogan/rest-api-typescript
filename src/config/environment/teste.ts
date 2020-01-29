module.exports = {
	env: 'test',
	db: process.env.DB_NAME || 'ts-api-test',
	dialect: 'postgres',
	username: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'root',
	host: 'localhost',
	serverPort: process.env.SERVER_PORT || 9000,
	dbPort: process.env.DB_PORT || 5432,
	dbUrl: `postgres://postgres:${process.env.DB_USER}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`,
	authSecret: process.env.AUTH_SECRET || '#@$AloyR@f@elLEt!c!@#'
};
