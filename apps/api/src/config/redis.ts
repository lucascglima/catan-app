import Redis from 'ioredis';
import { logger } from '@/shared/utils/logger';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

export const redis = new Redis(redisUrl, {
  retryStrategy: times => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 3,
});

redis.on('connect', () => {
  logger.info('✅ Redis connected');
});

redis.on('error', err => {
  logger.error('❌ Redis connection error:', err);
});

export default redis;
