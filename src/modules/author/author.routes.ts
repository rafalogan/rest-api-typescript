import {Application, Request, Response} from 'express';

import AuthorController from './author.controller';

class AuthorRoutes {

	constructor(app: Application, auth: any) {
		this.init(app, auth)
	}

	init(app: Application, auth: any) {
		// Rotas Autor
		app.route('/author')
			.all(auth.init().authenticate())
			.get(this.index)
			.post(this.create);

		app.route('/author/:id')
			.all(auth.init().authenticate())
			.get(this.findOne)
			.put(this.update)
			.delete(this.detroy);
	}

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

export default AuthorRoutes;
