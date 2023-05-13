import React from 'react';
import Profile from './profile/Profile';
import './App.css';

function App() {
  const handleName = (name) => {
    alert(`The name of the profile user is ${name}`);
  };

  return (
    <div className='App'>
      <Profile
        fullName='John Fisher'
        bio='A software engineer'
        profession='Software Engineer'
        handleName={handleName}
      >
        <img
          src='https://media.istockphoto.com/id/1280105444/photo/senior-asian-businessman-showing-a-fist-pump.jpg?s=612x612&w=0&k=20&c=-iOJMvamLskJswkYrEkPHM8SAvavHENYuut4nHEG8V8='
          alt='Profile'
          style={{ width: '200px', height: '200px', borderRadius: '50%' }}
        />
      </Profile>
    </div>
  );
}

export default App;
