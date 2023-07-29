import { Injectable, BadRequestException } from '@nestjs/common';
import { Album } from './album.model';
import { v4 } from 'uuid';

@Injectable()
export class AlbumService {
  private albums: Album[] = [];

  createNewAlbum(name: string, year: number, artistId: string | null) {
    if (name === undefined || year === undefined || artistId === undefined) {
      throw new BadRequestException('Album is missing required fields');
    }
    const albumId = v4();
    const newAlbum = new Album(albumId, name, year, artistId);
    this.albums.push(newAlbum);
    return newAlbum;
  }
}
