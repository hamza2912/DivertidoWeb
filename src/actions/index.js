import axios from "axios";


export const FETCH_POSTS = "fetch_posts";

export const FETCH_POST = "fetch_post";

export const CREATE_POST = "create_post";

export const UPDATE_POST = "update_post";

export const DELETE_POST = "delete_post";
var posts = [];
var comments = [];
var messeges = [];
var ID = 1;


const ROOT_URL = "http://localhost:8000";

//const API_KEY = "?key=PAPERCLIP1";


export function fetchPosts() {
  
const request = axios.get(`${ROOT_URL}/mentorposts`);

  
return {
    type: FETCH_POSTS,
    payload: request
  };
}

  

export function createPost(values, callback) {

  values.userId = ID;
  ID++;
  //values.comments = comments;
  //values.messeges = messeges;
  var Logged = true;
  var ProfilePage = `/profile/${values.userId}`;
  localStorage.setItem('ProfilePage', JSON.stringify(ProfilePage));
  localStorage.setItem('Logged', JSON.stringify(Logged));

  console.log(values);

  const request = axios
    .post(`${ROOT_URL}/newmentor`, values)
    .then(() => callback());

  
return {
    type: CREATE_POST,
    payload: request
  };
}


export function fetchPost(id) {
  
const request = axios.get(`${ROOT_URL}/mentorposts:noteId`);

  
return {
    type: FETCH_POST,
    payload: request
  };
}


export function deletePost(id) {
  
const request = axios
    .delete(`${ROOT_URL}/posts/:${id}`);

  
return {
    type: DELETE_POST,
    payload: id
  };
}