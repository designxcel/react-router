
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/contact">Contact</Link>
                <Link to = "/comments">Comments</Link>
            </nav>
        </div>
    );
};

export default Header;