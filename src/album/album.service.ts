import { Injectable, BadRequestException } from '@nestjs/common';
import { Album } from './album.model';
import { v4 } from 'uuid';
import recordFinder from 'src/utils/recordFinder';

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

  getAlbums() {
    return [...this.albums];
  }

  getAlbumByID(id: string) {
    const album = recordFinder('Album', id, this.albums);
    return { ...album };
  }

  updateAlbumById(
    id: string,
    name: string,
    year: number,
    artistId: string | null,
  ) {
    const album = recordFinder('Album', id, this.albums) as Album;
    const index = this.albums.findIndex((record) => record.id === id);
    const updatedAlbum = { ...album };
    if (name) {
      updatedAlbum.name = name;
    }
    if (year) {
      updatedAlbum.year = year;
    }
    if (artistId) {
      updatedAlbum.artistId = artistId;
    }
    this.albums[index] = updatedAlbum;
    return updatedAlbum;
  }

  deleteAlbumById(id: string) {
    recordFinder('Album', id, this.albums);
    const index = this.albums.findIndex((record) => record.id === id);
    this.albums.splice(index, 1);
  }
}
