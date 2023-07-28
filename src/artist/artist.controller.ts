import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

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
}
