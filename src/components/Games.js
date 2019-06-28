import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import Aos from 'aos';

class Games extends Component {

componentDidMount() {
    Aos.init({
      duration : 1000
    });
}

render() {    
      return (
        
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
          <div class="inner">
          <img  class="masthead-brand" src="./style/Icon.png" 
              alt="Generic placeholder image" width="50" height="41.66" /> 
            <h3 class="masthead-brand text-light">Divertido</h3>
            <nav class="nav nav-masthead justify-content-center">
              <a class="nav-link " href="/">Home</a>
              <a class="nav-link " href="/about">About us</a>
              <a class="nav-link active" href="/games">Games</a>
              <a class="nav-link" href="/blog">Blog</a>
              <a class="nav-link" href="/contact_us">Contact us</a>
            </nav>
          </div>
        </header>

        <main role="main" class="inner cover">
          <div class = 'comp' align="center">
          <img  data-aos="zoom-in"  src="./style/games.png" alt="Generic placeholder image" width="120" height="141" />
          <h1 class="cover-heading text-warning text-center font-cursive2">Our Games</h1>
            <p class="text-muted text-center center-margins ">Divertido Entertainment is a game studio with an aim to develop mobile and 
            PC games which promote learning in a fun way.</p>
          </div>
        
          <div data-aos="zoom-in" class="jumbotron p-4 p-md-5 text-white rounded bg-light">
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h1 class="display-4 font-italic text-dark">Jack and the Treasures</h1>
                <p class="lead my-3 text-dark">Jack and the Treasures - First ever interactive game to learn sign language! 
                According to the World Health Organization (WHO), over 5% of the world’s population suffers from disabling hearing loss.</p>
                <p class=""><a href="https://www.youtube.com/watch?v=aum8sevpp48&feature=shares" target="_blank" class="btn btn-lg btn-warning text-light">
                <img   src="./style/youtube.png" alt="Generic placeholder image" width="50" height="50" />
                Watch Trailer</a></p>
                <p class="lead mb-0 font-weight-bold text-dark">Available on playstore</p>
                <p class="lead"><a href="https://play.google.com/store/apps/details?id=com.Divertido.JackAndTheTreasures"
                target="_blank" class="btn btn-lg btn-info">
                <img   src="./style/playstore.png" alt="Generic placeholder image" width="50" height="50" />
                Download</a></p>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="featurette-image img-fluid mx-auto" src="./style/Jack.PNG" alt="Generic placeholder image" />
              </div>
              </div>
          </div>

          <div data-aos="zoom-in" class="jumbotron p-4 p-md-5 text-white rounded bg-light">
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h1 class="display-4 font-italic text-dark">Jack and the Treasures</h1>
                <p class="lead my-3 text-dark">Jack and the Treasures - First ever interactive game to learn sign language! 
                According to the World Health Organization (WHO), over 5% of the world’s population suffers from disabling hearing loss.</p>
                <p class=""><a href="https://www.youtube.com/watch?v=aum8sevpp48&feature=shares" target="_blank" class="btn btn-lg btn-warning text-light">
                <img   src="./style/youtube.png" alt="Generic placeholder image" width="50" height="50" />
                Watch Trailer</a></p>
                <p class="lead mb-0 font-weight-bold text-dark">Available on playstore</p>
                <p class="lead"><a href="https://play.google.com/store/apps/details?id=com.Divertido.JackAndTheTreasures"
                target="_blank" class="btn btn-lg btn-info">
                <img   src="./style/playstore.png" alt="Generic placeholder image" width="50" height="50" />
                Download</a></p>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="featurette-image img-fluid mx-auto" src="./style/Jack.PNG" alt="Generic placeholder image" />
              </div>
              </div>
          </div>
    
        </main>

        

        <footer class="mastfoot mt-auto">
          <div class="inner">
          <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot; <a href="#">All Rights Reserved</a></p>
          </div>
        </footer>
        </div>

       
      ); 
  }
}


function mapStateToProps(state) {
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts })(Games);