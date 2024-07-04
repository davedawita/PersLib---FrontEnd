import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //Note: In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.Client side routing allows your app to update the URL from a link click without making another request for another document from the server. 
  //Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.
  //Client side routing is enabled by creating a Router and linking/submitting to pages with Link and <Form>
  //https://reactrouter.com/en/main/start/overview

  //Wrap our App Component inside of Router so App can use router.
  <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
