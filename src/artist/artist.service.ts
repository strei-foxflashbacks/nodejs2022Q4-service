import { BadRequestException, Injectable } from '@nestjs/common';
import { Artist } from './artist.model';
import { v4 } from 'uuid';
import recordFinder from 'src/utils/recordFinder';

@Injectable()
export class ArtistService {
  private artists: Artist[] = [];

  createNewArtist(name: string, grammy: boolean) {
    if (
      name === undefined ||
      grammy === undefined ||
      typeof name !== 'string' ||
      typeof grammy !== 'boolean'
    ) {
      throw new BadRequestException('Artist is missing required fields');
    }
    const artiststId = v4();
    const newArtist = new Artist(artiststId, name, grammy);
    this.artists.push(newArtist);
    return newArtist;
  }

  getArtists() {
    return [...this.artists];
  }

  getArtistById(id: string) {
    const artist = recordFinder('Artist', id, this.artists);
    return { ...artist };
  }

  updateArtistById(id: string, name: string, grammy: boolean) {
    if (typeof name !== 'string' || typeof grammy !== 'boolean') {
      throw new BadRequestException('Invalid input');
    }
    const artist = recordFinder('Artist', id, this.artists) as Artist;
    const index = this.artists.findIndex((record) => record.id === id);
    const updatedArtist = { ...artist };
    if (name) {
      updatedArtist.name = name;
    }
    updatedArtist.grammy = grammy;
    this.artists[index] = updatedArtist;
    return updatedArtist;
  }

  deleteArtistById(id: string) {
    recordFinder('Artist', id, this.artists);
    const index = this.artists.findIndex((record) => record.id === id);
    this.artists.splice(index, 1);
  }

  validateArtistID(id: string) {
    recordFinder('Artist', id, this.artists);
  }
}
