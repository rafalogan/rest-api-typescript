import {IUser, IUserDetail} from './user-interface';
import Db from '../../config/db/db';

class UserService implements IUser {
	id: number;
	name: string;
	email: string;
	password: string;

	constructor() {
	}

	create(user: IUserDetail) {
	}

	getAll(): Promise<IUser[]> {}

	getById(id: number): Promise<IUserDetail> {}

	getByEmail(email: string): Promise<IUserDetail> {}

	update(id: number, user: IUserDetail) {}

	delete(id: number) {}
}
