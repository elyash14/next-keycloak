import {
  // KeycloakInstance,
  KeycloakLoginOptions,
  KeycloakLogoutOptions,
  KeycloakRegisterOptions,
} from 'keycloak-js';

export interface INextKeycloakAuthContext {
  loading: boolean;
  authenticated: boolean;
  token?: string;
  userInfo?: INextKeycloakUser;
  login(options?: KeycloakLoginOptions): void;
  logout(options?: KeycloakLogoutOptions): void;
  register(options?: KeycloakRegisterOptions): void;
  accountManagement(): void;
  // keycloakInstance?: KeycloakInstance;
}

export interface INextKeycloakUser {
  sub: string;
  email: string;
  name: string;
  family: string;
}
