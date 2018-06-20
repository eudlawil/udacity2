import React, { Component } from 'react'
import LikedBy from './LikedBy'

class ListMovies extends Component {
    render() {
      const { profiles, users, movies } = this.props;
      const movieList = Object.keys(movies).map(id => (
      <div key={id}>
        <h2>{movies[id].name}</h2>
        <h3>Liked By:</h3>
        <LikedBy movieId={movies[id].id} users={users} profiles={profiles} /> 
      </div>
    ));


      return <ul>{movieList}</ul>;
    }
}

export default ListMovies

