import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/blog';
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
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/AddBlog" element={<AddBlog />} />
        </Routes>
        
        
       
      </div>
    </Router>
  );
}

export default App;
