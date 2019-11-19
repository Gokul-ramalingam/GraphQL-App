const express = require('express')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const url = require('./config/config').url;
const app = express()

const port = process.env.PORT || 7000



mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
                    .then(()=>console.log("Connected to mongoDB successfully..."))
                    .catch((err) => console.log("Error occurred while connecting to mongoDB "+err))


app.use('/graphql',graphqlHTTP({
schema,
graphiql: true
}))

app.listen(port,() =>{
    console.log("Server is running at port "+port)
})