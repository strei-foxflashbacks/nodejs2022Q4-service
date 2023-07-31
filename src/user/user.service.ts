import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  private excludePassword(user: User) {
    return Object.fromEntries(
      Object.entries(user).filter((key) => key[0] != 'password'),
    );
  }

  createNew(passedLogin: string, passedPassword: string) {
    if (passedLogin === undefined || passedPassword === undefined) {
      throw new BadRequestException('User is missing required fields');
    }
    const userId = v4();
    const version = 1;
    const createdAt = Date.now();
    const updatedAt = createdAt;
    const newUser = new User(
      userId,
      passedLogin,
      passedPassword,
      version,
      createdAt,
      updatedAt,
    );
    this.users.push(newUser);
    const output = this.excludePassword(newUser);
    return output;
  }
}
