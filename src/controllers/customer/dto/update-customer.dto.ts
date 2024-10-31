import { ApiProperty } from "@nestjs/swagger";

export class UpdateCustomerDto {
    @ApiProperty({ example: 0 })
    id: number;

    @ApiProperty({ example: '' })
    name: string;
  
    @ApiProperty({ example: true })
    status: boolean;
}