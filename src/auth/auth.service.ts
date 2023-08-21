import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  signup(dto: UserDto) {
    return this.userService.createNew(dto.login, dto.password);
  }

  signin() {
    console.log('signin');
  }

  logout() {
    console.log('logout');
  }

  refresh() {
    console.log('refresh');
  }
}
