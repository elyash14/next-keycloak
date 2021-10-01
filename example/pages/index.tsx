import { FC } from 'react';
import { useNextKeycloakAuth } from '../../.';

const TestPage = () => {
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
  return (
    <h4>
      {authenticated ? (
        <span>User logged in</span>
      ) : (
        <span>User must be logged in</span>
      )}
    </h4>
  );
};

const ComponentTwo: FC = () => {
  const { login, logout, authenticated } = useNextKeycloakAuth();

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    login();
  };

  return (
    <>
      {authenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
};

const IndependentComponent = () => {
  console.log('IndependentComponent is rendered');

  return (
    <h3>
      This component is not using useNextKeycloakAuth hook, so it does not
      rerender after getting token
    </h3>
  );
};

export default TestPage;
