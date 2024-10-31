import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Campaign } from './entities/campaign.entity';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity'; 
import { CampaignController } from './campaign/campaign.controller';
import { CampaignService } from './campaign/campaign.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // Deja vacío si no tienes contraseña
      database: 'db_marketing',
      entities: [Customer, User,Campaign, Message],
      synchronize: true,
    }), 
    TypeOrmModule.forFeature([Customer, User, Campaign, Message]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService]
})
export class AppModule {}
