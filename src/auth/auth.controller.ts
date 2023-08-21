import { Body, Controller, Post } from '@nestjs/common';
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
  signin() {
    this.authService.signin();
  }

  @Post('logout')
  logout() {
    this.authService.logout();
  }

  @Post('refresh')
  refresh() {
    this.authService.refresh();
  }
}
