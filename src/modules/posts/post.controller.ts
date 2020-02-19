import {Request, Response} from 'express';

import PostService from './post.service';
import Handlers from '../../handlers/response-handlers';

class PostController {
	private limit = 10;

	constructor(private postService = PostService,
							private handlers = Handlers) {}

	crateNewPost(req: Request, res: Response) {
		const post = req.body;

		this.postService.createPost(post)
			.then(result => this.handlers.onSuccess(res, (result > 0) ? post : {}))
			.catch(err => this.handlers.onError(res, 'Erro ao Cadastrar Post', err))
	}

	getAllPosts(req: Request, res: Response) {
		const limit = req.query.total || this.limit;
		const page = req.query.page || 1;

		this.postService.getAllPosts(limit, page)
			.then(posts => this.handlers.onSuccess(res, posts))
			.catch(err => this.handlers.onError(res, 'Posts não encontrados', err))
	}

	postById(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.postService.getPostById(id)
			.then(post => this.handlers.onSuccess(res, post))
			.catch(err => this.handlers.onError(res, 'Post não entcontrado', err))
	}

	updatePost(req: Request, res: Response) {
		const id = parseInt(req.params.id);
		const post = req.body;
		const result = {id, ...post};

		this.postService.updatePost(id, post)
			.then(post => this.handlers.onSuccess(res, (post > 0) ? result : {}))
			.catch(err => this.handlers.onError(res, 'Não foi possivel atualizar post', err))
	}

	deletePost(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.postService.deletePost(id)
			.then(action => this.handlers.onSuccess(res, (action) ? { message: 'Post Deletado com Sucesso'} : action))
			.catch(err => this.handlers.onError(res, 'Não foi possivel remover post', err))
	}
}

export default new PostController();
