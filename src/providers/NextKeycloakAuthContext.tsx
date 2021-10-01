import { createContext } from 'react';
import { INextKeycloakAuthContext } from '../interfaces';

export const NextKeycloakAuthContext = createContext<INextKeycloakAuthContext>({
  authenticated: false,
  login: () => {},
  logout: () => {},
});
