export class Track {
  constructor(
    public id: string,
    public name: string,
    public artistId: string | null,
    public albumId: string | null,
    public duration: number,
  ) {}
}
