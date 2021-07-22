// implement MovieCard component here
//
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath} = this.props;

    return(
      <div className="movie-card">

        <div className="movie-card-body">          
          <img className="movie-card-image" src={ imagePath } alt=""/>

          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>

          {/** Rating deve vir aqui */}       

        </div>

      </div>
    );
  }
}

export default MovieCard;
