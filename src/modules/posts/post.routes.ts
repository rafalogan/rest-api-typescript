import {Application, Request, Response} from 'express';

import PostController from './post.controller';

class PostRoutes {

	constructor(app: Application, auth: any) {
		this.init(app, auth);
	}

	init(app: Application, auth: any) {
		// Rotas Post
		app.route('/posts')
			.all(auth.init().authenticate())
			.get(this.index)
			.post(this.createPost);

		app.route('/posts/:id')
			.all(auth.init().authenticate())
			.get(this.findPost)
			.put(this.updatePost)
			.delete(this.destroyPost);
	}

	index(req: Request, res: Response) {
		return PostController.getAllPosts(req, res);
	}

	createPost(req: Request, res: Response) {
		return PostController.crateNewPost(req, res);
	}

	findPost(req: Request, res: Response) {
		return PostController.postById(req, res);
	}

	updatePost(req: Request, res: Response) {
		return PostController.updatePost(req, res);
	}

	destroyPost(req: Request, res: Response) {
		return PostController.deletePost(req, res);
	}

}

export default PostRoutes;
