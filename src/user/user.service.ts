import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { User } from './user.model';
import { v4 } from 'uuid';
import recordFinder from 'src/utils/recordFinder';

@Injectable()
export class UserService {
  private users: User[] = [];

  private excludePassword(user: User) {
    return Object.fromEntries(
      Object.entries(user).filter((key) => key[0] !== 'password'),
    );
  }

  createNew(passedLogin: string, passedPassword: string) {
    if (passedLogin === undefined || passedPassword === undefined) {
      throw new BadRequestException('User is missing required fields');
    }
    if (typeof passedLogin !== 'string' || typeof passedPassword !== 'string') {
      throw new BadRequestException('Invalid input');
    }
    const userId = v4();
    const version = 1;
    const createdAt = Date.now();
    const updatedAt = createdAt;
    const newUser = new User(
      userId,
      passedLogin,
      version,
      createdAt,
      updatedAt,
      passedPassword,
    );
    this.users.push(newUser);
    const output = this.excludePassword(newUser) as User;
    return output;
  }

  getUsers() {
    const output = this.users.map((user) => this.excludePassword(user));
    return output;
  }

  getUserById(id: string) {
    const user = recordFinder('User', id, this.users) as User;
    const output = this.excludePassword(user);
    return output;
  }

  updateUser(id: string, oldPassword: string, newPassword: string) {
    if (oldPassword === undefined || newPassword === undefined) {
      throw new BadRequestException('User is missing required fields');
    }
    if (typeof oldPassword !== 'string' || typeof newPassword !== 'string') {
      throw new BadRequestException('Invalid input');
    }
    const user = recordFinder('User', id, this.users) as User;
    if (oldPassword && oldPassword !== user.password) {
      throw new ForbiddenException('Old password is incorrect');
    }
    user.password = newPassword;
    user.version++;
    user.updatedAt = Date.now();
    const output = this.excludePassword(user) as User;
    return output;
  }

  deleteUser(id: string) {
    recordFinder('User', id, this.users) as User;
    const index = this.users.findIndex((record) => record.id === id);
    this.users.splice(index, 1);
  }
}
