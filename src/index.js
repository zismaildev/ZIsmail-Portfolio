// Components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Contents
import Portfolio from './Contents/Portfolio'
import Aboutme from './Contents/Aboutme';
import Educaction from './Contents/Educaction'
import Activity from './Contents/Activity'
import Certi from './Contents/Certi'
import Test from './Contents/Test'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/educaction" element={<Educaction />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/certi" element={<Certi />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();