import React, { useContext } from 'react';
import { AuthContext } from '../App';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <p>Welcome, you are logged in!</p>
      ) : (
        <p>Please log in to access the courses.</p>
      )}
    </div>
  );
};

export default Home;