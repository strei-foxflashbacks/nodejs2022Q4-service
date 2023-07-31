import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Put(':id')
  updateUserPassword(
    @Param('id') userId: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.userService.updateUser(userId, oldPassword, newPassword);
  }
}
