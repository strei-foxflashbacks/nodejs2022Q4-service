import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { AlbumService } from 'src/album/album.service';
import { ArtistService } from 'src/artist/artist.service';

@Module({
  controllers: [TrackController],
  providers: [TrackService, AlbumService, ArtistService],
})
export class TrackModule {}
