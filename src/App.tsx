import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css';
import Main from './main';

const queryClient = new QueryClient()
const App: React.FC = () => {
    return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;