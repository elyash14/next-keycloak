import type { AppProps } from "next/app";
import  {NextKeycloakAuthProvider}  from "../../.";


const config = {
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REAM,
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextKeycloakAuthProvider config={config}>
      <Component {...pageProps} />
     </NextKeycloakAuthProvider>
  );
}
export default MyApp;
