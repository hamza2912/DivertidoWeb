import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import Aos from 'aos';



class About extends Component {

componentDidMount() {
        Aos.init({
            duration: 1000
        })
    }

render() {    
      return (
        
      <body class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header class="masthead mb-auto">
            <div class="inner">
            <img  class="masthead-brand" src="./style/Icon.png" 
                alt="Generic placeholder image" width="50" height="41.66" /> 
              <h3 class="masthead-brand text-light">Divertido</h3>
              <nav class="nav nav-masthead justify-content-center">
                <a class="nav-link " href="/">Home</a>
                <a class="nav-link active" href="/about">About us</a>
                <a class="nav-link" href="/games">Games</a>
                <a class="nav-link" href="/blog">Blog</a>
                <a class="nav-link" href="/contact_us">Contact us</a>
              </nav>
            </div>
          </header>
          <main role="main" class="inner cover">
            <div class = 'comp' align="center">
            <h1 data-aos="zoom-in"  class="cover-heading text-light text-center font-cursive">Divertido Entertainment</h1>
            <h1 class="cover-heading text-warning text-center font-cursive2">Our Vision</h1>
            <p class="text-muted text-center center-margins ">Divertido Entertainment is a game studio with an aim to develop mobile and 
            PC games which promote learning in a fun way.We opt to choose preeminent genres and purposeful 
            games that would leave an impact.</p>
            </div>
            <div align="center">
            <img  data-aos="zoom-in" src="./style/team.png" alt="Generic placeholder image" width="120" height="120" />
            <h4 class = "text-center text-light">Our Team</h4>
            </div>
            <div class="row comp1">
                <div data-aos="zoom-in" align="center" class="col-lg-4">
                    <img  class="rounded-circle" src="./style/Aiman.png" 
                            alt="Generic placeholder image" width="140" height="140" />
                    <h2 class = "text-light ">Aiman Hasan</h2>
                    <h4 class = "text-warning ">CEO</h4>
                    <p class = "text-muted text-center">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <span class="btn btn-outline-info text-light">
                    <img class="rounded-circle" src="./style/Email.png" 
                        alt="Generic placeholder image" width="50" height="50" />ah02887@st.habib.edu.pk
                    </span>
                </div>
                <div data-aos="zoom-in" align="center" class="col-lg-4">
                    <img  class="rounded-circle" src="./style/Masroor.png" 
                            alt="Generic placeholder image" width="140" height="140" />
                    <h2 class = "text-light">Hamza Masroor</h2>
                    <h4 class = "text-warning">TBD</h4>
                    <p class = "text-muted">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <span class="btn btn-outline-info text-light">
                    <img class="rounded-circle" src="./style/Email.png" 
                        alt="Generic placeholder image" width="50" height="50" />ah02887@st.habib.edu.pk
                    </span>
                </div>
                <div data-aos="zoom-in" align="center" class="col-lg-4">
                    <img  class="rounded-circle" src="./style/Hamza.png" 
                            alt="Generic placeholder image" width="140" height="140" />
                    <h2 class = "text-light">Hamza Ali</h2>
                    <h4 class = "text-warning">TBD</h4>
                    <p class = "text-muted">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <span class="btn btn-outline-info text-light">
                    <img class="rounded-circle" src="./style/Email.png" 
                        alt="Generic placeholder image" width="50" height="50" />sa02912@st.habib.edu.pk
                    </span>
                </div>    
            </div>
            <div className="comp">
                    <p class="lead text-center">
                    <a href="/contact_us" class="btn btn-lg btn-info">Contact Us</a>
                    </p>
            </div>
          </main>

          

          <footer class="mastfoot mt-auto">
            <div class="inner">
            <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot; <a href="#">All Rights Reserved</a></p>
            </div>
          </footer>
          
          </body>
  
       
      ); 
  }
}


function mapStateToProps(state) {
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts })(About);
