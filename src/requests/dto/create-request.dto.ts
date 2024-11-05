import {
  ApiProperty,
} from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateRequestDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  levelOfOperator: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  branch: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  isCurrentlyEmployed: boolean;

  @ApiProperty({
    required: true,
    type: Date,
  })
  @IsDate()
  transitionDate: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  location: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsUrl()
  fileUrl?: any;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  supportType: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  mentalHealthSupportType: string;
}
