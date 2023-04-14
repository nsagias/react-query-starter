import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMutation, useQuery, QueryClientProvider } from "@tanstack/react-query"


const POSTS =  [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" }
];

export default function App() {
  // takes a unique key for queryKey, must be in array
  // takes a query function
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS])
  })

  // check if loading
  if (postQuery.isLoading) return <h1> Loading ... </h1>
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here
        </p>
      </header>
    </div>
  );
}


function wait (duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}