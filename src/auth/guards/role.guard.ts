import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from 'src/decorators/role.decorator'
import { Role } from 'src/enum/role.enum'

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	async canActivate(context: ExecutionContext) {
		const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass()
		])
		if (!requiredRoles) {
			return true
		}
		const request = await context.switchToHttp().getRequest()
		console.log({ request: request.user })
		return requiredRoles.some((role) => request?.user.role?.includes(role))
	}
}
