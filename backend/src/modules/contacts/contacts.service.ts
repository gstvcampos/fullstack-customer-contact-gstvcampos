import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    private userService: UsersService,
    private prisma: PrismaService,
  ) {}
  async create(userId: string, createContactDto: CreateContactDto) {
    await this.userService.findUniqueEmail(createContactDto.email);
    const user = await this.userService.findUserOrError(userId);
    const contact = new Contact();
    Object.assign(contact, {
      ...createContactDto,
    });
    await this.prisma.contact.create({
      data: {
        ...contact,
        fullName: user.fullName,
        userId: user.id,
      },
    });
    return contact;
  }

  async findAll(userId: string) {
    await this.userService.findUserOrError(userId);
    const contacts = await this.prisma.contact.findMany({
      where: { userId: userId },
    });
    return contacts;
  }

  async update(userId: string, id: string, updateContactDto: UpdateContactDto) {
    await this.userService.findUserOrError(userId);
    await this.userService.findUniqueEmail(updateContactDto.email);
    await this.findOne(userId, id);
    const updateContact = await this.prisma.contact.update({
      where: { userId: userId, id: id },
      data: { ...updateContactDto },
    });
    await this.userService.update(userId, updateContactDto);
    return updateContact;
  }

  async remove(userId: string, id: string) {
    await this.userService.findUserOrError(userId);
    await this.findOne(userId, id);
    await this.prisma.contact.delete({ where: { id } });
  }

  async findOne(userId: string, id: string) {
    await this.userService.findUserOrError(userId);
    const contact = await this.prisma.contact.findUnique({
      where: { userId: userId, id: id },
    });
    if (!contact) throw new NotFoundException('Contact not found');
    return contact;
  }
}
