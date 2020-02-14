import express from 'express';
import http from 'http';
import { Application } from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';

import Routes from '../routes/routes';
import Db from '../config/db/db';
import AuthConfig from '../config/auth-config';
import Handlers from './response/handlers';
import ConfigEnv from '../config/config.env'

class App {

	public express: Application;

	constructor(private config = ConfigEnv.env) {
		this.express= express();
		this.middleware()
	}

	middleware(): void {
		this.express.use(morgan('dev'));
		this.express.use(bodyParser.json());
		this.express.use(Handlers.errrorHandlerApi);
		this.db();
		this.router(this.express, AuthConfig);
	}

	private router(app: Application, auth: any) {
		 Routes.initRoutes(app, auth);
	}

	private db() {
		 Db.getMigrateLatest();
	}

	private upServer () {
		http.createServer(this.express)
			.listen(this.config.serverPort)
	}
}

export default new App().express;
