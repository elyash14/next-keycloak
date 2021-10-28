import { KeycloakLoginOptions } from 'keycloak-js';
import { FC } from 'react';
import Link from 'next/link';
import { useNextKeycloakAuth } from '../../.';

const HomePage = () => {
  return (
    <div>
      <h1>Hello Worlds</h1>
      <ComponentOne />
      <ComponentTwo />
      <IndependentComponent />
    </div>
  );
};

const ComponentOne: FC = () => {
  const { authenticated } = useNextKeycloakAuth();
  console.log('ComponentOne rendered');

  return (
    <h4>
      {authenticated ? (
        <>
          <span>User logged in view </span>
          <Link href="profile/">
            <a>Profile</a>
          </Link>
        </>
      ) : (
        <span>User must be logged in</span>
      )}
    </h4>
  );
};

const ComponentTwo: FC = () => {
  const { login, logout, register, authenticated } = useNextKeycloakAuth();

  const handleLogin = () => {
    const option: KeycloakLoginOptions = {
      redirectUri: window.location.origin + '/profile',
    };
    login(option);
  };

  return (
    <>
      {authenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          &nbsp;
          <button onClick={() => register()}>Register</button>
        </>
      )}
    </>
  );
};

const IndependentComponent = () => {
  console.log('IndependentComponent is rendered');

  return (
    <h3>
      This component (this text) is not using useNextKeycloakAuth hook, so it
      does not rerender after getting token
    </h3>
  );
};

export default HomePage;
