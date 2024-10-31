import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignsService: CampaignService) {}

  @Get()
  async getAllCampaign(
    @Query('fechaInicio') fechaInicio: string,
    @Query('fechaFin') fechaFin: string,
  ) {
    return this.campaignsService.findByDateRange(fechaInicio, fechaFin);
  }

  @Post()
  async createCampaign(@Body() data: any) {
    return this.campaignsService.createCampaign(data);
  }
 
  
  @Get(':id')
  getUserById(@Param ('id',ParseIntPipe ) id: number){
      
      return  null;
  }
 
  @Patch(':id')
  updateUser(@Param ('id',ParseIntPipe ) id: number,@Body() body:any){
      return {
          ok: true,
          method: 'Patch',
          id,
          body
      }
  }

  @Delete(':id')
  deleteUser(@Param ('id',ParseIntPipe ) id: number){
      return {
          ok: true,
          method: 'Delete',
          id
      }
  }
}
