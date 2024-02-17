const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const db = require('./utils/mongoose')

db();


app.use(bodyParser.json());

// user-route
const userRoutes = require('./routes/user');

// mounting user routes
app.use('/users', userRoutes);

// Hello World Route
app.get('/', (req, res) => {
  res.send('Hello, there you are at root.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});