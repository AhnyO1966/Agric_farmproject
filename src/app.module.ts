import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { agric_farmEntity } from './Agric_farm/Entities/agric_farm.entity';
import { AgricFarmModule } from './Agric_farm/agric_farm.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),

    
    TypeOrmModule.forRootAsync({      
      useFactory:(configService:ConfigService)=>({
        type: 'mysql',
        host: configService.getOrThrow('DB_HOST'),
        port: configService.getOrThrow('DB_PORT'),
        username: configService.getOrThrow('DB_USER'),
        password: configService.getOrThrow('DB_PASSWORD'),
        database: configService.getOrThrow('DB_NAME'),
        synchronize: configService.getOrThrow('DB_SYNCHRONIZE'),

        entities: [agric_farmEntity]

      }),
  
         inject:[ConfigService],
        }),
    AgricFarmModule,
  ]
  
})
export class AppModule {}
