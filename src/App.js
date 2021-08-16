import React, { Component } from 'react';

import PostForm from './PostForm.js';
import AllPost from './AllPost.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
    <div className="App">
   
        <PostForm />
    <AllPost /> 

 
    </div>
    );
    }
  }
export default App;
