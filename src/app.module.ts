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
import { TrackController } from './track/track.controller';
import { TrackService } from './track/track.service';
import { TrackModule } from './track/track.module';
import { FavsController } from './favs/favs.controller';
import { FavsService } from './favs/favs.service';
import { FavsModule } from './favs/favs.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ArtistModule,
    AlbumModule,
    TrackModule,
    FavsModule,
  ],
  controllers: [
    AppController,
    ArtistController,
    AlbumController,
    TrackController,
    FavsController,
    UserController,
    AuthController,
  ],
  providers: [
    AppService,
    ArtistService,
    AlbumService,
    TrackService,
    FavsService,
    UserService,
    AuthService,
  ],
})
export class AppModule {}
