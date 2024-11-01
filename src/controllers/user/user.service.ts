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
    
    
}
