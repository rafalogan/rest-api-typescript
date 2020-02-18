import {Application} from 'express';

import AuthRouter from '../modules/auth/auth.routes';
import UserRoutes from '../modules/user/user-routes';
import AuthorRoutes from '../modules/author/author-routes';
import PostRoutes from '../modules/posts/post-routes';

class Routes {
	private token = AuthRouter;
	private user =  UserRoutes;
	private author = AuthorRoutes;
	private posts = PostRoutes;

	constructor() {}

	initRoutes(app: Application, auth: any): void {
		// Rotas Auth
		app.route('/signin').post(this.token.signin);

		// Rotas de Usuários
		app.route('/users')
			.all(auth.init().authenticate())
			.get(this.user.index)
			.post(this.user.create);

		app.route('/users/:id')
			.all(auth.init().authenticate())
			.get(this.user.findOne)
			.put(this.user.update)
			.delete(this.user.destroy);

		// Rotas Autor
		app.route('/author')
			.get(this.author.index)
			.post(this.author.create);

		app.route('/author/:id')
			.get(this.author.findOne)
			.put(this.author.update)
			.delete(this.author.detroy);

		// Rotas Post
		app.route('/posts')
			.get(this.posts.index)
			.post(this.posts.createPost);

		app.route('/posts/:id')
			.get(this.posts.findPost)
			.put(this.posts.updatePost)
			.delete(this.posts.destroyPost);
	}
}

export default new Routes();
