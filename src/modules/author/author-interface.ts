export interface IAuthor {
	id: number;
	name: string;
}

export interface IAuthorDetail extends IAuthor {
	id: number;
	name: string;
}

export function createAuthors({id, name}: IAuthorDetail): IAuthor {
	return {id, name}
}

export function createAuthorById({id, name}: IAuthorDetail): IAuthor {
	return {id, name}
}
