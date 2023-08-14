import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { AlbumService } from 'src/album/album.service';
import { ArtistService } from 'src/artist/artist.service';
import { FavsService } from 'src/favs/favs.service';

@Module({
  controllers: [TrackController],
  providers: [TrackService, ArtistService, AlbumService, FavsService],
})
export class TrackModule {}
