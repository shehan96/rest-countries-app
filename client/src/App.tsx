import React from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
