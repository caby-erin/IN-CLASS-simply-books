import React from 'react';
import PropTypes from 'prop-types';
import { signOut } from '../utils/auth';

export default function User({ userObj }) {
  return (
    <div>
      <img src={userObj.photoURL} alt="userObj.displayName" />
      <h1>{userObj.displayName}</h1>
      <p>{userObj.email}</p>
      <p>{userObj.metadata.lastSignInTime}</p>
      <button type="button" onClick={signOut}> Sign Out</button>
    </div>
  );
}

User.propTypes = {
  userObj: ({
    displayName: PropTypes.string,
    email: PropTypes.string,
    lastSignInTime: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
