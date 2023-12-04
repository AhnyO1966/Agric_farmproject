import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { agric_farmEntity } from './Entities/agric_farm.entity';



@Injectable()
export class AgricFarmService {
    updateAllById: any;  
    constructor(@InjectRepository(agric_farmEntity) private readonly agric_farmRepo:Repository<agric_farmEntity>){}

async createAgric_farm(payload):Promise<AgricFarmService>{
    return await this.agric_farmRepo.save(payload) 
}
async findById(id: string):Promise<agric_farmEntity>{
    const find = await this.agric_farmRepo.findOne({where:{id:id}});
    
    if(!find){
     throw new HttpException(`sorry no product with id such ${id} found`, 404);
    }  
    return find; 
}
async getAll(){
    return await this.agric_farmRepo.find()

}

async updateById(id, payload){
    const find = await this.agric_farmRepo.findOneBy({id})
    if(!find){
        throw new HttpException(`sorry such product with id ${id}not fond`, 404);
    }
    await this.agric_farmRepo.update(id, payload)
    return await this.agric_farmRepo.findOneBy({id})
}

async DeleteById(id){
    const deleteId = await this.agric_farmRepo.findOneBy({id});
    if(!deleteId){
        throw new HttpException(`sorry no such id ${id}found`, 404)
    }
        await this.agric_farmRepo.delete(id) 
        return{
            statusCode: 200,
            message: `id ${id} successfully deleted`,
        }
}
}