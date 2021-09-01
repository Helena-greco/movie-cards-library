// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { allMovies } = this.props;
    return (
      <section className="movie-list">
        { allMovies.map((item) => <MovieCard key={ item.title } eachMovie={ item } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
