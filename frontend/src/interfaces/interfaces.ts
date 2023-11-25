import { clientSchema, contactSchema, createClientSchema, createContactSchema, partialClientSchema, partialContactSchema } from "@/schemas/schemas";
import { z } from "zod";

export type Client = z.infer<typeof clientSchema>;
export type CreateClient = z.infer<typeof createClientSchema>;
export type PartialClient = z.infer<typeof partialClientSchema>;

export type Contact = z.infer<typeof contactSchema>;
export type CreateContact = z.infer<typeof createContactSchema>;
export type PartialContact = z.infer<typeof partialContactSchema>;
