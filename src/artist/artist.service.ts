import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Artist } from './artist.model';
import { v4 } from 'uuid';
import { isUUID } from 'class-validator';

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

  getArtistById(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException('Artist id is invalid (or not UUID)');
    }
    const artist = this.artists.find((record) => record.id === id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return { ...artist };
  }
}
