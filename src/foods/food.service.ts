import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class FoodService {
    constructor(@InjectRepository(Food) private readonly foodRespository: Repository  <Food> ){}

    create(CreateFoodDto: CreateFoodDto): Promise <Food>{
        const food : new Food();
        food.name = CreateFoodDto.name;
        food.description = CreateFoodDto.description;
        food.category = CreateFoodDto.category;
        food.image = CreateFoodDto.image;
        food.price = CreateFoodDto.price;

        return this.foodRespository.save(food);

    }
}
