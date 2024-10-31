import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

@Controller('customer')
export class CustomerController {

    @Get()
    getAllUsers(){
        return null;
    }
    
    @Get(':id')
    getUserById(@Param ('id',ParseIntPipe ) id: number){
        
        return  null;
    }
  
    @Post()
    createUser(@Body() body:any){
        return {
            ok: true,
            method: 'POST',
            body
        }
    }
    
    @Patch(':id')
    updateUser(@Param ('id',ParseIntPipe ) id: number,@Body() body:any){
        return {
            ok: true,
            method: 'Patch',
            id,
            body
        }
    }
  
    @Delete(':id')
    deleteUser(@Param ('id',ParseIntPipe ) id: number){
        return {
            ok: true,
            method: 'Delete',
            id
        }
    }
}
