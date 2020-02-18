import http from 'http';

import Db from '../config/db/db';
import ConfigEnv from '../config/config.env'
import {CoreModule} from '../core/core.module';

export class App {

	public express;

	constructor(private config = ConfigEnv,
							private db = Db) {
		if(this.db.getMigrateLatest()) {
			this.express = new CoreModule().express;
			this.upServer();
		}
	}

	private upServer () {
		http.createServer(this.express)
			.listen(this.config.serverPort)
			.on('listening', this.onServerUp.bind(this))
			.on('error', this.onServerStatupError.bind(this))
	}

	private onServerUp() {
		console.log('Servidor Online', `http://${this.config.serverHost}:${this.config.serverPort}`)
	}

	private  onServerStatupError(error: NodeJS.ErrnoException) {
		console.error('Error', error);
	}
}
