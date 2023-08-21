import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { ArtistService } from 'src/artist/artist.service';
import { AlbumService } from 'src/album/album.service';
import { FavsService } from 'src/favs/favs.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('track')
export class TrackController {
  constructor(
    private readonly trackService: TrackService,
    private readonly artistService: ArtistService,
    private readonly albumService: AlbumService,
    private readonly favsService: FavsService,
  ) {}

  @UseGuards(AuthGuard('jwt-access'))
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

  @UseGuards(AuthGuard('jwt-access'))
  @Get()
  getTracks() {
    return this.trackService.getTracks();
  }

  @UseGuards(AuthGuard('jwt-access'))
  @Get(':id')
  getTrack(@Param('id') trackId: string) {
    return this.trackService.getTrackById(trackId);
  }

  @UseGuards(AuthGuard('jwt-access'))
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

  @UseGuards(AuthGuard('jwt-access'))
  @Delete(':id')
  @HttpCode(204)
  deleteTheTrack(@Param('id') trackId: string) {
    this.trackService.deleteTrackById(trackId);
    try {
      this.favsService.deleteTrackFromFavorites(trackId);
    } catch {
      return null;
    }
  }
}
