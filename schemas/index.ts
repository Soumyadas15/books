import * as z from "zod";

export const SearchSchema = z.object({
    name: z.string().min(1, {
      message: "Book name is required",
    }),
    author: z.string().min(6, {
      message: "Author name is required",
    }),
});