import { z } from "zod";

// Define as regras do formulário
export const bookSchema = z.object({
  title: z.string().min(1, { message: "Title é obrigatório" }),
  author: z.string().min(1, { message: "Author é obrigatório" }),
  price: z.number({ message: "Price deve ser um número" }).positive({ message: "Price deve ser positivo" }),
  launchDate: z.string().min(1, { message: "Launch Date é obrigatório" }),
});
