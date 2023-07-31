import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { AlbumService } from 'src/album/album.service';
import { TrackService } from 'src/track/track.service';
import { FavsService } from 'src/favs/favs.service';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService, AlbumService, TrackService, FavsService],
})
export class ArtistModule {}
