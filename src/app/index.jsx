import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


function App() {

    const client = new ApolloClient({
uri: 'https://graphql-pokemon2.vercel.app/',

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
