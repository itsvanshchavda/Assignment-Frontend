import { Link } from 'react-router-dom'; // Import Link component for routing
import logo from '../../assets/logo.png';

const Navbar = () => {

    
    return (
        <div>
            <div className="py-5 px-6 flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-36 max-sm:w-20 h-auto" />
                </Link>
                <ul className="justify-end items-center text-white hidden md:flex  gap-5">
                    <li>
                        <Link to="/signin" className="hover:text-gray-300 border  px-5 py-1 rounded-md">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="hover:text-gray-300 border px-5 py-1 rounded-md">Sign Up</Link>
                    </li>
                </ul>


            </div>

        </div>
    );
}

export default Navbar;
