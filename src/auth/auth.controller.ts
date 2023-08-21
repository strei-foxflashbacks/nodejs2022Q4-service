import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/dto';
import { Tokens } from 'src/types';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('signup')
  async signup(@Body() dto: UserDto): Promise<Tokens> {
    return await this.authService.signup(dto);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() dto: UserDto): Promise<Tokens> {
    return await this.authService.signin(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout() {
    this.authService.logout();
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh() {
    this.authService.refresh();
  }
}
