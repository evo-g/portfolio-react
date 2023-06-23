function findStartDate(startDate) {
  // Get the current date
  var currentDate = new Date();

  // Convert the start date to a Date object
  var startDateObj = new Date(startDate);

  // Calculate the time difference in milliseconds
  var timeDiff = currentDate.getTime() - startDateObj.getTime();

  // Calculate the time difference in seconds, minutes, hours, and days
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  let years = Math.floor(days/ 365)

  // Format the time difference in a "time ago" format
  if (years > 0) {
    return `${years} years`
  } else if (days > 0) {
    return days + " day(s) ago";
  } else if (hours > 0) {
    return hours + " hour(s) ago";
  } else if (minutes > 0) {
    return minutes + " minute(s) ago";
  } else {
    return "Just now";
  }
}

export const mainTechnologies = [
  {
    id: 1,
    title: 'JavaScript',
    alt: 'javaScript',
    experience: findStartDate('2018-01-30')
  },
  {
    id: 2,
    title: 'CSS',
    alt: 'css',
    experience: findStartDate('2018-01-30')
  },
  {
    id: 3,
    title: 'HTML',
    alt: 'html',
    experience: findStartDate('2018-01-30')
  },
  {
    id: 4,
    title: 'React.js',
    alt: 'reactjs',
    experience: findStartDate('2018-03-01')
  },
  {
    id: 5,
    title: 'Node.js',
    alt: 'nodejs',
    experience: findStartDate('2018-02-15')
  },
  {
    id: 6,
    title: 'Express.js',
    alt: 'expressjs',
    experience: findStartDate('2018-02-15')
  },
  {
    id: 7,
    title: 'MongoDB',
    alt: 'mongodb',
    experience: '2 years'
  },
  {
    id: 8,
    title: 'Redux',
    alt: 'redux',
    experience: '3 years'
  },
  {
    id: 9,
    title: 'Heroku',
    alt: 'heroku',
    experience: '2 years'
  },
  {
    id: 10,
    title: 'Parcel.js',
    alt: 'parcel',
    experience: '3 years'
  },
  {
    id: 11,
    title: 'Netlify',
    alt: 'netlify',
    experience: '3 years'
  },
  {
    id: 12,
    title: 'ES6',
    alt: 'es6',
    experience: findStartDate('2018-02-15')
  },
  {
    id: 13,
    title: 'Git',
    alt: 'git',
    experience: '4 years'
  },
  {
    id: 14,
    title: 'ServiceNow',
    img: null,
    alt: 'service now platform',
    experience: '2 years'
  },
];

export const servicesMedium = [
  {
    id: 1,
    title: 'Expo',
    alt: 'expo',
    experience: '1 1/2 years'
  },
  {
    id: 2,
    title: 'Webpack',
    alt: 'webpack',
    experience: '1 1/2 years'
  },
  {
    id: 3,
    title: 'Mongoose',
    alt: 'mongoose',
    experience: '1 1/2 years'
  },
  {
    id: 5,
    title: 'loopback',
    alt: 'loopback',
    experience: '1 1/2 years'
  },
  {
    id: 6,
    title: 'JQuery',
    alt: 'jquery',
    experience: '1 year'
  },
  {
    id: 7,
    title: 'Socket.io',
    alt: 'socket.io',
    experience: '1 years'
  },
  {
    id: 8,
    title: 'MySQL',
    alt: 'mysql',
    experience: '1 1/2 years'
  },
  {
    id: 9,
    title: 'React-Native',
    alt: 'react-native',
    experience: '1 1/2 years'
  },
  {
    id: 10,
    title: 'Cypress.js',
    img: null,
    alt: 'cypress.js',
    experience: '1 year'
  },
  {
    id: 11,
    title: 'Figma',
    img: null,
    alt: 'figma',
    experience: '2 years'
  },
];

export const familiarServices = [
  {
    id: 1,
    title: 'Docker',
    img: null,
    alt: 'docker',
    experience: '1 year'
  },
  {
    id: 2,
    title: 'MobX',
    img: null,
    alt: 'mobx',
    experience: '1/2 year'
  },
  {
    id: 3,
    title: 'Circle-Ci',
    img: null,
    alt: 'circle-ci',
    experience: '1 year'
  },
  {
    id: 4,
    title: 'Puppeteer',
    img: null,
    alt: 'puppeteer',
    experience: 'Actively learning'
  },
  {
    id: 5,
    title: 'TailWindCSS',
    img: null,
    alt: 'tail wind CSS',
    experience: 'Actively learning'
  },
  {
    id: 6,
    title: 'Shopify',
    img: null,
    alt: 'shopify',
    experience: 'Actively learning'
  },
  {
    id: 7,
    title: 'The Open CLI Framework',
    img: null,
    alt: 'The Open CLI Framework',
    experience: '1 month'
  }
]

// export const projects = [
//   {
//     id: 1,
//     title: 'e-store',
//     alt: 'e-store',
//     img: require('../images/thumbs/e-store-thumb.png'),
//     href: 'https://react-practice-e-store.netlify.com/',
//     description: 'As the name implies it is an e-commerce store that is not functional, however, it can be hooked up to paypal through an npm package. It uses react and the context API to keep track of state. Uses a combonation of bootstrap, and styled-components for styling.',
//     stack: 'React, React-Router, Context API, Styled-Components, Bootstrap'
//   },
//   {
//     id: 2,
//     title: 'Movie Finder',
//     alt: 'hackathon Movie Finder',
//     img: require('../images/thumbs/hackathon-lt.png'),
//     href: 'https://awesome-morse-9400db.netlify.app/',
//     description: 'A search engine for movies, makes two different API calls to find more details on the movie you search. Was made for a school project called Hackathon, in which we have 72 hours to make a Reactjs project from scratch. Uses bootstrap and css for styling and has 2 API calls.',
//     stack: 'React, CSS, Bootstrap, Axios, OMDB API'
//   },
//   {
//     id: 3,
//     title: 'weather-app',
//     alt: 'weather-app',
//     img: require('../images/thumbs/weather-app-thumb.png'),
//     href: 'https://youthful-banach-ce065f.netlify.app/',
//     description: 'In this project Redux, Axios, Reactjs, promise middleware, was used to create an app to check weather across any city searched. Also stores the history of each city search with the time and date searched using a dependecy called moment to format it.',
//     stack: 'React, Redux, Weather API, Axios, Bootstrap, CSS, Parcel.js'
//   },
//   {
//     id: 4,
//     title: 'oca-mobile-app',
//     alt: 'oca-mobile-app',
//     img: require('../images/thumbs/oca-app-thumb.jpg'),
//     href: 'https://play.google.com/store/apps/details?id=com.oca.OCApp',
//     description: 'Disclaimer: The school has shut down and is no longer in the google play store. However, when it was in use it was live. It was a Origin Code Academy mobile application for students to check-in and get information about progress in the program. In this project my group and I are using Expo, React Native, Redux, MongoDB, and loopback to create a mobile friendly replacement for a bar code scanner.',
//     stack: 'React-Native, Expo, React, Redux, Axios, Loopback, MongoDB'
//   },
//   {
//     id: 5,
//     title: 'vstda',
//     alt: 'vstda',
//     img: require('../images/thumbs/VSTDA-tumb.png'),
//     href: 'https://compassionate-benz-1ae465.netlify.com/',
//     description: 'Very simple to do app. As the name states it lets you organize todos for your daily life. Another project for school which uses Reactjs and bootsrap for styling. Creating this project was anything, but simple. Here state is passed up and down from different components.',
//     stack: 'React, Bootstrap, CSS, Parcel.js'
//   },
//   {
//     id: 6,
//     title: 'grid-sample-site',
//     alt: 'grid',
//     img: require('../images/thumbs/grid-sample-thumb.png'),
//     href: 'https://grid-express.herokuapp.com/',
//     description: 'A fun project that was orginally given to me as a front-end developer test and thought it would be a nice way to showcase some of my talents. Using HTML, CSS, and JavaScript',
//     stack: 'HTML, CSS, JavaScript, Express.js'
//   },
//   {
//     id: 7,
//     title: 'Cruz Performance',
//     alt: 'cruz performance',
//     img: require('../images/thumbs/cruz-performance-lt.png'),
//     href: 'https://cruzperformance.biz/',
//     description: 'A site created for a friends business. Got to use React hooks to create a burger menu to navigate around the different pages. Also set up links to direct a call or text to the business.',
//     stack: 'React, React Hooks, Styled-Components, CSS, Parcel.js'
//   },
//   {
//     id: 8,
//     title: 'Quiz App',
//     alt: 'quiz app',
//     img: require('../images/thumbs/quiz-app-thumb.png'),
//     href: 'https://js-quick-quiz-app.herokuapp.com/',
//     description: 'A quiz app that uses no framework only HTML,CSS,JS. It does a fetch call to Open Trivia Database for random questions. Uses local storage to save the top 5 high scores. Has a simple Express server.',
//     stack: 'HTML, CSS, JavaScript, Open Trivia DB API, Local Storage, Express.js'
//   },
//   {
//     id: 9,
//     title: 'Tip App',
//     alt: 'tip app',
//     img: require('../images/thumbs/laptop-tip-guide.png'),
//     href: 'https://stoic-tereshkova-3bc590.netlify.app/',
//     description: 'An app to help calculate your tip for any needed reason. Made with vanilla JS, and parcel.js to serve it.',
//     stack: 'HTML, CSS, JavaScript, Parcel.js'
//   },
//   {
//     id: 10,
//     title: 'Cash Tracking App',
//     alt: 'cash tracking app',
//     img: require('../images/thumbs/cash-tracking-lt.png'),
//     href: 'https://cash-tracking-app.netlify.app/',
//     description: "An app to help calculate your cash for any needed reason. Was a real need for myself and family members when we make bank deposits for my family's small business. Made with vanilla JS, and parcel.js to serve it.",
//     stack: 'HTML, CSS, JavaScript, Parcel.js'
//   },
// ];


// setup graph cms to add timeline data
export const timelineData = [
  {
    id: 1,
    text: 'Attended Universal Technical Institute',
    date: 'January 2008 to October 2008',
    category: {
      tag: 'Education',
      color: '#f16969',
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
      color: '#f16969',
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
      color: '#f16969',
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
      url: 'https://www.linkedin.com/in/evo/',
      text: 'ask for more info'
    },
    info: 'The role was part time. I helped with the UI in the inital stages of the startup. Worked mostly on the front end setting up the UI of the dashboard for various pages. Technologies used for the front end are React, MaterialUi, and Mobx for state management. ',
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
      url: 'https://www.linkedin.com/in/evo/',
      text: 'ask for more info'
    },
    info: 'The intership was full time. I learned a lot durning the month. I had to overcome a lot of obstacles with socket.io, and learn the code base quickly.',
    technologies: 'React.js, Redux, Loopback, Socket.io, Cypress, SCSS'
  },
  {
    id: 7,
    text: 'NxtRobotics',
    date: 'November 2020 to April 2021',
    category: {
      tag: 'Tech Industry',
      color: '#81D4FA',
      study: 'Software Engineer'
    },
    link: {
      url: 'https://www.nxtrobotics.com/',
      text: 'Contact work'
    },
    info: 'Was tasked to refactor parts or their dashboard, and creating new pages which includes the backend. The project is using Docker which is something I had to refresh on. I am learning some new skills, including Laravel, creating controllers, requests, error codes, routes, creating seeders, and everything that goes to getting backend data to the front-end. On the front end worked with React.js to pull in that data and shape it using Ant Design to make it look nice and uniform across the site.',
    technologies: 'React.js, Redux, Redux Saga, Laravel, Docker, AntD'
  },
  {
    id: 8,
    text: 'Creating Coding Careers',
    date: 'March 2021 to September 2021',
    category: {
      tag: 'Tech Industry',
      color: '#81D4FA',
      study: 'Software Engineer'
    },
    link: {
      url: 'https://cccareers.org/',
      text: 'Contact work'
    },
    info: 'At Creating Coding Careers I worked on various projects. My first week was training for Service Now, followed by working with slack-bot, next was an angular project for a company called Brain Leap where I helped create a UI for their school admins. Was working on embedded project with a company called Kind Regards, their platform used Angular, NGRX, and Angular Material. My current project is for a company called Hexis, the project is also using Angular and .Net for a learning platform for students.',
    technologies: 'Angular, TypeScript, NGRX, Angular/Material, Node.js, slack-bot, Zapier, and more'
  },
  {
    id: 9,
    text: 'NewRocket LLC',
    date: 'Jun 2021 to current',
    category: {
      tag: 'Tech Industry',
      color: '#81D4FA',
      study: 'Software Engineer'
    },
    link: {
      url: 'https://newrocket.com/',
      text: 'Contact work'
    },
    info: 'I work on creating custom Service Portals for various clients. Portals are created in ServiceNow Portal framework. Started through an apprenticeship program and was hired on full time in October 2021. Main language is JavaScript and configuring backend data for the frontend to be used. For the frontend framework AngularJS is being used, Bootstrap, CSS, and SASS. Creating custom templates using HTML. NewRocket has a collection of custom widgets that are similar to components for building Service Portals. I have contributed to product enhancement to match our internal design system and retain backwards compatibility. The widgets have a complex learning curve they have access to both client and server side scripts to receive data from the platform or inputs. Inputs can be from a form, along with also passing in different options that each instance of the widget per page. CSA certified as of Sept 2022.',
    technologies: 'Angular, TypeScript, NGRX, Angular/Material, Node.js, slack-bot, Zapier, and more'
  },
];
