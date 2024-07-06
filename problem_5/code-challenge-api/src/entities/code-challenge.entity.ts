import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base-entity";

@Entity({ name: "code_challenges" })
export class CodeChallenge extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  difficulty!: string;

  @Column()
  point!: number;

  @Column({ nullable: true })
  note?: string;
}
