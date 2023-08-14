import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

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

  async getUsers() {
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
    return user;
  }

  async updateUser(id: string, oldPassword: string, newPassword: string) {
    await this.getUserById(id);
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (user.password !== oldPassword) {
      throw new ForbiddenException('Old password is incorrect');
    }
    const updatedUser = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: newPassword,
        version: user.version + 1,
      },
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return updatedUser;
  }

  async deleteUser(id: string) {
    await this.getUserById(id);
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
