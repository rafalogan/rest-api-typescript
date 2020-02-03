export interface IUser {
	readonly id: number,
	name: string,
	email: string,
	password: string
}

export interface IUserDetail extends IUser {
	id: number,
	name: string,
	email: string,
	password: string
}

export function createUser({id, name, email, password}: IUserDetail): IUser {
	return {id, name, email, password}
}

export function createUsers(data: IUserDetail[]): IUser[] {
	return data.map(user => createUser(user))
}

export function createUserById({id, name, email, password}: IUserDetail): IUserDetail {
	return {id, name, email, password}
}

export function createUserByEmail({id, name, email, password}: IUserDetail): IUserDetail {
	return {id, name, email, password}
}
