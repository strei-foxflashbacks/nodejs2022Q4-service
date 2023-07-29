export class Album {
  constructor(
    public id: string,
    public name: string,
    public year: number,
    public artistId: string | null,
  ) {}
}
