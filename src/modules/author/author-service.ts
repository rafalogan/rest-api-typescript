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

	getAll(limit: number, page: number): Promise<any> {
		return this.db.getAll(this.table, [], limit, page);
	}

	 getAuthorById(id: number): Promise<IAuthorDetail> {
		return this.db.getById(this.table, id)
			.then(async author => {
				author.posts = await this.getPostByAuthor(author.id);
				return author
			}).catch(err => this.handlers.dbErrorHandler('Autor não encontrado', err));
	}

 async deleteAuthor(id: number) {
		return this.db.remove(this.table, id);
	}

	getPostByAuthor(id: number) {
		return this.db.instance('post')
			.select().where( {authorId: id})
			.then(posts => {
				posts = this.postService.setPostsText(posts);
				return posts;
			}).catch(err => this.handlers.dbErrorHandler('Posts não encontrados', err));
	}

}

export default new AuthorService();
