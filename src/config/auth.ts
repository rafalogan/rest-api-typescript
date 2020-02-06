import passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';

import UserService from '../modules/user/user-service';

const config = require('./config')();

export default function AuthConfig() {
	const userService = new UserService();
	const params = {
		secretOrKey: config.authSecret,
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	};
	const strategy = new Strategy(params, ((payload, done) => {
		const  id = parseInt(payload.id);
		userService.getById(id)
			.then(user => done(null, user ? {id: user.id, email: user.email } : false))
			.catch(err => done(err, false))
	}));

	passport.use(strategy);

	return {
		authenticate: () => passport.authenticate('jwt', { session: false})
	}
}
