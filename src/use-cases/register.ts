import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

// SOLID
// D - Dependency Inversion Principle

export class RegisterUseCase {
  // eslint-disable-next-line
  private usersRepository: any
  // eslint-disable-next-line
  constructor(usersRepository: any) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSameEmail) {
      throw new Error('E-mail already exists.')
    }

    const password_hash = await hash(password, 6)

    await this.usersRepository.create({ name, email, password_hash })
  }
}
