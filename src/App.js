import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SpaceProvider from './context/SpaceProvider';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

import './App.css';
import './styles/Login.css';
import './styles/Header.css';
import './styles/Home.css';


const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


function App() {
  return (
    <main className="App-container">
      <ApolloProvider client={client}>
        <SpaceProvider>
          <Switch>
            <Route path="/profile" component={ Profile } />
            <Route path="/home" component={ Home } />
            <Route exact path="/" component={ Login } />
          </Switch>
        </SpaceProvider>
      </ApolloProvider>
    </main>
  )
}

export default App;
