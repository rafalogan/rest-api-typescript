import {Request, Response} from 'express';

import AuthorController from './author-controller';

class AuthorRoutes {
	constructor() {}

	index(req: Request, res: Response) {
		return AuthorController.getAllAuthors(req, res);
	}

	create(req: Request, res: Response) {
		return AuthorController.createAuthor(req, res);
	}

	findOne(req: Request, res: Response) {
		return AuthorController.getAuthorById(req, res);
	}

	update(req: Request, res: Response) {
		return AuthorController.updateAuthor(req, res);
	}

	detroy(req: Request, res: Response) {
		return AuthorController.deleteAuthor(req, res);
	}
}

export default new AuthorRoutes();
