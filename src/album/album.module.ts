import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { ArtistService } from 'src/artist/artist.service';
import { FavsService } from 'src/favs/favs.service';
import { TrackService } from 'src/track/track.service';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService, ArtistService, TrackService, FavsService],
})
export class AlbumModule {}
