import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Album } from 'src/album/album.model';
import { Artist } from 'src/artist/artist.model';
import { isUUID } from 'class-validator';
import { Track } from 'src/track/track.model';

const recordFinder = (
  seeking: string,
  id: string,
  database: (Artist | Album | Track)[],
) => {
  if (!isUUID(id)) {
    throw new BadRequestException(`${seeking} id is invalid (or not UUID)`);
  }
  const result = database.find((record) => record.id === id);
  if (!result) {
    throw new NotFoundException(`${seeking} not found`);
  }
  return result;
};
export default recordFinder;
