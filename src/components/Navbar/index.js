import React, { Component } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

class Navbar extends Component {
  render() {
    console.log(this.context);
    return (
      <nav>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <MoviesContext.Consumer>
          {({ movies }) => <div className="countMovies">{movies.length}</div>}
        </MoviesContext.Consumer>
      </nav>
    );
  }
}
export default Navbar;
