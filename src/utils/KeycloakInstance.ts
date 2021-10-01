import type { KeycloakConfig, KeycloakInstance } from "keycloak-js";
import { isServer } from "./Util";

const Keycloak = !isServer() ? require("keycloak-js") : null;

// Global Keycloak instance
let keycloakInstance: KeycloakInstance;

/**
 * @description A function to create instance of Keycloak based on proper environment (server or client)
 * @param keycloakConfig 
 * @returns 
 */
export const getKeycloakInstance = (
  keycloakConfig: KeycloakConfig
): KeycloakInstance | undefined => {
  const isServerSide = isServer();

  if (isServerSide) {
    return undefined;
  }

  keycloakInstance = new Keycloak(keycloakConfig);

  return keycloakInstance;
};
