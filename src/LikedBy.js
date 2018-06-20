import React, { Component } from 'react'

class LikedBy extends Component {
  render(){
   const { movieId, profiles, users } = this.props;
   // var lisa = ['Farrin', 'Kagure', 'Asser'].map( name =>  name.match(/Kag/) ? 'This is awsome' : 'This is not Fun' );
   let liked = 0;
   let likedByList = profiles.map( function(profile) { 
                 if (profile.favoriteMovieID == movieId )  { liked++ }
                                  
                 return profile.favoriteMovieID == movieId ? <li key={profile.id}>{users[profile.id].name}</li> : ''
                                  }
    );
    if (liked === 0) { likedByList = "Nobody liked this movie!" }
    return(
      <div>
      <ul>
      {likedByList}
      </ul>
      </div>
    )
  }
}

export default LikedBy