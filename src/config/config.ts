import * as dotenv from 'dotenv';

if(!process.env.NODE_ENV) dotenv.config();

module.exports = () => require(`./environment/${process.env.NODE_ENV}`);

