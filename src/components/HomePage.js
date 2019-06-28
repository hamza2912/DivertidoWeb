import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import Aos from 'aos';

class HomePage extends Component {

  componentDidMount() {
    Aos.init({
        duration: 1000
    })
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
                <a class="nav-link active" href="/">Home</a>
                <a class="nav-link" href="/about">About us</a>
                <a class="nav-link" href="/games">Games</a>
                <a class="nav-link" href="/blog">Blog</a>
                <a class="nav-link" href="/contact_us">Contact us</a>
              </nav>
            </div>
          </header>

          <main role="main" class="inner cover">
            <div class = 'comp' align="center">
            <img  data-aos="zoom-in"  src="./style/logo.png" alt="Generic placeholder image" width="200" height="200" />
            <h1 class="cover-heading text-warning text-center font-cursive2">Creating Possibilities</h1>
            <p class="text-light text-center center-margins ">Divertido Entertainment is a game studio with an aim to develop mobile and 
            PC games which promote learning in a fun way.</p>
            <p class="lead text-center">
              <a href="/about" class="btn btn-lg btn-info">Learn more</a>
            </p>
            </div>
          </main>

          <footer class=" mt-auto">
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



export default connect(mapStateToProps, { fetchPosts })(HomePage);

/*
<main role="main">
          <header>
            <nav class="site-header fixed-top py-1">
              <div class="container d-flex flex-column flex-md-row justify-content-between">
                <img  class="navbar-brand" src="./style/tutorlogo1.png" 
                alt="Generic placeholder image" width="120" height="50" /> 
                <span class="py-2 d-md-inline-block text-muted" href="#">Home</span>
                <a class="py-2 d-none d-md-inline-block" href="/Usersign">Search</a>
                <a class="py-2 d-none d-md-inline-block" href="/Mainsign">Requests</a>
                <a class="py-2 d-none d-md-inline-block" href="/Mainsign">Sign in</a>
              </div>
            </nav>
          </header>
          <div class = "main-color">

          <div class="carousel-item active">
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2>Tutor Guide</h2>
                    <p>Now get to know all about Tutors in your city while sitting at your home.</p>
                    <Link className="btn btn-lg btn-warning text-light" to="/mainnew"> Get Started   </Link>
                  </div>
                </div>
          </div>
          
          <div className="container">
            <hr class="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading text-light">Search for a Tutor, <span class="text-danger">more than thousands of Tutors.</span></h2>
                <p class="text-light">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
                <Link className="btn btn-lg btn-primary" to="/Usersign"> Search Tutor       </Link>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" src="./style/search.png" alt="Generic placeholder image" />
              </div>
            </div>
            <hr class="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading text-light">Become a Tutor, <span class="text-danger">See for yourself.</span></h2>
                <p class="text-light">You can easily get Tutors and tutions while siiting at home. All you need
                is to submit a short form here and become part of our Tutors team. We will show your pofile to our users
            and they would respond to you if they find you suitable for them</p>
                <Link className="btn btn-lg btn-primary" to="/posts/new"> Become Tutor         </Link>
              </div>
              <div class="col-md-5 order-md-1">
                <img class="featurette-image img-fluid mx-auto" src="./style/tutor.png" alt="Generic placeholder image" />
              </div>
            </div>
            <hr class="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading text-light">Do the needful, <span class="text-danger">post specific Tutor requests</span></h2>
                <p class="text-light">Create your Tutor request by adding details about your requirments and conditions. We
             will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
                <Link className="btn btn-lg btn-primary" to="/Usersign"> Create Request       </Link>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" src="./style/request.png" alt="Generic placeholder image" />
              </div>
            </div>

        
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
              <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal text-light">About us</h1>
                <p class="lead font-weight-normal">We at Tutor guide strive to create an educational network
                which can promote education by linking Tutors with students</p>
                <span class="btn btn-outline-secondary text-light" ><img class="rounded-circle" src="./style/email.png" 
                alt="Generic placeholder image" width="50" height="50" />  shamzaali.nq@gmail.com</span>
              </div>
              <div class="product-device shadow-sm d-none d-md-block"></div>
            </div>
          </div>
          <footer class = "footer-color">
            <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot; <a href="#">All Rights Reserved</a></p>
          </footer>
          </div>
          
        </main>
        */