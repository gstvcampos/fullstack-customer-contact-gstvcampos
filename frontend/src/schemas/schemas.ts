import { z } from 'zod'

export const clientSchema = z.object({
  id: z.string(),
  fullName: z.string().min(3, 'minimo 3 caracteres'),
  email: z.string().email('Formato de email invalido'),
  password: z.string().min(8, 'minimo 8 caracteres'),
  phone: z.string().min(8, 'minimo 8 caracteres'),
})

export const createClientSchema = clientSchema.omit({
  id: true,
})

export const partialClientSchema = createClientSchema.partial()

export const contactSchema = z.object({
  id: z.string(),
  userId: z.string(),
  email: z.string().email('Formato de email invalido'),
  phone: z.string().min(8, 'minimo 8 caracteres'),
})

export const createContactSchema = contactSchema.omit({
  id: true,
  userId: true,
})

export const partialContactSchema = createContactSchema.partial()
