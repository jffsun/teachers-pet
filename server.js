const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');

// Allows for session-handling for data persistence and stores the session itself in the database 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine
const hbs = exphbs.create({});

// Session configuration 
const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

  // Inform Express.js which template engine to use
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  // Middleware to handle JSON and URL-encoded payloads in requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Express to serve static files
  app.use(express.static(path.join(__dirname, 'public')));

  // User will be directed controllers directory
  app.use(routes);
  
  // Synch sequelize models then start the server
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });