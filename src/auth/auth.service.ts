import { Injectable } from '@nestjs/common';
import { Tokens } from 'src/types';
import { UserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';
import hashData from 'src/utils/hashData';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(dto: UserDto): Promise<Tokens> {
    const hash = await hashData(dto.password);
    this.userService.createNew(dto.login, hash);
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
