import express from 'express';
import {Application} from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';

import ResponesHandlers from '../handlers/response-handlers';
import AuthSevice from '../modules/auth/auth.service';
import ConfigEnv from '../config/config.env';
import {RoutesModule} from '../router/routes.module';


export class CoreModule {

	private _express: Application;

	constructor(private config = ConfigEnv,
							private authService = AuthSevice,) {
		this._express = express();
		this.configExpress();
		this.router()
	}

	public get express() {
		return this._express;
	}

	private configExpress(): void {
		this.express.use(morgan('dev'));
		this.express.use(bodyParser.json());
		this.express.use(ResponesHandlers.errrorHandlerApi);
	}

	private router() {
		new RoutesModule(this.express, this.authService);
	}
}
