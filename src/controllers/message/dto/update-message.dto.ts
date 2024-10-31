import { ApiProperty } from "@nestjs/swagger";

export class UpdateMessageDto {
    @ApiProperty({ example: 0})
    id: number;
  
    @ApiProperty({ example: '' })
    phone: string;
  
    @ApiProperty({ example: '' })
    text: string;
  
    @ApiProperty({ example: 1 })
    shipping_status: number;

    @ApiProperty({ example: '' })
    process_date: Date;
  
    @ApiProperty({ example: '' })
    process_hour: string;
  
    @ApiProperty({ example: 0})
    campaign_id: number;
}