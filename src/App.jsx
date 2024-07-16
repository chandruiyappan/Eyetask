import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/App.jsx

import React from 'react';
import StudentInfo from './StudentInfo';

const student = {
  name: 'Chandru',
  age: 20,
  major: 'Information Technology'
};

const App = () => {
  return (
    <div className="App">
      <h1>Click for Information</h1>
      <StudentInfo student={student} />
    </div>
  );
};

export default App;

