import React, { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { useHistory } from 'react-router-dom';

const AuthRedirect = () => {
  const { instance } = useMsal();
  const history = useHistory();

  useEffect(() => {
    instance.handleRedirectPromise().then(() => {
      history.push('/'); // Redirect to the desired page after successful login
    });
  }, [instance, history]);
};
export default AuthRedirect;
