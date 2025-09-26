import { Prisma, User } from '@/generated/client'

export interface UsersRepository {
  findByEmail(_email: string): Promise<User | null>
  create(_data: Prisma.UserCreateInput): Promise<User>
}
