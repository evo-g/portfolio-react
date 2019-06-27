import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import '../css/App.css';

export default () => (
  <Router>
    <div className='container'>
      <Navbar />
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/services' component={ServicesPage} />
      <Footer />
    </div>
  </Router>
);
