import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Form from './components/Form';
import AddBlog from './components/AddBlog';
import BlogList from './components/BlogList';
import WizardForm from './components/WizardForm';
import InputForm from './components/InputForm';
import DataFetch from './components/Placeholder';
import Users from './components/Users';
import Github from './components/GithubApi';
import TitleData from './components/TitleData';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import { useContext } from 'react';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeWrapper />
      </Router>
    </ThemeProvider>
  );
}

const ThemeWrapper = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      <div className='theme-toggle-container'>
        <button 
          className='theme-toggle-btn'
          onClick={toggleTheme}
          >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/wizardForm" element={<WizardForm />} />
        <Route path="/inputForm" element={<InputForm />} />
        <Route path="/dataFetch" element={<DataFetch />} />
        <Route path="/users" element={<Users />} />
        <Route path="/github" element={<Github />} />
        <Route path="/titleData" element={<TitleData />} />
      </Routes>
    </div>
  );
}

export default App;