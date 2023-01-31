export const DEV = process.env.NODE_ENV === 'development';

export const LANDING_ENDPOINT = DEV ? 'http://localhost:3001' : 'https://iconzy.vercel.app/';
