import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ArtistController } from './artist/artist.controller';
import { ArtistService } from './artist/artist.service';
import { ArtistModule } from './artist/artist.module';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [AuthModule, UserModule, ArtistModule, AlbumModule],
  controllers: [AppController, ArtistController, AlbumController],
  providers: [AppService, ArtistService, AlbumService],
})
export class AppModule {}
