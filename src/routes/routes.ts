import {Application} from 'express';

import UserRoutes from '../modules/user/user-routes';

class Routes {

	private user: UserRoutes;

	constructor(app: Application) {
		this.user = new UserRoutes();
		this.getRoutes(app);
	}

	getRoutes(app: Application): void {
		// Rotas de Usuários
		app.route('/users')
			.get(this.user.index).post(this.user.create);

		app.route('/users/:id')
			.get(this.user.findOne).put(this.user.update)
			.delete(this.user.destroy);
	}
}

export default Routes;
