import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//Modelo para la base de datos TYPEORM
@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  category: string;
  @Column()
  price: number;
}
