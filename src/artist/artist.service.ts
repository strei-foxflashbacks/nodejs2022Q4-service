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
  private findArtist(artistId: string) {
    if (!isUUID(artistId)) {
      throw new BadRequestException('Artist id is invalid (or not UUID)');
    }
    const artist = this.artists.find((record) => record.id === artistId);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

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
    const artist = this.findArtist(id);
    return { ...artist };
  }

  updateArtistById(id: string, name: string, grammy: boolean) {
    const artist = this.findArtist(id);
    const index = this.artists.findIndex((record) => record.id === id);
    const updatedArtist = { ...artist };
    if (name) {
      updatedArtist.name = name;
    }
    if (grammy) {
      updatedArtist.grammy = grammy;
    }
    this.artists[index] = updatedArtist;
    return updatedArtist;
  }
}
