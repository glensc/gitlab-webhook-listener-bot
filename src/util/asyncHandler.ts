import type { NextFunction, Request, Response } from "express";

type FunctionType = (req: Request, res: Response, next: NextFunction) => Promise<void>;

// https://stackoverflow.com/questions/61086833/async-await-in-express-middleware/65074524#65074524
export const asyncHandler = (fn: FunctionType) => (req: Request, res: Response, next: NextFunction): void => {
  fn(req, res, next).catch(next);
};
