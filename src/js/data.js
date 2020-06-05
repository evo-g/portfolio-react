
export const mainTechnologies = [
  {
    id: 1,
    title: 'JavaScript',
    alt: 'javaScript'
  },
  {
    id: 2,
    title: 'CSS',
    alt: 'css'
  },
  {
    id: 3,
    title: 'HTML',
    alt: 'html'
  },
  {
    id: 4,
    title: 'React.js',
    alt: 'reactjs'
  },
  {
    id: 5,
    title: 'Node.js',
    alt: 'nodejs'
  },
  {
    id: 6,
    title: 'Express.js',
    alt: 'expressjs'
  },
  {
    id: 7,
    title: 'MongoDB',
    alt: 'mongodb'
  },
  {
    id: 8,
    title: 'Redux',
    alt: 'redux'
  },
  {
    id: 9,
    title: 'Heroku',
    alt: 'heroku'
  },
  {
    id: 10,
    title: 'Parcel.js',
    alt: 'parcel'
  },
  {
    id: 11,
    title: 'Netlify',
    alt: 'netlify'
  },
  {
    id: 12,
    title: 'ES6',
    alt: 'es6'
  },
  {
    id: 13,
    title: 'Git',
    alt: 'git'
  }
];

export const servicesMedium = [
  {
    id: 1,
    title: 'Expo',
    alt: 'expo'
  },
  {
    id: 2,
    title: 'Webpack',
    alt: 'webpack'
  },
  {
    id: 3,
    title: 'Mongoose',
    alt: 'mongoose'
  },
  {
    id: 5,
    title: 'loopback',
    alt: 'loopback'
  },
  {
    id: 6,
    title: 'JQuery',
    alt: 'jquery'
  },
  {
    id: 7,
    title: 'Socket.io',
    alt: 'socket.io'
  },
  {
    id: 8,
    title: 'MySQL',
    alt: 'mysql'
  },
  {
    id: 9,
    title: 'React-Native',
    alt: 'react-native'
  },
  {
    id: 10,
    title: 'Cypress.js',
    img: null,
    alt: 'cypress.js'
  },
  {
    id: 11,
    title: 'Figma',
    img: null,
    alt: 'figma'
  },
];

export const familiarServices = [
  {
    id: 1,
    title: 'Docker',
    img: null,
    alt: 'docker'
  },
  {
    id: 2,
    title: 'MobX',
    img: null,
    alt: 'mobx'
  },
  {
    id: 3,
    title: 'Circle-Ci',
    img: null,
    alt: 'circle-ci'
  },
  {
    id: 4,
    title: 'Puppeteer',
    img: null,
    alt: 'puppeteer'
  },
  {
    id: 5,
    title: 'TailWindCSS',
    img: null,
    alt: 'tail wind CSS'
  },
  {
    id: 6,
    title: 'Shopify',
    img: null,
    alt: 'shopify'
  },
  {
    id: 7,
    title: 'ServiceNow',
    img: null,
    alt: 'service now platform'
  },
  {
    id: 8,
    title: 'The Open CLI Framework',
    img: null,
    alt: 'The Open CLI Framework'
  }
]

export const projects = [
  {
    id: 1,
    title: 'e-store',
    alt: 'e-store',
    img: require('../images/thumbs/e-store-thumb.png'),
    href: 'https://react-practice-e-store.netlify.com/',
    description: 'As the name implies it is an e-commerce store that is not functional, however, it can be hooked up to paypal through an npm package. It uses react and the context API to keep track of state. Uses a combonation of bootstrap, and styled-components for styling.',
    stack: 'React, React-Router, Context API, Styled-Components, Bootstrap'
  },
  {
    id: 2,
    title: 'Movie Finder',
    alt: 'hackathon Movie Finder',
    img: require('../images/thumbs/hackathon-thumb.jpg'),
    href: 'https://awesome-morse-9400db.netlify.app/',
    description: 'A search engine for movies, makes two different API calls to find more details on the movie you search. Was made for a school project called Hackathon, in which we have 72 hours to make a Reactjs project from scratch. Uses bootstrap and css for styling and has 2 API calls.',
    stack: 'React, CSS, Bootstrap, Axios, OMDB API'
  },
  {
    id: 3,
    title: 'weather-app',
    alt: 'weather-app',
    img: require('../images/thumbs/weather-app-thumb.png'),
    href: 'https://youthful-banach-ce065f.netlify.app/',
    description: 'In this project Redux, Axios, Reactjs, promise middleware, was used to create an app to check weather across any city searched. Also stores the history of each city search with the time and date searched using a dependecy called moment to format it.',
    stack: 'React, Redux, Weather API, Axios, Bootstrap, CSS, Parcel.js'
  },
  {
    id: 4,
    title: 'oca-mobile-app',
    alt: 'oca-mobile-app',
    img: require('../images/thumbs/oca-app-thumb.jpg'),
    href: 'https://play.google.com/store/apps/details?id=com.oca.OCApp',
    description: 'Disclaimer: The school has shut down and is no longer in the google play store. However, when it was in use it was live. It was a Origin Code Academy mobile application for students to check-in and get information about progress in the program. In this project my group and I are using Expo, React Native, Redux, MongoDB, and loopback to create a mobile friendly replacement for a bar code scanner.',
    stack: 'React-Native, Expo, React, Redux, Axios, Loopback, MongoDB'
  },
  {
    id: 5,
    title: 'vstda',
    alt: 'vstda',
    img: require('../images/thumbs/VSTDA-tumb.png'),
    href: 'https://compassionate-benz-1ae465.netlify.com/',
    description: 'Very simple to do app. As the name states it lets you organize todos for your daily life. Another project for school which uses Reactjs and bootsrap for styling. Creating this project was anything, but simple. Here state is passed up and down from different components.',
    stack: 'React, Bootstrap, CSS, Parcel.js'
  },
  {
    id: 6,
    title: 'grid-sample-site',
    alt: 'grid',
    img: require('../images/thumbs/grid-sample-thumb.png'),
    href: 'https://grid-express.herokuapp.com/',
    description: 'A fun project that was orginally given to me as a front-end developer test and thought it would be a nice way to showcase some of my talents. Using HTML, CSS, and JavaScript',
    stack: 'HTML, CSS, JavaScript, Express.js'
  },
  {
    id: 7,
    title: 'Cruz Performance',
    alt: 'cruz performance',
    img: require('../images/thumbs/Cruz-Perfromance-thumb.png'),
    href: 'https://unruffled-einstein-bea7be.netlify.app/',
    description: 'A small site created for a friends business. Got to use React hooks to create a burger menu to navigate around the different pages. Also set up links to direct a call or text the business.',
    stack: 'React, React Hooks, Styled-Components, CSS, Parcel.js'
  },
  {
    id: 8,
    title: 'Quiz App',
    alt: 'quiz app',
    img: require('../images/thumbs/quiz-app-thumb.png'),
    href: 'https://js-quick-quiz-app.herokuapp.com/',
    description: 'A quiz app that uses no framework only HTML,CSS,JS. It does a fetch call to Open Trivia Database for random questions. Uses local storage to save the top 5 high scores. Has a simple Express server.',
    stack: 'HTML, CSS, JavaScript, Open Trivia DB API, Local Storage, Express.js'
  },
];

export const timelineData = [
  {
    id: 1,
    text: 'Attended Universal Technical Institute',
    date: 'January 2008 to October 2008',
    category: {
      tag: 'Education',
      color: '#FFF59D',
      study: 'Automotive Technology'
    },
    link: {
      url: 'https://www.uti.edu/',
      text: 'Check it out'
    },
    info: 'Learned the ins and outs of a vehicle. Specialized in Smog and Emissions testing'
  },
  {
    id: 2,
    text: 'Worked as an Smog Technican',
    date: 'March 2009 to Feburary 2017',
    category: {
      tag: 'Work',
      color: '#81D4FA'
    },
    link: {
      url: null,
      text: 'Ask for more info'
    },
    info: 'Initally the first few years worked doing smog inspections, and repairing vehicles. Then switched to only smog inspections.'
  },
  {
    id: 3,
    text: 'Attended Cuyamaca and Grossmont College part time',
    date: 'Summer 2011 to June 2016',
    category: {
      tag: 'Education',
      color: '#FFF59D',
      study: 'A.S. Business Administration & A.S. Business Technology'
    },
    link: {
      url: 'https://www.cuyamaca.edu/',
      text: 'Check it out'
    },
    info: 'Went to school part time while also working full-time.'
  },
  {
    id: 4,
    text: 'Orgin Code Academy',
    date: 'January 2018 to August 2018',
    category: {
      tag: 'Education',
      color: '#FFF59D',
      study: 'Full Stack Software Development (MERN)'
    },
    link: {
      url: null,
      text: 'school has shut down'
    },
    info: 'Was a tough learning experience, but overall a very good one.'
  },
  {
    id: 5,
    text: 'Edifius',
    date: 'September 2018 to Febuary 2019',
    category: {
      tag: 'Tech Industry',
      color: '#81D4FA',
      study: 'Software Engineer Internship'
    },
    link: {
      url: null,
      text: null
    },
    info: 'The role was part time. I helped with the UI in the inital stages of the startup.',
    technologies: 'React.js, MongoDB, Node.js, Mongoose, Express, MobX, Docker, Kubernetes'
  },
  {
    id: 6,
    text: 'Revelant AI',
    date: 'March 2019 to April 2019',
    category: {
      tag: 'Tech Industry',
      color: '#81D4FA',
      study: 'Software Developer Internship'
    },
    link: {
      url: null,
      text: null
    },
    info: 'The intership was full time. I learned a lot durning the month. I had to overcome a lot of obstacles with socket.io, and learn the code base quickly.',
    technologies: 'React.js, Redux, Loopback, Socket.io, Cypress, SCSS'
  },
];
