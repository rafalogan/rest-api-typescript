if (!process.env.NODE_ENV) require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';

module.exports = () => require(`./environment/${environment}`);

