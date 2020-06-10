import React from 'react';
import { mainTechnologies, familiarServices, servicesMedium } from '../../data';
import './Services.css';

const mainTech = mainTechnologies.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card card-1'>
        <h3>{service.title}</h3>
        <p>Amount of Experience: {service.experience}</p>
      </div>
    </li>
  );
});

const mediumTech = servicesMedium.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card card-2'>
        <h3>{service.title}</h3>
        <p>Amount of Experience: {service.experience}</p>
      </div>
    </li>
  );
});

const familiarTech = familiarServices.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card card-3'>
        <h3>{service.title}</h3>
        <p>Amount of Experience: {service.experience}</p>
      </div>
    </li>
  );
});

const ServicePage = () => {
  return (
    <section id='services'>
      <div className='services'>
        <h2>Core Technologies</h2>
        <ul>{mainTech}</ul>
      </div>
      <div className='services'>
        <h2>Comfortable working with</h2>
        <ul>{mediumTech}</ul>
      </div>
      <div className='services'>
        <h2>Familiar Technologies and Expoloring</h2>
        <ul>{familiarTech}</ul>
      </div>
    </section>
  )
}

export default ServicePage;
