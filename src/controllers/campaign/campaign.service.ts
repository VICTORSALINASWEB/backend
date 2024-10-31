import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from 'src/entities/campaign.entity';
import { Message } from 'src/entities/message.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignsRepository: Repository<Campaign>
  ) {}

  async findByDateRange(fechaInicio: string, fechaFin: string) {
    const startDate = new Date(fechaInicio);
    const endDate = new Date(fechaFin);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new BadRequestException('Las fechas proporcionadas no son válidas.');
    }

    if (startDate > endDate) {
      throw new BadRequestException('La fecha de inicio no puede ser mayor que la fecha de fin.');
    }

    const resp = await this.campaignsRepository.find({
      where: { process_date: Between(new Date(fechaInicio), new Date(fechaFin)) },
      relations: ['messages'],
    });

    return resp;
  }

  async createCampaign(data: any) {
    const campaign = this.campaignsRepository.create(data);
    return this.campaignsRepository.save(campaign);
  }

  
}
