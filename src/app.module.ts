import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Campaign } from './entities/campaign.entity';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity'; 
import { CustomerController } from './controllers/customer/customer.controller';
import { MessageController } from './controllers/message/message.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerService } from './controllers/customer/customer.service';
import { MessageService } from './controllers/message/message.service';
import { UserService } from './controllers/user/user.service';
import { CampaignController } from './controllers/campaign/campaign.controller';
import { CampaignService } from './controllers/campaign/campaign.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_marketing',
      entities: [Customer, User,Campaign, Message],
      synchronize: false,
    }), 
    TypeOrmModule.forFeature([Customer, User, Campaign, Message]),
  ],
  controllers: [CampaignController, CustomerController, MessageController, UserController],
  providers: [CampaignService, CustomerService, MessageService, UserService]
})
export class AppModule {}
