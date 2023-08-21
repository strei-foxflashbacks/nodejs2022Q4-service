import { IsString, IsUUID } from 'class-validator';

export class RefreshDto {
  @IsUUID()
  userId: string;

  @IsString()
  refreshHash: string;
}
