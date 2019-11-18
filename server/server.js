const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

const port = process.env.PORT || 6000


app.use('/graphql',graphqlHTTP({
    
}))

app.listen(port,() =>{
    console.log("Server is running at port "+port)
})