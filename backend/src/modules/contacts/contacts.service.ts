import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
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
  async findUser(userId: string) {
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(userId: string, createContactDto: CreateContactDto) {
    const user = await this.findUser(userId);
    const contact = new Contact();
    Object.assign(contact, {
      ...createContactDto,
    });
    await this.prisma.contact.create({
      data: {
        id: contact.id,
        email: contact.email,
        phone: contact.phone,
        fullName: user.fullName,
        userId: user.id,
      },
    });
    await this.userService.update(userId, createContactDto);
    return contact;
  }

  async findAll(userId: string) {
    await this.findUser(userId);
    const contacts = await this.prisma.contact.findMany({
      where: { userId: userId },
    });
    return contacts;
  }

  async findOne(userId: string, id: string) {
    await this.findUser(userId);
    const contact = await this.prisma.contact.findUnique({
      where: { userId: userId, id: id },
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async update(userId: string, id: string, updateContactDto: UpdateContactDto) {
    await this.findUser(userId);
    await this.findOne(userId, id);
    const updateContact = await this.prisma.contact.update({
      where: { userId: userId, id: id },
      data: { ...updateContactDto },
    });
    await this.userService.update(userId, updateContactDto);
    return updateContact;
  }

  @HttpCode(204)
  async remove(userId: string, id: string) {
    await this.findUser(userId);
    await this.findOne(userId, id);
    await this.prisma.contact.delete({
      where: { userId: userId, id: id },
    });
  }
}
