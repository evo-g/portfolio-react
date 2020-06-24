import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { 
  HomePage,
  AboutPage,
  ContactPage,
  ServicesPage,
  DefaultPage,
  Navbar,
  Footer
} from './components';
import '../css/App.css';

export default () => (
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
);
