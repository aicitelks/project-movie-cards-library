// implement MovieCard component here
//
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;

    return(
      <div className="movie-card">

        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt=""/>

          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>

        </div>

        <Rating rating={ rating }/>

      </div>
    );
  }
}

export default MovieCard;
