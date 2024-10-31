import { ApiProperty } from "@nestjs/swagger";

export class UpdateCampaignDto {
    @ApiProperty({ example: 0})
    id: number;
  
    @ApiProperty({ example: '' })
    name: string;
  
    @ApiProperty({ example: '' })
    process_date: Date;
  
    @ApiProperty({ example: '' })
    process_hour: string;
  
    @ApiProperty({ example: 1 })
    process_status: number;
  
    @ApiProperty({ example: '' })
    phone_list: string;
  
    @ApiProperty({ example: '' })
    message_text: string;

    @ApiProperty({ example: 0})
    user_id: number;
}