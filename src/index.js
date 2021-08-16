import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createStore } from 'redux'
import postReducer from './Reducer/postReducer';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


//createstore puedo crear un store
const store = createStore(postReducer);



ReactDOM.render(
<Provider store={store}>
    <App />
   
    
    </Provider>,
  document.getElementById('root')
);


