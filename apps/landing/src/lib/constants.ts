export const DEV = process.env.NODE_ENV === 'development';

export const EDITOR_ENDPOINT = DEV ? 'http://localhost:3000/icons' : 'https://iconzyeditor.vercel.app/icons';
