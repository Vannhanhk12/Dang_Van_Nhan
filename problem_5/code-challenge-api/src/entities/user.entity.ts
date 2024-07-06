import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Score } from "./score.entity";
import { BaseEntity } from "./base-entity";

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @OneToOne(() => Score)
  @JoinColumn()
  score?: Score;
}
