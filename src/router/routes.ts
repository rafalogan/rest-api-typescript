import {Application} from 'express';


import UserRoutes from '../modules/user/user.routes';
import AuthorRoutes from '../modules/author/author.routes';
import PostRoutes from '../modules/posts/post.routes';
import AuthRoutes from '../modules/auth/auth.routes';

class Routes {
	private auth: AuthRoutes;
	private user: UserRoutes;
	private author: AuthorRoutes;
	private posts: PostRoutes;

	constructor(app: Application, auth: any) {
		this.auth = new AuthRoutes(app);
		this.user = new UserRoutes(app, auth);
		this.author = new AuthorRoutes(app, auth);
		this.posts = new PostRoutes(app, auth);
	}
}

export default Routes;
