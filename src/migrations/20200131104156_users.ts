import * as Knex from "knex";
import {TableBuilder} from 'knex';

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('users', (table: TableBuilder ) => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.string('email').notNullable().unique();
		table.string('password').notNullable();
		table.timestamp('deleteAt');
	});
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('users');
}

