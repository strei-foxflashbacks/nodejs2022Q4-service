export class User {
  constructor(
    public id: string,
    public login: string,
    public version: number,
    public createdAt: number,
    public updatedAt: number,
    public password?: string,
    public refreshHash?: string,
  ) {}
}
