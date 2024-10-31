import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
      ) {}
    
      async create(userData: CreateUserDto) {
        
        const customer = await this.customerRepository.findOne({ where: { id: userData.customer_id } });

        if (!customer) {
            throw new NotFoundException(`El cliente no existe`);
        }

        const user = this.userRepository.create({
            ...userData,
            customer,
        }); 
        const resp = await this.userRepository.save(user);

        const body = {
          message: '',
          statusCode: 200,
          user: resp
        }
        return body;
      }
    
      async findAll() {
        const users = await this.userRepository.find();

        const body = {
          message: '',
          statusCode: 200,
          users
        }
        return body;
      }
    
      async findOne(id: number) {
        const user = await this.userRepository.findOne({ where: { id }});

        const body = {
          message: '',
          statusCode: 200,
          user
        }
        return body;
      }
    
      async update(id: number, userData: UpdateUserDto) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`No se encontró el usuario.`);
        }

        if (userData.customer_id) {
            const customer = await this.customerRepository.findOne({ where: { id: userData.customer_id } });
            if (!customer) {
                throw new NotFoundException(`El cliente no existe`);
            }
            user.customer = customer;
        }
        // Actualizar los demás campos
        user.username = userData.username ?? user.username;
        user.status = userData.status ?? user.status;
        const updatedUser = await this.userRepository.save(user);

        return {
            message: 'User updated successfully',
            statusCode: 200,
            user: updatedUser,
        };
      }
    
      async remove(id: number) {
        await this.userRepository.delete(id);
        const body = {
          message: '',
          statusCode: 200
        }
        return body;
      }
}
