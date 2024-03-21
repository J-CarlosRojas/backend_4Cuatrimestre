import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food) private readonly foodRespository: Repository<Food>,
  ) {}

  create(CreateFoodDto: CreateFoodDto): Promise<Food> {
    //Crea un objeto FOOD
    const food = new Food();
    food.name = CreateFoodDto.name;
    food.description = CreateFoodDto.description;
    food.category = CreateFoodDto.category;
    food.image = CreateFoodDto.image;
    food.price = CreateFoodDto.price;
    //Metodo que crea una tabla TypeORM
    return this.foodRespository.save(food);
  }

  async findAll(): Promise<Food[]> {
    return this.foodRespository.find();
  }

  findOne(id: number): Promise<Food> {
    return this.foodRespository.findOneBy({ id: id });
  }

  async delete(id: string): Promise<void> {
    await this.foodRespository.delete(id);
  }
}
