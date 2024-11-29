import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/form">Form</Link>
            <Link to="/addBlog"> Add Blog</Link>
            <Link to="/blogList">BlogList</Link>
            <Link to="/wizardForm">WizardForm</Link>
            <Link to="/inputForm">InputForm</Link>
            <Link to="/dataFetch">DataFetch</Link>
            <Link to="/users">Users</Link>
            <Link to="/github">Github</Link>
            <Link to="/loginForm">LoginForm</Link>
            <Link to="/toDoApp">ToDo</Link>
            <Link to="/studentForm">Student Form</Link>
        </nav>
    );
}
export default Navbar;