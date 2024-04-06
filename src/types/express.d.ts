// express.d.ts
import { type Request } from 'express';
import { UserEntity } from '../entity/UserEntity';

declare module 'express' {
	export interface Request {
		user?: UserEntity;
	}
}

export interface AuthRequest extends Request {
	user?: UserEntity;
	authorized?: boolean;
}
