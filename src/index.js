import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext'
import {PostProvider} from './Context/PostContext'
import {GoalProvider} from './Context/GoalContext'
import {TagProvider} from './Context/TagContext'

const Router = process.env.NODE_ENV === 'development'? HashRouter : BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PostProvider>
          <GoalProvider>
            <TagProvider>
            <App />
            </TagProvider>
          </GoalProvider>
        </PostProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
