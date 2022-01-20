import React from 'react';
import Navbar from './components/Navbar';
import MoviesList from './components/MoviesList';
import { MoviesProvider } from './contexts/MoviesContext';
function App() {
  return (
    <MoviesProvider>
      <div className="wrapper">
        <Navbar />
        <MoviesList />
      </div>
    </MoviesProvider>
  );
}

export default App;
