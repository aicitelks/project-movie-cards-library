// implement MovieCard component here
//
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { subtitle, storyline, rating, imagePath } = this.props;

    return(
      <div className="movie-card">
        card
      </div>
    );
  }
}

export default MovieCard;
