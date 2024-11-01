import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignsService: CampaignService) {}

  @Get()
  async getAllCampaign(
    @Query('fechaInicio') fechaInicio: string,
    @Query('fechaFin') fechaFin: string,
  ){
    return this.campaignsService.findByDateRange(fechaInicio, fechaFin);
  }

  @Post()
  async createCampaign(@Body() data: CreateCampaignDto ) {
    return this.campaignsService.create(data);
  }
 
  @Patch(':id')
  updateCampaign(@Param ('id',ParseIntPipe ) id: number,@Body() body: UpdateCampaignDto){
    
    return this.campaignsService.update(id,body);
  }


}
