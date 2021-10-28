import { KeycloakConfig, KeycloakInitOptions } from "keycloak-js";
import type { AppProps } from "next/app";
import  {NextKeycloakAuthProvider}  from "../../.";


const config:KeycloakConfig = {
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REAM,
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
};

const initOption :KeycloakInitOptions = {
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri:
    'http://localhost:3000/silent-check-sso.html',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextKeycloakAuthProvider config={config} initOption={initOption}>
      <Component {...pageProps} />
     </NextKeycloakAuthProvider>
  );
}
export default MyApp;
