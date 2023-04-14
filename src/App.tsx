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
    queryFn: () => wait(2000).then(() => [...POSTS])
    // queryFn: () => Promise.reject("Error Message")
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {postQuery.isLoading && ("Loading...")}
          
          {postQuery.isError && (<pre>{JSON.stringify(postQuery.error)}</pre>)}

          {!postQuery.isLoading && !postQuery.isError ? (
            <>
              {postQuery.data.map(post => (
                <div className="" key={post.id}>{post.title}</div>
              ))}
            </>
            ) : ("") 
          }
        </p>
      </header>
    </div>
  );
}


function wait (duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}