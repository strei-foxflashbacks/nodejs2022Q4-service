import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    console.log('signup');
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
