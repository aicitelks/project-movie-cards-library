// implement MovieList component here
//

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
          <MovieCard
            key={ title }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            rating={ rating }
            imagePath={ imagePath }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieList;
