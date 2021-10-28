import { useNextKeycloakAuth } from '../../.';

const ProfilePage = () => {
  const { userInfo, loading, token, logout } = useNextKeycloakAuth();
  console.log('profile rendered');

  return (
    <div>
      <h1>Profile</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>
            {userInfo.name}&nbsp;{userInfo.family}
          </h3>
          <h3>{userInfo.email}</h3>
          <button
            onClick={() => logout({ redirectUri: window.location.origin })}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
