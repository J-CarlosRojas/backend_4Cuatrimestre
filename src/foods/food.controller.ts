import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';

//EndPoints

@Controller('food')
export class FoodController {
  //Instancia del servicio FoodService
  constructor(private readonly serviceFood: FoodService) {}

  //EndPoint nueva comida
  @Post('save')
  @HttpCode(201)
  create(@Body() CreateFoodDto: CreateFoodDto): Promise<Food> {
    return this.serviceFood.create(CreateFoodDto);
  }

  //Obtener comidas
  @Get('')
  findAll(): Promise<Food[]> {
    return this.serviceFood.findAll();
  }

  //Obtener una comida
  @Get('find/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Food> {
    return this.serviceFood.findOne(id);
  }

  //Borrar
  @Delete('delete/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.serviceFood.delete(id);
  }
}
