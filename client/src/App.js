import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Navbar from './components/Navbar/index.';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FlipCardEno from './pages/FlipCardEno';
import { LightText, ContentContainer } from './styles/style.jsx'
import { store } from './store';

// Constructing our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Constructing the request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Provider store={store}>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/loginsignup' component={Login} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/flip-card-eno' component={FlipCardEno} />
              {/* <Route exact path='/highscores' component={Highscores} /> */}
              <Route render={() => <h1>
                <ContentContainer>
                  <LightText>
                    Page not found
                    <br />
                    <br />
                    Only empty space here.
                  </LightText>
                </ContentContainer>
              </h1>} />
            </Switch>
          </Provider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
