import React, { useState } from 'react';
import RegisterForm from './Registration';
import LoginForm from './LoginForm';

const AuthContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = (userData) => {
    // Here, you can send the registration data to your backend API
    // Upon successful registration, you can set the isLoggedIn state to true
    setIsLoggedIn(true);
    // You may also store user data in local storage or cookies for persistence
  };

  const handleLogin = (userData) => {
    // Here, you can send the login data to your backend API
    // Upon successful login, you can set the isLoggedIn state to true
    setIsLoggedIn(true);
    // You may also store user data in local storage or cookies for persistence
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>User is logged in.</p>
      ) : (
        <div>
          <h2>Register</h2>
          <RegisterForm onRegister={handleRegister} />
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default AuthContainer;
