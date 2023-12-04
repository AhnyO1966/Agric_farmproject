import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgricFarmService } from './agric_farm.service';
import { agric_farmEntity } from './Entities/agric_farm.entity';
import { agric_farmDto } from 'src/DTO/agric_farm.dto';

@Controller('agricfarm')
export class AgricFarmController {
   
    constructor(private proService:AgricFarmService){}

    @Post()
    async postAgric_farm(@Body()payload){
        return await this.proService.createAgric_farm(payload)
    }

    @Get(':id')
    async findId(@Param('id')id):Promise<agric_farmEntity>{
       
        return await this.proService.findById(id)
    }

    @Get()
    async findAll(){
        return await this.proService.getAll()
    }

    @Put(':id')
    async updateById(@Param('id')id, @Body()payload:agric_farmDto){
        return await this.proService.updateById(id, payload)
    }

    @Delete(':id')
    async DeleteQueryBuilder(@Param('id')id){
        return await this.proService.DeleteById(id)
    }

    }

