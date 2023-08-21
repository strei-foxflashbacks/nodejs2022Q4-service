import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { AcessStrategy, RefreshStrategy } from 'src/strategies';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, UserService, AcessStrategy, RefreshStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
