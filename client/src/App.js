import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import BookList from './component/BookList';
import AddBook from './component/AddBook';
//Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:7000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
         <BookList/>
         <AddBook />
    </div>
    </ApolloProvider>
  );
}

export default App;
