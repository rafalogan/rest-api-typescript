import * as Knex from "knex";
import {TableBuilder} from 'knex';

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('author', (table: TableBuilder ) =>{
		table.increments('id').primary();
		table.string('name').notNullable();
	})
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('author');
}

