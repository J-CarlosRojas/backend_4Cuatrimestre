import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from './food.entity';
import { FoodService } from './food.service';

@Module({
    imports: [TypeOrmModule.forFeature([Food])],
    controllers:[],
    providers:[FoodService],
})
export class FoodModule {}
