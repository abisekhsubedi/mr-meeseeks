import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/home";
import Character from "../pages/Character";

function App() {
  // create an instance of apolloclient
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Character />} />
          <Route path="*" element={<div> 404 not found</div>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
