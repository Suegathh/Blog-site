import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Navbar from './components/Navbar';
import Photo from './components/ProfilePhoto';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/addBlog" element={<AddBlog />} />
        </Routes>
        
        
       
      </div>
    </Router>
  );
}

export default App;
