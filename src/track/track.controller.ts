import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TrackService } from './track.service';
import { ArtistService } from 'src/artist/artist.service';
import { AlbumService } from 'src/album/album.service';

@Controller('track')
export class TrackController {
  constructor(
    private readonly trackService: TrackService,
    private readonly artistService: ArtistService,
    private readonly albumService: AlbumService,
  ) {}

  @Post()
  addTrack(
    @Body('name') trackName: string,
    @Body('artistId') artistId: string | null,
    @Body('albumId') albumId: string | null,
    @Body('duration') duration: number,
  ) {
    if (artistId !== undefined && artistId !== null) {
      this.artistService.validateArtistID(artistId);
    }
    if (albumId !== undefined && albumId !== null) {
      this.albumService.validateAlbumID(albumId);
    }
    const newTrack = this.trackService.createNewTrack(
      trackName,
      artistId,
      albumId,
      duration,
    );
    return newTrack;
  }

  @Get()
  getTracks() {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getTrack(@Param('id') trackId: string) {
    return this.trackService.getTrackById(trackId);
  }

  @Put(':id')
  updateTheTrack(
    @Param('id') trackId: string,
    @Body('name') trackName: string,
    @Body('artistId') artistId: string | null,
    @Body('albumId') albumId: string | null,
    @Body('duration') duration: number,
  ) {
    if (artistId !== undefined && artistId !== null) {
      this.artistService.validateArtistID(artistId);
    }
    if (albumId !== undefined && albumId !== null) {
      this.albumService.validateAlbumID(albumId);
    }
    return this.trackService.updateTrackById(
      trackId,
      trackName,
      artistId,
      albumId,
      duration,
    );
  }
}
