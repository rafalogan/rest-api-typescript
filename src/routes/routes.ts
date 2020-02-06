import {Application} from 'express';

import UserRoutes from '../modules/user/user-routes';
import AuthRouter from '../modules/auth/auth-router';

class Routes {

	private user: UserRoutes;
	private token: AuthRouter;
	private auth;

	constructor(app: Application, auth: any) {
		this.user = new UserRoutes();
		this.token = new AuthRouter();
		this.auth = auth;
		this.getRoutes(app);
	}

	getRoutes(app: Application): void {
		// Rotas Auth
		app.route('/signin').post(this.token.signin);

		// Rotas de Usuários
		app.route('/users').all(this.auth.authenticate())
			.get(this.user.index).post(this.user.create);

		app.route('/users/:id').all(this.auth.authenticate())
			.get(this.user.findOne).put(this.user.update)
			.delete(this.user.destroy);
	}
}

export default Routes;
