const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const passport = require('passport');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001;
const session = require('express-session');
app.use(cookieParser());
var sessionMiddleware = session({
  secret: 'session_secret',
  resave: true,
  saveUninitialized: true,
});
const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));
app.use(sessionMiddleware);

require('./passport.js');
require('./sockets')(io);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve('build')));

app.use(require('./router'));

server.listen(PORT, () => {
  console.log('Server sarted on port', PORT);
});
