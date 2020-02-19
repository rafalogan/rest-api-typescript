import {IAuthor} from '../author/i-author';

export interface IPost {
	id: number;
	title: number;
	text: string;
	authorId?: number;
	author?: IAuthor
}

export function createPost({id, title, text, authorId}: IPost): IPost {
	return {id, title, text, authorId}
}

export function createPosts(data: any[]): IPost[] {
return data.map(createPost);
}
