import React from 'react';

const SignOut = ({ onSignOut }) => {
  const handleSignOut = () => {
    localStorage.removeItem('token');
    onSignOut();
  };

  return (
    <button onClick={handleSignOut}>
      Logout
    </button>
  );
};

export default SignOut;
