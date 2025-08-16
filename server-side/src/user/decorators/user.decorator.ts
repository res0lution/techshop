import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User } from '@prisma/client'
import { Request } from 'express'
import { CustomUser } from 'src/types/express'

export const CurrentUser = createParamDecorator(
	(
		data: keyof User,
		ctx: ExecutionContext
	): CustomUser | string | undefined => {
		const request: Request = ctx.switchToHttp().getRequest()
		const user: CustomUser | undefined = request.user

		return data && user ? (user[data] as string) : user
	}
)
