import {
  Controller,
  Param,
  Post,
  UnprocessableEntityException,
  NotFoundException,
  BadRequestException,
  Get,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { FavsService } from './favs.service';
import { TrackService } from 'src/track/track.service';
import { ArtistService } from 'src/artist/artist.service';
import { AlbumService } from 'src/album/album.service';
import { FavoritesResponse } from './favs.model';
import { Artist } from 'src/artist/artist.model';
import { Album } from 'src/album/album.model';
import { Track } from 'src/track/track.model';

@Controller('favs')
export class FavsController {
  constructor(
    private readonly favsService: FavsService,
    private readonly trackService: TrackService,
    private readonly artistService: ArtistService,
    private readonly albumService: AlbumService,
  ) {}

  @Get()
  getFavorites() {
    const ids = this.favsService.getFavoritesIds();
    const response: FavoritesResponse = {
      artists: ids.artists.map((id) =>
        this.artistService.getArtistById(id),
      ) as Artist[],
      albums: ids.albums.map((id) =>
        this.albumService.getAlbumByID(id),
      ) as Album[],
      tracks: ids.tracks.map((id) =>
        this.trackService.getTrackById(id),
      ) as Track[],
    };
    return response;
  }

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

  @Delete('artist/:id')
  @HttpCode(204)
  deleteArtist(@Param('id') artistId: string) {
    this.artistService.validateArtistID(artistId);
    return this.favsService.deleteArtistFromFavorites(artistId);
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

  @Delete('album/:id')
  @HttpCode(204)
  deleteAlbum(@Param('id') albumId: string) {
    this.albumService.validateAlbumID(albumId);
    return this.favsService.deleteAlbumFromFavorites(albumId);
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

  @Delete('track/:id')
  @HttpCode(204)
  deleteTrack(@Param('id') trackId: string) {
    this.trackService.validateTrackId(trackId);
    return this.favsService.deleteTrackFromFavorites(trackId);
  }
}
