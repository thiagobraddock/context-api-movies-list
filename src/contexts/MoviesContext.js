import React, { Component, createContext } from 'react';

export const MoviesContext = createContext();

export class MoviesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          name: 'Miracle',
          stars: 5,
        },
        {
          id: 2,
          name: 'Arrival',
          stars: 5,
        },
        {
          id: 3,
          name: 'Terminator - Salvation',
          stars: 3,
        },
        {
          id: 4,
          name: 'Two Lives',
          stars: 4,
        },
      ],
    };
  }
  limpar = (id) => {
    this.setState({
      movies: this.state.movies.filter((item) => item.id !== id),
    });
  };
  render() {
    return (
      <MoviesContext.Provider
        value={{ movies: this.state.movies, limpar: this.limpar }}
      >
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}
