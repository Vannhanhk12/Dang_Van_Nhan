import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsInt, Min, Max, IsOptional } from "class-validator";

export class CreateCodeChallengeDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  difficulty!: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(1000)
  point!: number;
}

export class GetCodeChallengesDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  limit?: number;

  @IsOptional()
  @IsString()
  difficulty?: string;

  @IsOptional()
  @IsString()
  search?: string;
}
