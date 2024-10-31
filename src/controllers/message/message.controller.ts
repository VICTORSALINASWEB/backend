import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}



  @Get()
  getAllMessages(){
      return null;
  }
  
  @Get(':id')
  async getMessages(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.getCampaignMessages(id);
  }

  @Post()
  createMessage(@Body() body:any){
      return {
          ok: true,
          method: 'POST',
          body
      }
  }
  
  @Patch(':id')
  updateMessage(@Param ('id',ParseIntPipe ) id: number,@Body() body:any){
      return {
          ok: true,
          method: 'Patch',
          id,
          body
      }
  }

  @Delete(':id')
  deleteMessage(@Param ('id',ParseIntPipe ) id: number){
      return {
          ok: true,
          method: 'Delete',
          id
      }
  }
}
