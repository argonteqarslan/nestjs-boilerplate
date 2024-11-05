import { ApiProperty } from '@nestjs/swagger';

export class Request {
  @ApiProperty({ type: String, nullable: false })
  levelOfOperator: string;

  @ApiProperty({ type: String, nullable: false })
  branch: string;

  @ApiProperty({ type: String, nullable: false })
  lastName: string;

  @ApiProperty({ type: String, nullable: false })
  firstName: string;

  @ApiProperty({ type: Boolean, nullable: false })
  isCurrentlyEmployed: boolean;

  @ApiProperty({ type: Date, nullable: false })
  transitionDate: Date;

  @ApiProperty({ type: String, nullable: false })
  location: string;

  @ApiProperty({ type: String })
  fileUrl: string;

  @ApiProperty({ type: String, nullable: false })
  supportType: string;

  @ApiProperty({ type: String, nullable: false })
  mentalHealthSupportType: string;

  @ApiProperty({ type: String })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
