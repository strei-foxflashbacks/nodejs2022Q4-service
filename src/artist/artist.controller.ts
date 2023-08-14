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
import { ArtistService } from './artist.service';
import { AlbumService } from 'src/album/album.service';
import { TrackService } from 'src/track/track.service';
import { FavsService } from 'src/favs/favs.service';

@Controller('artist')
export class ArtistController {
  constructor(
    private readonly artistService: ArtistService,
    private readonly albumService: AlbumService,
    private readonly trackService: TrackService,
    private readonly favsService: FavsService,
  ) {}

  @Post()
  addArtist(
    @Body('name') artistName: string,
    @Body('grammy') hasGrammy: boolean,
  ) {
    const newArtist = this.artistService.createNewArtist(artistName, hasGrammy);
    return newArtist;
  }

  @Get()
  getArtists() {
    return this.artistService.getArtists();
  }

  @Get(':id')
  getTheArtist(@Param('id') artistId: string) {
    return this.artistService.getArtistById(artistId);
  }

  @Put(':id')
  updateTheArtist(
    @Param('id') artistId: string,
    @Body('name') artistName: string,
    @Body('grammy') hasGrammy: boolean,
  ) {
    return this.artistService.updateArtistById(artistId, artistName, hasGrammy);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTheArtist(@Param('id') artistId: string) {
    this.artistService.deleteArtistById(artistId);
    this.albumService.artistDeleted(artistId);
    this.trackService.artistDeleted(artistId);
    try {
      this.favsService.deleteArtistFromFavorites(artistId);
    } catch {
      return null;
    }
  }
}
