import passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';

import UserService from '../modules/user/user-service';

const config = require('./config')();

class AuthConfig {

	private params = {
		secretOrKey: config.authSecret,
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	};

	constructor(private userService = UserService) {}

	init() {
		const strategy = new Strategy(this.params, ((payload, done) => {
			const  id = parseInt(payload.id);
			this.userService.getById(id)
				.then(user => done(null, user ? {id: user.id, email: user.email } : false))
				.catch(err => done(err, false))
		}));

		passport.use(strategy);

		return {
			authenticate: () => passport.authenticate('jwt', { session: false})
		}
	}

}

export default new AuthConfig();
