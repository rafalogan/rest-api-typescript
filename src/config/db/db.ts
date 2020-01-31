import Knex from 'knex';
import {Config, MigratorConfig} from 'knex';
import {Application} from 'express';

const knexFile:	MigratorConfig = require('../../knexfile');

export default class Db {
	public instece: Knex;

	constructor(app: Application) {
		this.instece = Knex(knexFile as Config);
		this.instece.migrate.latest(knexFile)
			.then(() => console.info('Conectado o Banco - OK'))
			.catch(err => console.error('Falha ao conectar', err));
		this.getDB(app);
	}

	getDB(app: Application): void {
		app.prototype.db = this.instece;
	}
}

// const instance: Knex = Knex(knexFile as Config);
// instance.migrate.latest(knexFile);
//
//
// export const db = () => instance;
// export const timestamp = (): string => new Date().toUTCString();
