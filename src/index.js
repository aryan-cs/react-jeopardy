import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Topic from './Topic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <Topic genre = "topic 1"/>
    <Topic genre = "topic 2"/>
    <Topic genre = "topic 3"/>
    <Topic genre = "topic 4"/>
    <Topic genre = "topic 5"/>
    
  </React.StrictMode>

);
