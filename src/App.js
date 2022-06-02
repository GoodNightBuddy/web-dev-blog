import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import Layout from './hoc/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/about' element={<About />} />
        <Route path='/web-dev-blog' element={<Navigate to="/"/>} />
      </Route>
    </Routes>
    
  );
}

export default App;
