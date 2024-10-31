import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
    @ApiProperty({ example: '' })
    name: string;
  
    @ApiProperty({ example: true })
    status: boolean;
}