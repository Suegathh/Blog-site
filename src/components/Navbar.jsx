import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/Counter">Counter</Link>
            <Link to="/Form">Form</Link>
            <Link to="/AddBlog"> Add Blog</Link>
        </nav>
    );
}
export default Navbar;