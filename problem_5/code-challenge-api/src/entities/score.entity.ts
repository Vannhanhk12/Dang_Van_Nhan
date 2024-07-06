import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity()
export class Score extends BaseEntity {
  @Column()
  value!: number;
}
