import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'User email',
    example: 'jhondoe@mail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User phone',
    example: '12345678',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;
}
