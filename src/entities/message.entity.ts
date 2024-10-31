import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Campaign } from './campaign.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'int', default: 1 }) // 1: pendiente
  shipping_status: number;

  @Column({ type: 'date'})
  process_date: Date;

  @Column({ type: 'time' })
  process_hour: string;

  @ManyToOne(
    () =>Campaign,
    (campaign) => campaign.messages
  )
  @JoinColumn({ name: 'campaign_id' })
  campaign:Campaign;
}
