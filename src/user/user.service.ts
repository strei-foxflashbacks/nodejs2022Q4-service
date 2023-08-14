import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.model';
// import { User } from '@prisma/client';
import { UserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { v4 } from 'uuid';
import recordFinder from 'src/utils/recordFinder';
import { isUUID } from 'class-validator';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  private users: User[] = [];

  private excludePassword(user: User) {
    return Object.fromEntries(
      Object.entries(user).filter((key) => key[0] !== 'password'),
    );
  }

  async signUp(dto: UserDto) {
    const user = this.prisma.user.create({
      data: {
        login: dto.login,
        password: dto.password,
      },
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return user;
  }

  // createNew(passedLogin: string, passedPassword: string) {
  //   if (passedLogin === undefined || passedPassword === undefined) {
  //     throw new BadRequestException('User is missing required fields');
  //   }
  //   if (typeof passedLogin !== 'string' || typeof passedPassword !== 'string') {
  //     throw new BadRequestException('Invalid input');
  //   }
  //   const userId = v4();
  //   const version = 1;
  //   const createdAt = Date.now();
  //   const updatedAt = createdAt;
  //   const newUser = new User(
  //     userId,
  //     passedLogin,
  //     passedPassword,
  //     version,
  //     createdAt,
  //     updatedAt,
  //   );
  //   this.users.push(newUser);
  //   const output = this.excludePassword(newUser);
  //   return output;
  // }

  async getUsers() {
    // const output = this.users.map((user) => this.excludePassword(user));
    const output = await this.prisma.user.findMany({
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return output;
  }

  async getUserById(id: string) {
    // const user = recordFinder('User', id, this.users) as User;
    if (!isUUID(id))
      throw new BadRequestException('User id is invalid (or not UUID)');
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // const output = this.excludePassword(user);
    return user;
  }

  updateUser(id: string, oldPassword: string, newPassword: string) {
    if (oldPassword === undefined || newPassword === undefined) {
      throw new BadRequestException('User is missing required fields');
    }
    if (typeof oldPassword !== 'string' || typeof newPassword !== 'string') {
      throw new BadRequestException('Invalid input');
    }
    const user = recordFinder('User', id, this.users) as User;
    if (oldPassword !== user.password) {
      throw new ForbiddenException('Old password is incorrect');
    }
    user.password = newPassword;
    user.version++;
    user.updatedAt = Date.now();
    const output = this.excludePassword(user);
    return output;
  }

  async deleteUser(id: string) {
    if (!isUUID(id))
      throw new BadRequestException('User id is invalid (or not UUID)');
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return { message: 'User deleted successfully' };
    // recordFinder('User', id, this.users) as User;
    // const index = this.users.findIndex((record) => record.id === id);
    // this.users.splice(index, 1);
  }
}
