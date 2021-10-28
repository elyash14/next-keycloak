# Next Keycloak

### _An authentication library based on Keycloak for NextJs applications_

Next Keycloak powerd by Typescript, React and keycloak
Use it as a react provider to authenticate keycloak users

[![NPM version](https://img.shields.io/badge/npm-v2.0.0-blue)]()

## Features

- Support Keycloak public client
- Access user information and token in both client & server side

## Requirements

- [Keycloak.js](https://www.npmjs.com/package/keycloak-js) version **11** or above
- React version **16** or above
- NextJs version **10** or above

## Installation

Install package with this command

```shell
npm i @elyash14/next-keycloak
or
yarn add @elyash14/next-keycloak
```

Make a confi file in `_app.tsx` or `_app.jsx` and wrapp your component with **NextKeycloakAuthProvider** like this:

```shell
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
```

Also you can provide **initialOption** based on [keycloak documentation](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter) and pass it to the provider. Note that above example support "silent check sso" and needs a html file with below content in your public folder.

```shell
<html>
<body>
    <script>
        parent.postMessage(location.href, location.origin)
    </script>
</body>
</html>
```

And that's it... now you can use **useNextKeycloakAuth** in your pages and components like this:

```shell
const {authenticated, loading } = useNextKeycloakAuth();
```

See [this example](https://github.com/elyash14/next-keycloak/tree/main/example) for full example.

## Authors

Elyas Mosayebi [@elyash14](https://github.com/elyash14)

## License

MIT
