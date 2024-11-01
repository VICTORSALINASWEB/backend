import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
      ) {}
  
      async findAll() {
        const customers = await this.customerRepository.find();

        const body = {
          message: '',
          statusCode: 200,
          customers
        }
        return body;
      }

      async findOne(id: number){
        const customer = await this.customerRepository.findOne({ where: { id } });

        const body = {
          message: '',
          statusCode: 200,
          customer
        }
        return body;
      }


}
