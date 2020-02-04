import Knex from 'knex';
import {Config, MigratorConfig} from 'knex';

const knexFile:	MigratorConfig = require('../../knexfile');

class Db {
	public instance: Knex;
	limitDefault = 10;

	constructor() {
		this.instance = Knex(knexFile as Config);
	}

	getMigrateLatest() {
		this.instance.migrate.latest(knexFile)
			.then(() => console.info('Conectado o Banco - OK'))
			.catch(err => console.error('Falha ao conectar', err));
	}

	async create(table: string, values: {}): Promise<any> {
		this.instance(table).insert(values)
			.then(() => values)
			.catch(err => console.error(`Erro ao tentar inserir itens na tabela: ${table}`, err))
	}

	async update(table: string, id: number, values: {}): Promise<any> {
		this.instance(table).update(values)
			.where({id})
			.then(() => values)
			.catch(err => console.error(`Erro ao atualizar item: ${id} na tabela: ${table}`, err))
	}

	async getAll(table: string,
				 values: string[] = [],
				 limit = this.limitDefault, page = 1): Promise<any> {
		const result: any = await this.instance(table).count({ count: 'id'}).first();
		const count: number  = parseInt(result.count);

		this.instance(table)
			.select(...values)
			.limit(limit).offset(page * limit - limit)
			.then(itens => {
				return { data: itens, count, limit }
			}).catch( err => console.error(`Não foi encontrado intens da tabela: ${table}`, err))
	}

	async getById(table: string, id: number, values: string[]): Promise<any> {
		this.instance(table)
			.select(...values)
			.where({id})
	}

}

export default new Db();
