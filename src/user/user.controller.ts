import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt-access'))
  @Post()
  createNewUser(
    @Body('login') userLogin: string,
    @Body('password') userPassword: string,
  ) {
    return this.userService.createNew(userLogin, userPassword);
  }

  @UseGuards(AuthGuard('jwt-access'))
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard('jwt-access'))
  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @UseGuards(AuthGuard('jwt-access'))
  @Put(':id')
  updateUserPassword(
    @Param('id') userId: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.userService.updateUser(userId, oldPassword, newPassword);
  }

  @UseGuards(AuthGuard('jwt-access'))
  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') userId: string) {
    this.userService.deleteUser(userId);
  }
}
