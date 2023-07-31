import { Album } from 'src/album/album.model';
import { Artist } from 'src/artist/artist.model';
import { Track } from 'src/track/track.model';

export class Favorites {
  constructor(
    public artists: string[],
    public albums: string[],
    public tracks: string[],
  ) {}
}

export class FavoritesResponse {
  constructor(
    public artists: Artist[],
    public albums: Album[],
    public tracks: Track[],
  ) {}
}
