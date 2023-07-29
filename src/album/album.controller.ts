import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}
