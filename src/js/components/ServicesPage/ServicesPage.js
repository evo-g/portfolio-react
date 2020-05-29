import React from 'react';
import { mainTechnologies, familiarServices, servicesMedium } from '../../data';

const mainTech = mainTechnologies.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card-1'>{service.title}</div>
    </li>
  );
});

const mediumTech = servicesMedium.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card-2'>{service.title}</div>
    </li>
  );
});

const familiarTech = familiarServices.map(service => {
  return (
    <li key={service.id}>
      <div className='service-card-3'>{service.title}</div>
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
