import React, { useState } from 'react';
// import propTypes from 'prop-types';
import SpaceContext from './SpaceContext';

function SpaceProvider ({ children }) {
  const [email, setEmail] = useState('');
  const [toggleProfile, setToggleProfile] = useState(false);

  const contextValue = {
    email,
    setEmail,
    toggleProfile,
    setToggleProfile
  }

  return (
    <SpaceContext.Provider value={ contextValue }>
      {children}
    </SpaceContext.Provider>
  );
}

export default SpaceProvider;