const app = require('express')();
const path = require('path');
const cors = require('cors');
const passport = require('passport');

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email', 'openid'] }), (req, res) => {
  return res.json(req.user);
});

app.get(
  '/signin/google/callback',
  passport.authenticate('google', { failureRedirect: '/signin' }),
  function (req, res) {
    res.redirect('/rooms/');
  },
);

// app.get(
//   '/api/get',
//   cors({
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200,
//   }),
//   function (req, res) {
//     const id = req.query.id;
//     res.send(JSON.stringify(getRoomForID(id)));
//   },
// );

app.get('*', (req, res) => {
  if (!req.user) {
    res.redirect('/');
  }
  res.sendFile(path.resolve('build', 'index.html'));
});

module.exports = app;
