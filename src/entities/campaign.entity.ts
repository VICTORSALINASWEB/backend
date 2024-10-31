import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Message } from './message.entity';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'date'})
  process_date: Date;

  @Column({ type: 'time'})
  process_hour: string;

  @Column({ type: 'int', default: 1 }) // 1: pendiente
  process_status: number;

  @Column({ type: 'varchar', length: 255})
  phone_list: string;

  @Column({ type: 'text' })
  message_text: string;

  @Column({ type: 'int'})
  user_id: number;

  @ManyToOne(
    () =>User,
    (user) => user.campaigns
  )
  @JoinColumn({ name: 'user_id' })
  user:User;

  @OneToMany(
    () => Message,
    (message)=> message.campaign
  )
  messages: Message[];

} 