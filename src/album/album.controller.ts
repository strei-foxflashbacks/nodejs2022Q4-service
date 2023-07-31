import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { ArtistService } from 'src/artist/artist.service';

@Controller('album')
export class AlbumController {
  constructor(
    private readonly albumService: AlbumService,
    private readonly artistService: ArtistService,
  ) {}

  @Post()
  addAlbum(
    @Body('name') albumName: string,
    @Body('year') releaseYear: number,
    @Body('artistId') artistId: string | null,
  ) {
    if (artistId !== undefined && artistId !== null) {
      this.artistService.validateArtistID(artistId);
    }
    const newAlbum = this.albumService.createNewAlbum(
      albumName,
      releaseYear,
      artistId,
    );
    return newAlbum;
  }

  @Get()
  getAlbums() {
    return this.albumService.getAlbums();
  }

  @Get(':id')
  getAlbum(@Param('id') albumId: string) {
    return this.albumService.getAlbumByID(albumId);
  }

  @Put(':id')
  updateTheAlbum(
    @Param('id') albumId: string,
    @Body('name') albumName: string,
    @Body('year') releaseYear: number,
    @Body('artistId') artistId: string | null,
  ) {
    if (artistId !== undefined && artistId !== null) {
      this.artistService.validateArtistID(artistId);
    }
    return this.albumService.updateAlbumById(
      albumId,
      albumName,
      releaseYear,
      artistId,
    );
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTheAlbum(@Param('id') albumId: string) {
    this.albumService.deleteAlbumById(albumId);
    return null;
  }
}
