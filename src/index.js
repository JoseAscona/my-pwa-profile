import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Work from './components/work';
import Projects from './components/projects';
import Education from './components/education';
import Footer from './components/footer';

ReactDOM.render(
  <>
    <Header />
    <Work />
    <Education />
    <Projects />
    <Footer />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
