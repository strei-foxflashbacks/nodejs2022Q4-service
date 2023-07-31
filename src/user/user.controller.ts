import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createNewUser(
    @Body('login') userLogin: string,
    @Body('password') userPassword: string,
  ) {
    return this.userService.createNew(userLogin, userPassword);
  }
}
