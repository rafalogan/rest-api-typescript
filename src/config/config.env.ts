import  dotenv from 'dotenv';

import * as Costants from './environment/constants.json';
import {IEnviroment} from './environment/i-enviroment';

class configEnv {

	env: IEnviroment;
	enviroment: string;

	constructor() {
		if(!process.env.NODE_ENV) dotenv.config();

		this.enviroment = process.env.NODE_ENV || 'development';
		this.env = this.makeEnviroment(this.enviroment);
	}

	makeEnviroment(env) {
		const constant = Costants[env];

		return  {
			env: process.env.NODE_ENV || constant.env,
			client: constant.client,
			connection: {
				database: process.env.DB_NAME || constant.conneciton.database,
				user: process.env.DB_USER || constant.conneciton.user,
				password: process.env.DB_PASSWORD || constant.conneciton.password
			},
			serverPort: process.env.SERVER_PORT || constant.serverPort,
			serverHost: process.env.SERVER_HOST || constant.serverHost,
			databasePort: process.env.DB_PORT || constant.databasePort,
			authSecret: process.env.AUTHSECRET || constant.authSecret,
		}
	}
}

export default new configEnv().env;

