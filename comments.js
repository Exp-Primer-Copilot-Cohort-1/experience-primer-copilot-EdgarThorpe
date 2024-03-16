// create a web server

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.get('/comments/new', (req, res) => {
  res.send('This is the new comments page');
});

app.get('/comments/new/:id', (req, res) => {
  res.send('This is the new comments page with id ' + req.params.id);
});

app.get('/comments/:id', (req, res) => {
  res.send('This is the comments page with id ' + req.params.id);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// visit http://localhost:3000/comments
// visit http://localhost:3000/comments/new
// visit http://localhost:3000/comments/new/1
// visit http://localhost:3000/comments/1

// visit http://localhost:3000/comments/1?name=John
// visit http://localhost:3000/comments/1?name=John&age=30

// visit http://localhost:3000/comments/new/1?name=John&age=30
// visit http://localhost:3000/comments/new/1?name=John&age=30&gender=m