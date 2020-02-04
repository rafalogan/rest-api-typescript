import {IUser, IUserDetail} from './user-interface';
import Db from '../../config/db/db';

class UserService implements IUser {
	id: number = 0;
	name: string = '';
	email: string = '';
	password: string = '';
	table: string = 'users';

	constructor(private db = Db) {
	}

	create(user: IUserDetail) {
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
			.select().where({email})
			.then((user: any) => user)
			.catch(err => console.error('Registro não encontrado', err))
	}

	update(id: number, user: IUserDetail) {
		return this.db.update(this.table, id, user);
	}

	delete(id: number) {
		return this.db.remove(this.table, id);
	}
}

export default UserService;
