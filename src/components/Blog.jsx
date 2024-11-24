import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      id: 1,
      image: '/images/istockphoto-2093186332-1024x1024.jpg',
      title: 'Learning React',
      content: 'React is a powerful JavaScript library for building user interfaces',
      author: 'John Doe',
      date: '2024-11-18',
      time: '11.00 AM'
    },
    {
      id: 2,
      image: '/images/photo-1592609930961-219235eded71.avif',
      title: 'Getting Started with Vite',
      content: 'Vite makes development fast and simple',
      author: 'Jane Smith',
      date: '2024-11-18',
      time: '11.00 AM'
    }
  ];

  return (
    <div className='blog'>
      <h1>Blog Posts</h1>
      <div className='grid'>
        {posts.map((post) => (
          <div key={post.id} className='card'>
            <Link to={`/blog/${post.id}`}>
              <img src={post.image} alt={post.title} className='w-full h-40 object-cover rounded-md mb-4' />
              <Link to={`/blog/${post.id}`}/>
              <h2>{post.title}</h2>
            </Link>
            <p><b>by {post.author}</b></p>
            <Link to={`/blog/${post.id}`} className='text-blue-500 hover:underline mt-2 block'>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;