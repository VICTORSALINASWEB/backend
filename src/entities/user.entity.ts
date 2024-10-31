import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Campaign } from './campaign.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  username: string;

  @Column({ type: 'boolean',default: true })
  status: boolean;

  @ManyToOne(
    () =>Customer,
    (customer) => customer.users
  )
  @JoinColumn({ name: 'customer_id' })
  customer:Customer;

  @OneToMany(
    () => Campaign,
    (campaigns)=> campaigns.user
  )
  campaigns: Campaign[];
}