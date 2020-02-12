import Db from '../../config/db/db';
import {IAuthor, IAuthorDetail} from './author-interface';
import Handlers from '../../api/response/handlers';
import PostService from '../posts/post-service';
import {IPost} from '../posts/post-interface';



class AuthorService {

	private table: string = 'author';

	constructor(private db = Db,
							private handlers = Handlers,
							private postService = PostService) {}


	createAuthor(author: IAuthorDetail) {
	 return this.db.create(this.table, author);
	}

	updateAuthor(id: number, author: IAuthorDetail) {
		return this.db.update(this.table, id, author);
	}

	getAll(limit: number, page: number): Promise<IAuthor[]> {
		return this.db.getAll(this.table, [], limit, page);
	}

	getAuthorById(id: number): Promise<IAuthorDetail> {
		return this.db.getById(this.table, id);
	}

 async deleteAuthor(id: number) {

		return this.db.remove(this.table, id);
	}

	async removePostsByAuthor(id: number) {
		const posts: IPost[] | any = await this.getPostByAuthor(id);
		let removePosts = (posts.length) ? posts.map(post => this.postService.deletePost(post.id)
			.then(action => action)
			.catch(err => this.handlers.dbErrorHandler('não foi possivel deletar', err))) : true;

		return removePosts ;
	}

	getPostByAuthor(id: number) {
		return this.db.instance('post')
			.select().where( {authorId: id})
			.then(posts => posts)
			.catch(err => this.handlers.dbErrorHandler('Posts não encontrados', err));
	}
}

export default new AuthorService();
