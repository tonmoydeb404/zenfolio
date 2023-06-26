import zod from "zod";

const contactSchema = zod.object({
  name: zod
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must have 2 characters" })
    .max(50, { message: "Name can contain maximum 2 characters" }),
  email: zod
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  message: zod
    .string({ required_error: "Message is required" })
    .min(2, { message: "Message must have 2 characters" }),
});

export type ContactSchema = zod.infer<typeof contactSchema>;

export default contactSchema;
