import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { agric_farmEntity } from './Entities/agric_farm.entity';
import { AgricFarmService } from 'src/Agric_farm/agric_farm.service';
import { AgricFarmController } from './agric_farm.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([agric_farmEntity])
    ],
    controllers: [AgricFarmController],
    providers: [AgricFarmService]

})
export class AgricFarmModule {}
