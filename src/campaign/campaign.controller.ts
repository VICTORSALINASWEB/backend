import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignsService: CampaignService) {}

  @Get()
  async findAll(
    @Query('fechaInicio') fechaInicio: string,
    @Query('fechaFin') fechaFin: string,
  ) {
    return this.campaignsService.findByDateRange(fechaInicio, fechaFin);
  }

  @Post()
  async createCampaign(@Body() data: any) {
    return this.campaignsService.createCampaign(data);
  }

  @Get(':id/messages')
  async getMessages(@Param ('id',ParseIntPipe ) id: number) {
    return this.campaignsService.getCampaignMessages(id);
  }
}
