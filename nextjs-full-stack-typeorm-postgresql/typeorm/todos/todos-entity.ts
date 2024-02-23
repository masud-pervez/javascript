import "reflect-metadata"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todos')
export class TodosEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;
}
