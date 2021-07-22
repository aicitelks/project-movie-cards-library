// implement MovieList component here

// Crie um componente que represente toda a área com os cartões de filmes. <MovieList /> deve receber uma prop movies, que é um array de objetos com informações de um filme.

import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        { movies.map(({ title, subtitle, storyline, rating, imagePath }) => {
          return (
            <MovieCard key={ title }
              subtitle={ subtitle }
              storyline={ storyline }
              rating={ rating }
              imagePath={ imagePath }
            />
          );
        }) }
      </div>
    );
  }
}

export default MovieList;
