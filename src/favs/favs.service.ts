import { Injectable, NotFoundException } from '@nestjs/common';
import { Favorites } from './favs.model';

@Injectable()
export class FavsService {
  private favorites: Favorites = {
    artists: [],
    albums: [],
    tracks: [],
  };

  private deleteRecord(name: string, id: string, recordArr: string[]) {
    const res = recordArr.find((seekingId) => seekingId === id);
    const index = recordArr.findIndex((artist) => artist === res);
    if (!res) {
      throw new NotFoundException(`${name} is not in favorites`);
    }
    recordArr.splice(index, 1);
    return { message: `${name} is removed from favorites` };
  }

  getFavoritesIds() {
    return { ...this.favorites };
  }

  addArtistToFavorites(id: string) {
    this.favorites.artists.push(id);
  }

  addAlbumToFavorites(id: string) {
    this.favorites.albums.push(id);
  }

  addTrackToFavorites(id: string) {
    this.favorites.tracks.push(id);
  }

  deleteArtistFromFavorites(id: string) {
    return this.deleteRecord('Artist', id, this.favorites.artists);
  }

  deleteAlbumFromFavorites(id: string) {
    return this.deleteRecord('Album', id, this.favorites.albums);
  }

  deleteTrackFromFavorites(id: string) {
    return this.deleteRecord('Track', id, this.favorites.tracks);
  }
}
