import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'boolean' ,default: true})
  status: boolean;

  @OneToMany(
    () => User,
    (user)=> user.customer
  )
  users: User[];
}