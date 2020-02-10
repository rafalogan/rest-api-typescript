import * as Knex from "knex";
import {TableBuilder} from 'knex';

export async function up(knex: Knex): Promise<any> {
 return	knex.schema.createTable('post', ( table: TableBuilder) => {
 	table.increments('id').primary();
	table.string('title');
	table.binary('text');
	 table.integer('authorId').unsigned().references('id').inTable('author');
 })
}


export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('post')
}

