import { IsString, IsUUID } from 'class-validator';

export class JWTPayload {
  @IsUUID()
  userId: string;

  @IsString()
  refreshHash: string;
}
