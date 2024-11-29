import React, { useState } from 'react';
import './Home.css';
import Carousel from './Carosel';


function Home() {
  return (
    <div className="home">
      <h1>My Blog</h1>
      <h2>Welcome to my React Blog</h2>
      <p>This is my first blog built while learning React</p>
      <Carousel />
    </div>
  );
}

export default Home;
