import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
      ) {}
    
      // Crear un nuevo cliente
      async create(customerData: Partial<Customer>): Promise<Customer> {
        const customer = this.customerRepository.create(customerData);
        return this.customerRepository.save(customer);
      }
    
      // Obtener todos los clientes
      async findAll(): Promise<Customer[]> {
        return this.customerRepository.find({ relations: ['users'] });
      }
    
      // Obtener un cliente por ID
      async findOne(id: number): Promise<Customer> {
        return this.customerRepository.findOne({ where: { id }, relations: ['users'] });
      }
    
      // Actualizar un cliente
      async update(id: number, customerData: Partial<Customer>): Promise<Customer> {
        await this.customerRepository.update(id, customerData);
        return this.findOne(id); // Retorna el cliente actualizado
      }
    
      // Eliminar un cliente
      async remove(id: number): Promise<void> {
        await this.customerRepository.delete(id);
      }
}
