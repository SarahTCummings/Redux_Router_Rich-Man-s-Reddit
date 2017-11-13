import React, { Component } from 'react';
import RedditData from '../reducers';
import { connect } from 'react-redux';

class Grid extends Component {
  

  render() {
 const { author, posts } = this.props.post.map((post) =>
 (<p ClassName="title" >{post.title}</p>)
 (<p ClassName="author" >{post.author}</p>)
 // return (
 //    <div className="Grid">
 //        {posts}
 //        {authors}
 //  </div>
    );
  }
//    const posts = this.props.posts.map((post) =>
//    //
// (<p ClassName="author" >{post.author}</p>)
//  );
//  const authors = this.props.posts.map((post) =>
//  (<p ClassName="author" >{post.title}</p>)
//
// );


function mapStateToProps(state) {
  return  {
    posts: state.posts

  };
}

export default connect(mapStateToProps)(Grid);
