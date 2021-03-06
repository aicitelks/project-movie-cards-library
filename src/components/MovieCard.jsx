// implement MovieCard component here
//
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;

    return (

      <div className="movie-card">

        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt="" />

          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>

        </div>

        <Rating rating={ rating } />

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
