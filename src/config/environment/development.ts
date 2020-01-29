module.exports = {
	env: process.env.NODE_ENV || 'development',
	db: process.env.DB_NAME,
	dialect: 'postgres',
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.SERVER_HOST || 'localhost',
	serverPort: process.env.SERVER_PORT,
	baseUrl: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
	dbPort: process.env.DB_PORT,
	dbUrl: `postgres//postgres:${process.env.DB_USER}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`,
	authSecret: process.env.AUTH_SECRET || `#@$AloyR@f@elLEt!c!@#`
};
