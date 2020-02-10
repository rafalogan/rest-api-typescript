import {Request, Response} from 'express';

import AuthorService from './author-service'

class AuthorControler {

	constructor(private authorService = AuthorService) {}

	getAllAuthors(req: Request, res: Response) {

	}

	createAuthor(req: Request, res: Response) {}

	getAuthorById(req: Request, res: Response) {}

	updateAuthor(req: Request, res: Response) {}

	deleteAuthor(req: Request, res: Response) {}
}

export default new AuthorControler();
