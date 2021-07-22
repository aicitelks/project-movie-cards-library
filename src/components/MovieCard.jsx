// implement MovieCard component here
//
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return(
      <div className="movie-card">

        <div className="movie-card-body">

          <h1 className="movie-card-title">{ title }</h1>
          <h2 className="movie-card-subtitle">{ subtitle }</h2>
          <h4 className="movie-card-storyline">{ storyline }</h4>
          
          <div className="movie-card-rating">
            <div className="rating">
              { rating }
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default MovieCard;
