import {Application} from 'express';

import UserRoutes from '../modules/user/user-routes';
import AuthRouter from '../modules/auth/auth-router';

class Routes {
	private token = AuthRouter;
	private user =  UserRoutes;

	constructor() {}

	initRoutes(app: Application, auth: any): void {
		// Rotas Auth
		app.route('/signin').post(this.token.signin);

		// Rotas de Usuários
		app.route('/users')
			.all(auth.init().authenticate())
			.get(this.user.index).post(this.user.create);

		app.route('/users/:id')
			.all(auth.init().authenticate())
			.get(this.user.findOne).put(this.user.update)
			.delete(this.user.destroy);
	}
}

export default new Routes();
