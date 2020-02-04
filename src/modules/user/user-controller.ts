import {Request, Response} from 'express';
import httpStatus from 'http-status';

import UserService from './user-service';


class UserController {

	private userService: UserService;
	private limit: number = 10;

	constructor() {
		this.userService = new UserService();
	}

	getAll(req: Request, res: Response) {
		const page: number = req.query.page || 1;

		this.userService.getAll(this.limit, page)
			.then(users => res.status(httpStatus.OK).json(users))
			.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao Buscar Usuarios' }))
	}



	createUser(req: Request, res: Response) {

		this.userService.create(req.body)
			.then(user => res.status(httpStatus.OK).json(user))
			.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Error ou cadastrar Usuário' }))
	}

	getById(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.userService.getById(id)
			.then(user => res.status(httpStatus.OK).json(user))
			.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'error ao buscar Usuário' }))
	}

	updateUser(req: Request, res: Response) {
		const id = parseInt(req.params.id);
		const user = req.body;

		this.userService.update(id , user)
			.then(user => res.status(httpStatus.OK).json({payload: user}))
			.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'error ao atualizar Usuário' }))
	}

	deletUser(req: Request, res: Response) {
		const id = parseInt(req.params.id);

		this.userService.delete(id)
			.then(() => res.status(httpStatus.OK).json({ paload: 'Usuário deletado'}))
			.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Error ao delatar' }))
	}
}

export default UserController;

