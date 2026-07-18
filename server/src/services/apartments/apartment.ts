import { prisma } from "../../utils/db";
import { CreateapartmentInput, UpdateapartmentInput } from "./apartment.schema";

export const apartmentsList = async (query?: string) => {
  return await prisma.apartment.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      location: true,
    },
    where: query
      ? {
          OR: [
            { unitName: { contains: query, mode: "insensitive" } },
            { unitNumber: { contains: query, mode: "insensitive" } },
            { project: { contains: query, mode: "insensitive" } },
          ],
        }
      : {},
    orderBy: { createdAt: "desc" },
  });
};

export const apartmentDetails = async (id: number) => {
  return await prisma.apartment.findFirstOrThrow({
    where: {
      id,
    },
  });
};

export const createApartment = async (data: CreateapartmentInput) => {
  return await prisma.apartment.create({
    data,
  });
};

export const updateApartment = async (
  id: number,
  data: UpdateapartmentInput,
) => {
  return await prisma.apartment.update({
    where: { id },
    data,
  });
};

export const deleteApartment = async (id: number) => {
  return await prisma.apartment.delete({
    where: { id },
  });
};

// export const countApartments = async () => {
//   return await prisma.apartment.count();
// };
