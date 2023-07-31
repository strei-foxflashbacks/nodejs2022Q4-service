import { Injectable, BadRequestException } from '@nestjs/common';
import { Track } from './track.model';
import { v4 } from 'uuid';
import isInteger from 'src/utils/isInteger';
import recordFinder from 'src/utils/recordFinder';

@Injectable()
export class TrackService {
  private tracks: Track[] = [];

  createNewTrack(
    name: string,
    artistId: string | null,
    albumId: string | null,
    duration: number,
  ) {
    if (
      name === undefined ||
      artistId === undefined ||
      albumId === undefined ||
      duration === undefined
    ) {
      throw new BadRequestException('Track is missing required fields');
    }
    if (!isInteger(duration)) {
      throw new BadRequestException('Duration should be an integer');
    }
    const trackId = v4();
    const newTrack = new Track(trackId, name, artistId, albumId, duration);
    this.tracks.push(newTrack);
    return newTrack;
  }

  getTracks() {
    return [...this.tracks];
  }

  getTrackById(id: string) {
    const track = recordFinder('Track', id, this.tracks);
    return { ...track };
  }

  updateTrackById(
    id: string,
    name: string,
    artistId: string | null,
    albumId: string | null,
    duration: number,
  ) {
    if (!isInteger(duration)) {
      throw new BadRequestException('Duration should be an integer');
    }
    const track = recordFinder('Track', id, this.tracks) as Track;
    const index = this.tracks.findIndex((record) => record.id === id);
    const updatedTrack = { ...track };
    if (name) {
      updatedTrack.name = name;
    }
    if (artistId) {
      updatedTrack.artistId = artistId;
    }
    if (albumId) {
      updatedTrack.albumId = albumId;
    }
    if (duration) {
      updatedTrack.duration = duration;
    }
    this.tracks[index] = updatedTrack;
    return updatedTrack;
  }

  deleteTrackById(id: string) {
    recordFinder('Track', id, this.tracks) as Track;
    const index = this.tracks.findIndex((record) => record.id === id);
    this.tracks.splice(index, 1);
  }

  validateTrackId(id: string) {
    recordFinder('Track', id, this.tracks);
  }

  artistDeleted(artistId: string) {
    this.tracks.forEach((track) => {
      if (track.artistId === artistId) {
        track.artistId = null;
      }
    });
  }

  albumDeleted(albumId: string) {
    this.tracks.forEach((track) => {
      if (track.albumId === albumId) {
        track.albumId = null;
      }
    });
  }
}
