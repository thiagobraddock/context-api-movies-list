import React, { Component } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Parser from 'html-react-parser';
export class MoviesList extends Component {
  render() {
    return (
      <div className="movies-content">
        <h1>Que filmes eu assisti esse ano?</h1>
        <MoviesContext.Consumer>
          {
            ({ movies, limpar }) =>
              movies.length > 0 ? (
                movies.map((movie, index) => (
                  <div key={movie.id} className="movie-list">
                    <p key={movie.name}>{Parser(movie.name)}</p>
                    <button
                      className="delete"
                      key={index}
                      onClick={() => limpar(movie.id)}
                    >
                      ❌ NÃO ASSISTI
                    </button>
                  </div>
                ))
              ) : (
                <h3 className="empty">Sem Filmes na Lista 🚨</h3>
              )
            //
          }
        </MoviesContext.Consumer>
      </div>
    );
  }
}

export default MoviesList;
