import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}
  async getCampaignMessages(campaignId: number) {
    const message = await this.messagesRepository.find({
      where: { campaign: { id: campaignId } },
    });
    if (message.length === 0) {
      throw new BadRequestException('No encontrado');
    }

    return message;
  }
}
