import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from './food.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Food])],
    controllers:[],
    providers:[],
})
export class FoodModule {}
