import { z } from "zod";

export const createapartmentSchema = z.object({
  title: z.string().min(1),
  price: z.coerce.number().positive(),
  bedrooms: z.coerce.number().optional(),
  bathrooms: z.coerce.number().optional(),
  area: z.coerce.number().int().min(10),
  description: z.string(),
  location: z.string(),
  project: z.string().optional(),
  unitNumber: z.string().optional(),
  unitName: z.string().optional(),
  images: z.array(z.string()).optional(),
});

export const updateapartmentSchema = createapartmentSchema.partial();

export const apartmentIdSchema = z.object({
  id: z.coerce.number().int(),
});

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
});

export type CreateapartmentInput = z.infer<typeof createapartmentSchema>;
export type UpdateapartmentInput = z.infer<typeof updateapartmentSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
