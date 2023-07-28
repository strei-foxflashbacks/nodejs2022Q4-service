import { Body, Controller, Post } from '@nestjs/common';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  addArtist(
    @Body('name') artistName: string,
    @Body('grammy') hasGrammy: boolean,
  ) {
    const newArtistId = this.artistService.createNewArtist(
      artistName,
      hasGrammy,
    );
    return { id: newArtistId };
  }
}
