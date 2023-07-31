import { Module } from '@nestjs/common';
import { FavsController } from './favs.controller';
import { FavsService } from './favs.service';
import { ArtistService } from 'src/artist/artist.service';
import { AlbumService } from 'src/album/album.service';
import { TrackService } from 'src/track/track.service';

@Module({
  controllers: [FavsController],
  providers: [FavsService, ArtistService, AlbumService, TrackService],
})
export class FavsModule {}
