import { Injectable } from '@nestjs/common';
import { Artist } from './artist.model';
import { v4 } from 'uuid';

@Injectable()
export class ArtistService {
  private artists: Artist[] = [];

  createNewArtist(name: string, grammy: boolean) {
    const artiststId = v4();
    const newArtist = new Artist(artiststId, name, grammy);
    this.artists.push(newArtist);
    return newArtist;
  }

  getArtists() {
    return [...this.artists];
  }
}
