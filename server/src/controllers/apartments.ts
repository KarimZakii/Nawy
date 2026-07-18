import { Router } from "express";
import { validate } from "../services/apartments/validate.js";
import {
  apartmentIdSchema,
  createapartmentSchema,
  updateapartmentSchema,
} from "../services/apartments/apartment.schema.js";
import {
  apartmentDetails,
  apartmentsList,
  createApartment,
  updateApartment,
  deleteApartment,
} from "../services/apartments/apartment.js";

const router = Router();

router.get("/", async (req, res) => {
  const apartments = await apartmentsList(req.query.q as string);
  res.json(apartments);
});

router.get(
  "/:id",
  validate({ params: apartmentIdSchema }),
  async (req, res) => {
    const { id } = req.params as unknown as { id: number };
    const apartment = await apartmentDetails(id);
    res.json(apartment);
  },
);

router.post(
  "/",
  validate({ body: createapartmentSchema }),
  async (req, res) => {
    const apartment = await createApartment(req.body);
    res.status(201).json(apartment);
  },
);

router.patch(
  "/:id",
  validate({ params: apartmentIdSchema, body: updateapartmentSchema }),
  async (req, res) => {
    const { id } = req.params as unknown as { id: number };

    try {
      const apartment = await updateApartment(id, req.body);
      res.json(apartment);
    } catch (e) {
      res.status(404).json({ error: "apartment not found" });
    }
  },
);

router.delete(
  "/:id",
  validate({ params: apartmentIdSchema }),
  async (req, res) => {
    const { id } = req.params as unknown as { id: number };

    try {
      await deleteApartment(id);
      res.status(204).send();
    } catch {
      res.status(404).json({ error: "apartment not found" });
    }
  },
);

export default router;
