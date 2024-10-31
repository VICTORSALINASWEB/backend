import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {

    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async getAllUsers(){
        return  await this.customerService.findAll();
    }
    
    @Get(':id')
    async getUserById(@Param ('id',ParseIntPipe ) id: number) {
     return  await this.customerService.findOne(id);
       
    }
  
    @Post()
    async createUser(@Body() dataBody:CreateCustomerDto){
      return  await this.customerService.create(dataBody);

    }
    
    @Patch(':id')
    async updateUser(@Param ('id',ParseIntPipe ) id: number,@Body() dataBody: UpdateCustomerDto){
        return await this.customerService.update(id, dataBody);

    }
  
    @Delete(':id')
    async deleteUser(@Param ('id',ParseIntPipe ) id: number){
       return this.customerService.remove(id);

    }
}
