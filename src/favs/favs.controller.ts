import {
  Controller,
  Param,
  Post,
  UnprocessableEntityException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { FavsService } from './favs.service';
import { TrackService } from 'src/track/track.service';
import { ArtistService } from 'src/artist/artist.service';
import { AlbumService } from 'src/album/album.service';

@Controller('favs')
export class FavsController {
  constructor(
    private readonly favsService: FavsService,
    private readonly trackService: TrackService,
    private readonly artistService: ArtistService,
    private readonly albumService: AlbumService,
  ) {}

  @Post('artist/:id')
  favoriteArtist(@Param('id') artistId: string) {
    try {
      this.artistService.validateArtistID(artistId);
      this.favsService.addArtistToFavorites(artistId);
      return { message: 'Artist added to favorites' };
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw new UnprocessableEntityException(
          "Artist with this id doesn't exist",
        );
      } else if (err instanceof BadRequestException) {
        throw new BadRequestException(err.message);
      } else {
        throw err;
      }
    }
  }

  @Post('album/:id')
  favoriteAlbum(@Param('id') albumId: string) {
    try {
      this.albumService.validateAlbumID(albumId);
      this.favsService.addAlbumToFavorites(albumId);
      return { message: 'Album added to favorites' };
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw new UnprocessableEntityException(
          "Album with this id doesn't exist",
        );
      } else if (err instanceof BadRequestException) {
        throw new BadRequestException(err.message);
      } else {
        throw err;
      }
    }
  }

  @Post('track/:id')
  favoriteTrack(@Param('id') trackId: string) {
    try {
      this.trackService.validateTrackId(trackId);
      this.favsService.addTrackToFavorites(trackId);
      return { message: 'Track added to favorites' };
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw new UnprocessableEntityException(
          "Track with this id doesn't exist",
        );
      } else if (err instanceof BadRequestException) {
        throw new BadRequestException(err.message);
      } else {
        throw err;
      }
    }
  }
}
