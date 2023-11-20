import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('users/:userId/contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(
    @Param('userId') userId: string,
    @Body() createContactDto: CreateContactDto,
  ) {
    return this.contactsService.create(userId, createContactDto);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.contactsService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.contactsService.findOne(userId, id);
  }

  @Patch(':id')
  update(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(userId, id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('userId') userId: string, @Param('id') id: string) {
    return this.contactsService.remove(userId, id);
  }
}
