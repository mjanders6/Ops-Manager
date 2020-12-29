const { join } = require('path')
const express = require('express')
const session = require('express-session');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./models')
const app = express();


app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(session({
  name: 'session-id',
  secret: '123-456-789',
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

require('./routes')(app)


//const port = process.env.PORT || 3001
const port = 3001

var MONGODB_URI = `mongodb://localhost/Ops-Mgr`

require('mongoose').connect(MONGODB_URI,
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(port, () => console.log(`server running on port ${port}`)))
  .catch(e => console.log(e))