import React, { Component }  from 'react';
import './App.css';
import Landing from './Landing';
import Projects from './Projects';
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
          <Route exact path='/' element={<Landing/>}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
