import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RefreshDto } from 'src/strategies/refresh.model';
import { Tokens } from 'src/types';
import { UserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';
import hashData from 'src/utils/hashData';
import * as bcrypt from 'bcrypt';

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

  async signin(dto: UserDto): Promise<Tokens> {
    const existingUser = this.userService.getUserByLogin(dto.login);
    if (!existingUser) {
      throw new ForbiddenException('Invalid credentials');
    }
    const passwordMatch = await bcrypt.compare(
      dto.password,
      existingUser.password,
    );
    if (!passwordMatch) {
      throw new ForbiddenException('Invalid credentials');
    }
    const tokens = await this.getTokens(existingUser.id, existingUser.login);
    await this.updateRefreshHash(existingUser.id, tokens.refresh_token);
    return tokens;
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
