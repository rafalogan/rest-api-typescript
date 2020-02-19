import bcrypt from 'bcrypt'

import {IUser, IUserDetail} from './i-user';
import Db from '../../config/db/db';

class UserService implements IUser {
	id: number = 0;
	name: string = '';
	email: string = '';
	password: string = '';
	table: string = 'users';
	private salt = bcrypt.genSaltSync(10);

	constructor(private db = Db) {}

	hashPassword(password: string) {
		return bcrypt.hashSync(password, this.salt);
	}

	create(user: IUserDetail) {
		user.password = this.hashPassword(user.password);
		return  this.db.create(this.table, user)
	}

	getAll(limit: number, page: number): Promise<IUser[]> {
		return this.db.getAll(this.table,['id', 'name', 'email'], limit, page)
	}

	getById(id: number): Promise<IUserDetail> {
		return this.db.getById(this.table, id)
	}

	getByEmail(email: string): Promise<IUserDetail> {
		return this.db.instance(this.table)
			.select().where({email}).first()
			.then(user => user)
			.catch(err => console.error('Registro não encontrado', err))
	}

	update(id: number, user: IUserDetail) {
		user.password = this.hashPassword(user.password);
		return this.db.update(this.table, id, user);
	}

	delete(id: number) {
		return this.db.remove(this.table, id);
	}
}

export default new UserService();
