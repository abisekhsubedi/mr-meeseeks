import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';



function App() {
    // create an instance of apolloclient
    const client = new ApolloClient({
uri: 'https://graphql-pokemon2.vercel.app/',
cache: new InMemoryCache()


    })
  return (
      <ApolloProvider client={client}>
           <main className="text-1xl font-normal tracking-tight text-gray-800 text-centergit">
             Hello this is react js
        </main>
      </ApolloProvider>

  );
}

export default App;
