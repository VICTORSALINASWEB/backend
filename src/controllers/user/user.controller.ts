import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers(){
        return this.userService.findAll();
    }
    
    @Get(':id')
    getUserById(@Param ('id',ParseIntPipe ) id: number){
        
        return  this.userService.findOne(id);
    }
  
    @Post()
    createUser(@Body() body: CreateUserDto){
        return this.userService.create(body);
    }
    
    @Patch(':id')
    updateUser(@Param ('id',ParseIntPipe ) id: number,@Body() body: UpdateUserDto){
        return this.userService.update(id,body);
    }

    @Delete(':id')
    deleteUser(@Param ('id',ParseIntPipe ) id: number){
        return this.userService.remove(id);
    }
}
