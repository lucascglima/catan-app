import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/shared/errors/app-error';
import { logger } from '@/shared/utils/logger';

export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  logger.error('Unhandled error:', err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
