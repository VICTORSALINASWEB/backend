import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ example: '' })
  username: string;

  @ApiProperty({ example: true })
  status: boolean;

  @ApiProperty({ example: 0})
  customer_id: number;
}