import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";



class PostsShow extends Component {
  
componentDidMount() {
    //this.props.fetchPost(id);
    this.props.fetchPosts();
  }

render() {
    //const { post } = this.props;
    const { id } = this.props.match.params;
    console.log(id);
    
    if (!this.props.posts) {
      return <div>Loading...</div>;
    }

    return this.props.posts.map((post) => {
  
    if (post.id === id) {
      return (
      <body class="bg-light">

      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a class="navbar-brand mr-auto mr-lg-0" href="">Mentor Guide</a>
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/"> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/">Back to Home <span class="sr-only">(current)</span></a>
          </li>
        </ul> 
      </nav>

      <div class="nav-scroller bg-white shadow-sm">
      <nav class="nav nav-underline">
        <a class="nav-link active" href="">Dashboard</a>
        <a class="nav-link active" href="/posts">Back To List</a>
      </nav>
      </div>
      <div>
      </div>

      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h1 class="display-5">{post.name}</h1>
        <h5>Qualification
          <h6 class="text-muted"> {post.content}</h6>
        </h5>
        <h5>Available for
          <h6 class="text-muted"> {post.classes}</h6>
        </h5>
        <h5>Location
          <h6 class="text-muted"> {post.location}</h6>
        </h5>
        <h5>Mentoring Fee
          <h6 class="text-muted"> {post.salary}</h6>
        </h5>
        <p><span class="btn btn-secondary" > Contact Number: {post.number}</span></p>
        <p><span class="btn btn-secondary" > Address: {post.mark}</span></p>
      </div>   
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
  </body>
    );
        }
      });
  }
}



//function mapStateToProps({ posts }, ownProps)
function mapStateToProps(state){
  // return { post: posts[ownProps.match.params.id] };
  return { posts: state.posts.mentors };
}



export default connect(mapStateToProps, { fetchPosts })(PostsShow);
