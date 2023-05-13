import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {children}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Jane Alex',
  bio: 'No bio provided',
  profession: 'Teacher',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Profile;
