import express from 'express';
import { Application } from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';

import Routes from '../routes/routes';
import {errrorHandlerApi} from './error-hendler-api';

class App {

	public express: Application;

	constructor() {
		this.express= express();
		this.middleware()
	}

	middleware(): void {
		this.express.use(morgan('dev'));
		this.express.use(bodyParser.urlencoded({extended: true}));
		this.express.use(errrorHandlerApi);
		this.router(this.express);
	}

	private router(app: Application) {
		new Routes(app);
	}
}

export default new App().express;