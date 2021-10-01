export interface INextKeycloakAuthContext {
  authenticated: boolean;
  login(): void;
  logout(): void;
}
