import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete, HttpCode } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';

@Controller('food')
export class FoodController {
  //Instancia del servicio FoodService
  constructor(private readonly serviceFood: FoodService) {}

  @Post('save')
  @HttpCode(201)
  create(@Body() CreateFoodDto: CreateFoodDto): Promise<Food> {
    return this.serviceFood.create(CreateFoodDto);
  }

  @Get('')
  findAll(): Promise<Food[]> {
    return this.serviceFood.findAll();
  }

  @Get('find/:id') 
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Food> {
    return this.serviceFood.findOne(id);
  }

  @Delete('delete/:id')
  delete(@Param(' id ') id: string): Promise<void> {
    return this.serviceFood.delete(id);
  }


}
