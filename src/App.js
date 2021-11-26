import React from 'react';
import logo from './logo.svg';
import './App.css';

import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <main>
          <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>We now have Auth!</h1>
          </header>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;