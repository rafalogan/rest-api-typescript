import express from 'express';
import { Application } from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';

import Routes from '../routes/routes';
import {errrorHandlerApi} from './error-hendler-api';
import Db from '../config/db/db';

class App {

	public express: Application;

	constructor() {
		this.express= express();
		this.middleware()
	}

	middleware(): void {
		this.express.use(morgan('dev'));
		this.express.use(bodyParser.json());
		this.express.use(errrorHandlerApi);
		this.db();
		this.router(this.express);
	}

	private router(app: Application) {
		new Routes(app);
	}

	private db() {
		 Db.getMigrateLatest();
	}
}

export default new App().express;
