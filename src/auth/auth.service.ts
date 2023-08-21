import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RefreshDto } from 'src/strategies/refresh.model';
import { Tokens } from 'src/types';
import { UserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';
import hashData from 'src/utils/hashData';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  private refreshHashes: RefreshDto[] = [];

  private async getTokens(userId: string, email: string) {
    const [acessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'access-secret',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'refresh-secret',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: acessToken,
      refresh_token: refreshToken,
    };
  }

  async signup(dto: UserDto): Promise<Tokens> {
    const hash = await hashData(dto.password);
    const newUser = this.userService.createNew(dto.login, hash);
    const tokens = await this.getTokens(newUser.id, newUser.login);
    await this.updateRefreshHash(newUser.id, tokens.refresh_token);
    return tokens;
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

  async updateRefreshHash(userId: string, refreshToken: string) {
    const hash = await hashData(refreshToken);
    const existingUser = this.refreshHashes.find(
      (user) => (user.userId = userId),
    );
    if (existingUser) {
      existingUser.refreshHash = hash;
    }
  }
}
