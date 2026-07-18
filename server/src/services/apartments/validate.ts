import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";

type ValidationSchema = {
  body?: ZodType;
  query?: ZodType;
  params?: ZodType;
};

export function validate(schema: ValidationSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (schema.params) {
      const result = schema.params.safeParse(req.params);
      if (!result.success) {
        return res.status(400).json({ errors: result.error.flatten() });
      }
      req.params = result.data as typeof req.params;
    }

    if (schema.query) {
      const result = schema.query.safeParse(req.query);
      if (!result.success) {
        return res.status(400).json({ errors: result.error.flatten() });
      }
      req.query = result.data as typeof req.query;
    }

    if (schema.body) {
      const result = schema.body.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ errors: result.error.flatten() });
      }
      req.body = result.data;
    }

    next();
  };
}
