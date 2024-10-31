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

      async create(customerData: CreateCustomerDto){
        const customer =  await this.customerRepository.create(customerData);
        const resp =  await this.customerRepository.save(customer);
        
        const body = {
          message: '',
          statusCode: 200,
          customer: resp
        }
        return body;
      }
      
      async update(id: number, customerData: CreateCustomerDto){
        await this.customerRepository.update(id, customerData);
        return this.findOne(id);
      }
    
      async remove(id: number) {
         await this.customerRepository.delete(id);
        const body = {
          message: '',
          statusCode: 200
        }
        return body;
      }
}
