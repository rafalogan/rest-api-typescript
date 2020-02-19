import {Request, Response} from 'express';

import UserService from './user.service';
import Handlers from '../../handlers/response-handlers';


class UserController {
	private userService = UserService;
	private limit: number = 10;

	constructor(private hendlers = Handlers) {}

	getAllUsers(req: Request, res: Response) {
		const page: number = req.query.page || 1;

		this.userService.getAll(this.limit, page)
			.then(users => this.hendlers.onSuccess(res, users))
			.catch(err => this.hendlers.onError(res, 'Erro ao listar Usuários', err))
	}

	createUser(req: Request, res: Response) {
		const result  = {
			name: req.body.name,
			email: req.body.email
		};

		this.userService.create(req.body)
			.then(user => this.hendlers.onSuccess(res, (user > 0) ? result : {}))
			.catch(err => this.hendlers.onError(res, 'Errro ao criar Usuário', err))
	}

	getUserById(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.userService.getById(id)
			.then(user => this.hendlers.onSuccess(res, user))
			.catch(err => this.hendlers.onError(res, 'Error ao Buscar Usuário', err))
	}

	updateUser(req: Request, res: Response) {
		const id = parseInt(req.params.id);
		const user = req.body;
		const result = { id, ...user};

		delete result.password;

		this.userService.update(id , user)
			.then(user => this.hendlers.onSuccess(res, (user > 0) ? result : {} ))
			.catch(err => this.hendlers.onError(res, 'Erro ao atualizar Usuário', err))
	}

	deletUser(req: Request, res: Response) {
		const id = parseInt(req.params.id);
		const result = { message: 'Usuário deletado com sucesso'};

		this.userService.delete(id)
			.then(action => this.hendlers.onSuccess(res, (action) ? result : action ))
			.catch(err => this.hendlers.onError(res, 'Erro ao remover Usuário', err))
	}
}

export default new UserController();

