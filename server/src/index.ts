import "dotenv/config";
import express from "express";
import cors from "cors";
import apartmentsRouter from "./controllers/apartments";

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Welcome To Nawy Apartments" });
});

app.use("/apartments", apartmentsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
