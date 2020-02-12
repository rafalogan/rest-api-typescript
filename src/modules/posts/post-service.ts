import Db from '../../config/db/db';
import {IPost} from './post-interface';
import {IAuthor} from '../author/author-interface';
import Handlers from '../../api/response/handlers';

class PostService {
	private table: string = 'post';

	constructor(private db = Db,
							private handlers = Handlers) {}

	createPost(post: IPost) {
		return this.db.create(this.table, post);
	}

	updatePost(id: number, post: IPost) {
		return this.db.update(this.table, id, post)
	}

	getAllPosts(limit: number, page: number) {
		return this.db.getAll(this.table, [], limit, page);
	}

	getPostById(id: number): Promise<IPost> {
		return this.db.getById(this.table, id)
	}

	deletePost(id: number) {
		return this.db.remove(this.table, id);
	}

	getAllAuthors() {
		return this.db.instance('author').select()
			.then((athors: IAuthor[]): IAuthor[] => athors)
			.catch(err => this.handlers.dbErrorHandler('Erro ao Buscar Autores', err))
	}
}

export default new PostService();
