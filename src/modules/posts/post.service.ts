import Db from '../../config/db/db';
import {IPost} from './i-post';
import {IAuthor} from '../author/i-author';
import Handlers from '../../handlers/response-handlers';

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
		return this.db.getAll(this.table, [], limit, page)
			.then(posts => {
				posts.data = this.setPostsText(posts.data);
				return posts
			}).catch( err => this.handlers.dbErrorHandler('Posts não entcontados', err));
	}

	setPostsText(posts) {
		return posts.map(post => {
			post.text = post.text.toString();
			return post
		})
	}

	getPostById(id: number): Promise<any> {
		return this.db.getById(this.table, id)
			.then((post: IPost) => {
				post.text = post.text.toString();
				return post
			}).catch(err => this.handlers.dbErrorHandler('Post não encontrado', err))
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
