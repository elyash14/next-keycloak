/**
 * @description To determine server-side or client-side
 * @returns boolean
 */
export const isServer = () => typeof window === 'undefined';
