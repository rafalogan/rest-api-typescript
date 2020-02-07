import {Request, Response} from 'express';

import UserService from '../user/user-service';
import Handlers from '../../api/response/handlers';

class AuthController {

	constructor(private userService = UserService,
							private handlers = Handlers) {}

	authentication(req: Request, res: Response)  {
		console.log(req.body);
		const credentials = {
			email: req.body.email,
			password: req.body.password
		};

		if (credentials.email && credentials.password) this.userService.getByEmail(credentials.email)
			.then(user => this.handlers.authSucess(res, credentials, user))
			.catch(error => {
				console.error('Error A autenticação', error);
				this.handlers.authFaill(req, res)
			})
	}
}

export default new AuthController;
