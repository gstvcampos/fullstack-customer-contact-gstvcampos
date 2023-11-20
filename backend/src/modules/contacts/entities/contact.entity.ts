import { randomUUID } from 'crypto';

export class Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  userId: string;
  createdAt: string;

  constructor() {
    this.id = randomUUID();
  }
}
