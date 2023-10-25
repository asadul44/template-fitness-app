import React from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom'
import MyRoute from './MyRoute';
const App = () => {
  return (
    <div>

      <Router>

        <MyRoute />

      </Router>


    </div>
  );
};

export default App;
