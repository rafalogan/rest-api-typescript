import express from 'express';
import { Application } from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';

import Routes from '../routes/routes';
import {errrorHandlerApi} from './error-hendler-api';
import Db from '../config/db/db';
import AuthConfig from '../config/auth';

class App {

	public express: Application;
	public auth;

	constructor() {
		this.express= express();
		this.auth = AuthConfig();
		this.middleware()
	}

	middleware(): void {
		this.express.use(morgan('dev'));
		this.express.use(bodyParser.json());
		this.express.use(errrorHandlerApi);
		this.db();
		this.router(this.express, this.auth);
	}

	private router(app: Application, auth: any) {
		new Routes(app, auth);
	}

	private db() {
		 Db.getMigrateLatest();
	}
}

export default new App().express;
