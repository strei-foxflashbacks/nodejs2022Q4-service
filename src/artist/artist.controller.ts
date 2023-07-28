import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
