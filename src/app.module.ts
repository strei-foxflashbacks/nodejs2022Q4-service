import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ArtistController } from './artist/artist.controller';
import { ArtistService } from './artist/artist.service';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [AuthModule, UserModule, ArtistModule],
  controllers: [AppController, ArtistController],
  providers: [AppService, ArtistService],
})
export class AppModule {}
