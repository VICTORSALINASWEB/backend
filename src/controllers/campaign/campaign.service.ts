import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from 'src/entities/campaign.entity';
import { Between, Repository } from 'typeorm';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignsRepository: Repository<Campaign>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findByDateRange(fechaInicio: string, fechaFin: string) {
    const startDate = new Date(fechaInicio);
    const endDate = new Date(fechaFin);
    let campaigns: Campaign[];
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new BadRequestException('Las fechas proporcionadas no son válidas.');
    }

    if (startDate > endDate) {
      throw new BadRequestException('La fecha de inicio no puede ser mayor que la fecha de fin.');
    } 
    const queryBuilder = this.campaignsRepository.createQueryBuilder(); 
    campaigns = await queryBuilder
      .where('process_date  BETWEEN :fechaInicio AND :fechaFin', {
        fechaInicio:fechaInicio,
        fechaFin:fechaFin,
      }).getMany();
    const body = {
      message: '',
      statusCode: 200,
      campaigns
    }
    return body;
  }
  

  async create(data: CreateCampaignDto) {
    
    const user = await this.userRepository.findOne({ where: { id: data.user_id } });
    if (!user) {
      throw new NotFoundException(`El usuario no existe`);
    }
    const campaign = this.campaignsRepository.create({
      ...data,
      user
    });
    const resp = await this.campaignsRepository.save(campaign);

    const body = {
      message: '',
      statusCode: 200,
      campaign: resp
    }
    return body;
  }

  async findOne(id: number){
    const campaign = await this.campaignsRepository.findOne({ where: { id } });

    const body = {
      message: '',
      statusCode: 200,
      campaign
    }
    return body;
  }

  async update(id: number, campaignData: UpdateCampaignDto){

    const campaign = await this.campaignsRepository.findOne({ where: { id } });
    if (!campaign) {
        throw new NotFoundException(`No se encontró la campaña.`);
    }

    if (campaignData.user_id) {
      const user = await this.userRepository.findOne({ where: { id: campaignData.user_id } });
      if (!user) {
        throw new NotFoundException(`El usuario no existe`);
      }
      campaign.user = user;
  }
    campaign.name = campaignData.name ?? campaign.name;
    campaign.process_date = campaignData.process_date ?? campaign.process_date;
    campaign.process_hour = campaignData.process_hour ?? campaign.process_hour;
    campaign.process_status = campaignData.process_status ?? campaign.process_status;
    campaign.phone_list = campaignData.phone_list ?? campaign.phone_list;
    campaign.message_text = campaignData.message_text ?? campaign.message_text;
    const updatedCampaign = await this.userRepository.save(campaign);

    return {
      message: 'User updated successfully',
      statusCode: 200,
      campaign: updatedCampaign,
    };

  }

  async remove(id: number){
    await this.campaignsRepository.delete(id);

    const body = {
      message: '',
      statusCode: 200
    }
    return body;
  }
}
