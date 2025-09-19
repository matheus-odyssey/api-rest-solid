import 'dotenv/config';
import { z } from 'zod';

// process.env = { NODE_ENV: 'development', ... }

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('😬 invalid environment variables', _env.error.format((issue) => issue.message));

  throw new Error('Invalid environment variables.');
}

export const env = _env.data;
