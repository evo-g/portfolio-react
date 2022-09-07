import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import loadable from '@loadable/component';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Navbar, Footer } from './components';
import '../css/App.css';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckhn1m4m5e64i01xp9b6vczdu/master',
  cache: new InMemoryCache()
});

const HomePage = loadable(() => import('./pages/HomePage'));
const AboutPage = loadable(() => import('./pages/AboutPage'));
const ContactPage = loadable(() => import('./pages/ContactPage'));
const ServicesPage = loadable(() => import('./pages/ServicesPage'));
const DefaultPage = loadable(() => import('./pages/DefaultPage'));

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/services' component={ServicesPage} />
          <Route path='*' component={DefaultPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  </ApolloProvider>
);
