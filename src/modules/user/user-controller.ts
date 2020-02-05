import {Request, Response} from 'express';
import httpStatus from 'http-status';

import UserService from './user-service';
import {onSuccess} from '../../api/response/success-hendler';
import {onError} from '../../api/response/error-hendler';


class UserController {

	private userService: UserService;
	private limit: number = 10;

	constructor() {
		this.userService = new UserService();
	}

	getAllUsers(req: Request, res: Response) {
		const page: number = req.query.page || 1;

		this.userService.getAll(this.limit, page)
			.then(users => onSuccess(res, users))
			.catch(err => onError(res, 'Erro ao listar Usuários', err))
	}

	createUser(req: Request, res: Response) {
		this.userService.create(req.body)
			.then(user => onSuccess(res, user))
			.catch(err => onError(res, 'Errro ao criar Usuário', err))
	}

	getUserById(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.userService.getById(id)
			.then(user => onSuccess(res, user))
			.catch(err => onError(res, 'Error ao Buscar Usuário', err))
	}

	updateUser(req: Request, res: Response) {
		const id = parseInt(req.params.id);
		const user = req.body;

		this.userService.update(id , user)
			.then(user => onSuccess(res, user))
			.catch(err => onError(res, 'Erro ao atualizar Usuário', err))
	}

	deletUser(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.userService.delete(id)
			.then(action => onSuccess(res, { message: 'Usuário deletado com sucesso', action}))
			.catch(err => onError(res, 'Erro ao remover Usuário', err))
	}
}

export default UserController;

