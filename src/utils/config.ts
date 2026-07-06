// Formspree IDs are public (sent from the browser). Hardcoding is fine.
// Optional: override per environment with GATSBY_FORMSPREE_ID in .env
export const FORMSPREE_ID = process.env.GATSBY_FORMSPREE_ID || 'xdarjgde';

export const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;
