import Knex from 'knex';
import {Config, MigratorConfig} from 'knex';

const knexFile: MigratorConfig = require('../../knexfile');
knexFile.directory = 'src/migrations';

class Db {
	instance: Knex;
	limitDefault = 10;

	constructor() {
		this.instance = Knex(knexFile as Config);
	}

	getMigrateLatest() {
		return this.instance.migrate.latest(knexFile)
			.then(() => console.info('Conectado o Banco - OK'))
			.catch(err => console.error('Falha ao conectar', err));
	}

	async create(table: string, values: {}): Promise<any> {
		return this.instance(table).insert(values)
			.then(result => result)
			.catch(err => console.error(`Erro ao tentar inserir itens na tabela: ${table}`, err))
	}

	async update(table: string, id: number, values: {}): Promise<any> {
		return this.instance(table).update(values)
			.where({id})
			.then(result => result)
			.catch(err => console.error(`Erro ao atualizar item: ${id} na tabela: ${table}`, err))
	}

	async getAll(table: string, values: string[] = [], limit: number, page: number): Promise<any> {
		const count = await this.countIds(table);
		limit = (limit) ? limit : this.limitDefault;
		page = (page) ? page : 1;

		return this.instance(table)
			.select(...values)
			.limit(limit).offset(page * limit - limit)
			.then(itens => {
				return {data: itens, count, limit, page}
			}).catch(err => console.error(`Não foi encontrado intens da tabela: ${table}`, err))
	}

	async getById(table: string, id: number, values: string[] = []): Promise<any> {
		return this.instance(table).select(...values)
			.where({id}).first()
			.then(user => user)
			.catch(err => console.error(`Erro ao buscar o resgistro nº: ${id} da tabela ${table}`, err))
	}

	async remove(table: string, id: number): Promise<any> {
		return this.instance(table)
			.where({id}).del()
			.then(() => true)
			.catch(err => console.error(`Erro ao deletar o Registro nº ${id} da tabela ${table}`, err));
	}

	async countIds(table: string) {
		const result: any = await this.instance(table).count({count: 'id'}).first();

		return parseInt(result.count)
	}

}

export default new Db();
