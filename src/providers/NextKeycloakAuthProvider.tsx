import { KeycloakConfig } from 'keycloak-js';
import React, { FC, useEffect, useState } from 'react';
import { useInitKeycloak } from '../hooks/UseInitialKeycloak';

import { getKeycloakInstance } from '../utils/KeycloakInstance';
import { NextKeycloakAuthContext } from './NextKeycloakAuthContext';

interface IKeycloakAuthenticationProviderProps {
  config: KeycloakConfig;
}

export const NextKeycloakAuthProvider: FC<IKeycloakAuthenticationProviderProps> = ({
  children,
  config,
}) => {
  // const keycloak = getKeycloakInstance(config);
  const [keycloak, setKeycloak] = useState(getKeycloakInstance(config));
  const initializedKeycloak = useInitKeycloak(keycloak);
  useEffect(() => {
    if (false) {
      setKeycloak(undefined);
    }
  }, []);
  return (
    <NextKeycloakAuthContext.Provider value={initializedKeycloak}>
      {children}
    </NextKeycloakAuthContext.Provider>
  );
};
