const express = require ('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    // es6 syntax where key and value have the same name
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening');
});