import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions/index";

export class Favorites extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>

                <button
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (movieId) => dispatch(removeMovieFavorite(movieId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
