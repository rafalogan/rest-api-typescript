import {Request, Response} from 'express';

import AuthorService from './author-service'
import Handlers from '../../handlers/response-handlers';

class AuthorController {
	private limit = 10;

	constructor(private authorService = AuthorService,
							private handlers = Handlers) {}

	getAllAuthors(req: Request, res: Response) {
		const page = (req.query.page) ? parseInt(req.query.page) : 1;

		this.authorService.getAll(this.limit, page)
			.then(authors => this.handlers.onSuccess(res, authors))
			.catch(err => this.handlers.onError(res, 'Erro ao buscar autores', err))
	}

	createAuthor(req: Request, res: Response) {
		const author = req.body;
		this.authorService.createAuthor(author)
			.then(result => this.handlers.onSuccess(res, (result > 0) ? author: {}))
			.catch(err => this.handlers.onError(res, 'Erro ao salvar novo autor', err))
	}

	getAuthorById(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.authorService.getAuthorById(id)
			.then(author => this.handlers.onSuccess(res, author))
			.catch(err => this.handlers.onError(res, 'Erro ao buscar Autor', err))
	}

	updateAuthor(req: Request, res: Response) {
		const id = parseInt(req.params.id);
		const author = req.body;
		const result = {id, ...author};

		this.authorService.updateAuthor(id, author)
			.then(author => this.handlers.onSuccess(res, (author > 0) ? result : {}))
			.catch(err => this.handlers.onError(res, 'Erro ao atualizar autor', err))
	}

	deleteAuthor(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.authorService.deleteAuthor(id)
			.then(action => this.handlers.onSuccess(res, (action) ? {message: 'Autor deletado com Sucesso'}: action))
			.catch(err => this.handlers.onError(res, 'Erro ao remover autor', err))
	}
}

export default new AuthorController();
