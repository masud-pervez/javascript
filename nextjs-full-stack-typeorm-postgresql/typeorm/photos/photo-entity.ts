import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata"

@Entity()
export class PhotoEntity {
//   constructor(name: string, id: number, description: string) {
//     this.name = name;
//     this.id = id;
//     this.description = description;
//   }

  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  name: string| undefined
  
  @Column()
  description: string| undefined;
}
