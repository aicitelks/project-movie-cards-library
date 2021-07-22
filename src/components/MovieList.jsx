// implement MovieList component here

// Crie um componente que represente toda a área com os cartões de filmes. <MovieList /> deve receber uma prop movies, que é um array de objetos com informações de um filme.

import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        <MovieCard key="Movie Title 1" />
        <MovieCard key="Movie Title 2" />
        <MovieCard key="Movie Title 3" />
      </div>
    );
  }
}

export default MovieList;
