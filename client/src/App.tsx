import React from 'react';
import './App.css';
import { Home } from './pages/Home/Home';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Home />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
