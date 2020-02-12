import {Request, Response} from 'express';

import PostController from './post-controller';

class PostRoutes {

	constructor() {}

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

export default new PostRoutes();
