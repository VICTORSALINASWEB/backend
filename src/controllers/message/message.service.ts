import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Campaign } from 'src/entities/campaign.entity';
@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
    @InjectRepository(Campaign)
    private campaignsRepository: Repository<Campaign>,
  ) {}
  async getCampaignMessages(id: number) {
    const aMessages = await this.messagesRepository.find({
      where: { campaign: { id } },
    });

    const body = {
      message: '',
      statusCode: 200,
      aMessages
    }
    return body;
  }

  async create(messageData: CreateMessageDto) {
    const campaign = await this.campaignsRepository.findOne({ where: { id: messageData.campaign_id } });
    if (!campaign) {
      throw new NotFoundException(`La campaña no existe`);
    }

    const message = this.messagesRepository.create({
      ...messageData,
      campaign
    });
    const resp = await this.messagesRepository.save(message);

    const body = {
      message: '',
      statusCode: 200,
      aMessage: resp
    }
    return body;
  }

  async findOne(id: number) {
    const aMessage = await this.messagesRepository.findOne({ where: { id }});
    
    const body = {
      message: '',
      statusCode: 200,
      aMessage
    }
    return body;
  }

  async update(id: number, messageData: UpdateMessageDto) {
    
    const message = await this.messagesRepository.findOne({ where: { id } });
    if (!message) {
        throw new NotFoundException(`No se encontró el mensaje.`);
    }

    if (messageData.campaign_id) {
      const campaign = await this.campaignsRepository.findOne({ where: { id: messageData.campaign_id } });
      if (!campaign) {
        throw new NotFoundException(`La campaña no existe`);
      }
      message.campaign = campaign;
    }
    message.phone = messageData.phone ?? message.phone;
    message.text = messageData.text ?? message.text;
    message.shipping_status = messageData.shipping_status ?? message.shipping_status;
    message.process_date = messageData.process_date ?? message.process_date;
    message.process_hour = messageData.process_hour ?? message.process_hour;
    const updatedMessage = await this.messagesRepository.save(message);

    return {
      message: 'User updated successfully',
      statusCode: 200,
      aMessage: updatedMessage,
    };

  }

  async remove(id: number){
    await this.messagesRepository.delete(id);
    const body = {
      message: '',
      statusCode: 200
    }
    return body;
  }
}
