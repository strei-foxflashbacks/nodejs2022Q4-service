import { Injectable } from '@nestjs/common';
import { Favorites } from './favs.model';

@Injectable()
export class FavsService {
  private favorites: Favorites = {
    artists: [],
    albums: [],
    tracks: [],
  };

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
}
