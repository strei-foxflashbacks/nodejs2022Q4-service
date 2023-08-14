import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  // createNewUser(
  //   @Body('login') userLogin: string,
  //   @Body('password') userPassword: string,
  // ) {
  //   return this.userService.createNew(userLogin, userPassword);
  // }
  async createNewUser(@Body() dto: UserDto) {
    // return this.userService.createNew(dto.login, dto.password);
    return await this.userService.signUp(dto);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') userId: string) {
    return await this.userService.getUserById(userId);
  }

  @Put(':id')
  updateUserPassword(
    @Param('id') userId: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.userService.updateUser(userId, oldPassword, newPassword);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteUser(@Param('id') userId: string) {
    await this.userService.deleteUser(userId);
  }
}
