import React from 'react';
import { useMsal } from '@azure/msal-react';
import { Button } from 'reactstrap';

const LoginButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(); // Use loginRedirect instead of loginPopup
  };

  return (
    <div>
      <Button onClick={handleLogin} color="primary">
        Login with AD
      </Button>
    </div>
  );
};

export default LoginButton;
