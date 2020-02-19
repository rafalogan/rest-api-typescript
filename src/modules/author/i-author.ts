export interface IAuthor {
	id: number;
	name: string;
}

export interface IAuthorDetail extends IAuthor {
	id: number;
	name: string;
}

export function createAuthors(data: any[]): IAuthor[] {
	return data.map(createAuthor)
}

export function createAuthor({id, name}: IAuthorDetail): IAuthor {
	return {id, name}
}
