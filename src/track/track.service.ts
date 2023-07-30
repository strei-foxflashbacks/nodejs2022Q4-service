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
}
