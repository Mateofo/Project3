import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';


import MainPage from './pages/MainPage'
import Login from './pages/Login'
import Singlebody from './pages/Singlebody'
import Footer from './components/Footer'
import Header from './components/Header'
import Signup from './pages/Signup'


const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<MainPage />} 
              />
              
              <Route
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/bodies/:bodyId" 
                element={<Singlebody />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;