import passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';

import UserService from '../modules/user/user.service';

import Config from './config.env';


class AuthConfig {

	private params;

	constructor(private userService = UserService,
							private config = Config) {
		this.params =  {
			secretOrKey: this.config.authSecret,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
		};
	}

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
