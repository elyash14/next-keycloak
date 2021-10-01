import { useEffect, useState } from 'react';
import { KeycloakInstance } from 'keycloak-js';
import { INextKeycloakAuthContext } from '../interfaces';

/**
 *
 * @description A hook to initialize and provide Keycloak functionalities
 * @param keycloak
 * @returns
 */
export const useInitKeycloak = (
  keycloak: KeycloakInstance | undefined
): INextKeycloakAuthContext => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (keycloak) {
      keycloak
        .init({
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            'http://localhost:3000/silent-check-sso.html',
        })
        .then(authenticated => {
          setAuthenticated(authenticated);
        })
        .catch(function() {
          console.error('failed to initialize keycloak');
        });
    }
  }, []);

  const login = () => {
    if (keycloak) {
      const appUrl = window.location.origin;
      window.location.href = keycloak.createLoginUrl({
        redirectUri: appUrl,
      });
    }
  };

  const logout = () => {
    if (keycloak) {
      keycloak.logout();
    }
  };

  return {
    authenticated,
    logout,
    login,
  };
};
