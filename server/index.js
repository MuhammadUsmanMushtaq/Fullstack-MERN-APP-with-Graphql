const express = require('express');
require('dotenv').config();
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`server running on port ${port}`));
