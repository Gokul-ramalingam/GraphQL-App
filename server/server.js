const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()
const schema = require('./schema/schema')
const port = process.env.PORT || 6000


app.use('/graphql',graphqlHTTP({
schema,
graphiql : true
}))

app.listen(port,() =>{
    console.log("Server is running at port "+port)
})