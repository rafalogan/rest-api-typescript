import {Application} from 'express';

import Routes from './routes';
export class RoutesModule {
	private app: Application;
	private auth: any;

	constructor(app: Application, auth: any) {
		this.app = app;
		this.auth = auth;
		this.init();
	}

	init() {
		new Routes(this.app, this.auth)
	}
}

