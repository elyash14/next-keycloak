import { INextKeycloakUser } from '../interfaces';

/**
 * @description To determine server-side or client-side
 * @returns boolean
 */
export const isServer = () => typeof window === 'undefined';

/**
 * @description Get token and return minimal user information
 * @param token
 * @returns
 */
export const getUserFromToken = (token: string): INextKeycloakUser => {
  const parsedToken = parseToken(token) as any;
  return {
    sub: parsedToken.sub,
    email: parsedToken.email,
    name: parsedToken.given_name,
    family: parsedToken.family_name,
  };
};

/**
 * @description a function to parse token
 */
export const parseToken = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const converted = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  return JSON.parse(converted);
};
