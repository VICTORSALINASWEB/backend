import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}
    
    @Get(':id')
    async getMessages(@Param('id', ParseIntPipe) id: number) {
        return this.messageService.getCampaignMessages(id);
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messageService.create(body);
    }
    
    @Patch(':id')
    updateMessage(@Param ('id',ParseIntPipe ) id: number,@Body() body: UpdateMessageDto){
        return this.messageService.update(id,body);
    }

    @Delete(':id')
    deleteMessage(@Param ('id',ParseIntPipe ) id: number){
        return  this.messageService.remove(id);
    }
}
