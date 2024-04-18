import { Link } from 'react-router-dom'; // Import Link component for routing
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';



const Navbar = () => {


    const [nav, setNav] = useState<boolean>(false)
    const {userInfo} = useAppSelector((state) => state.auth);   
    const navigate = useNavigate();
    const handleNav = () => {
        setNav((prev) => !prev)
    }

    if(!userInfo || userInfo.length === 0){  
        navigate('/signin');
    }


    return (
        <div>
            <div className="py-5 px-6 flex justify-between items-center ">

                <Link to="/">
                    <img src={logo} alt="Logo" className="w-36 mt-4 max-sm:w-20 h-auto" />
                </Link>

                <div className='cursor-pointer md:hidden'>
                    {nav ? <MdOutlineClose color='white' onClick={handleNav} size={25} /> : <MdOutlineMenu color='white' onClick={handleNav} size={25} />}

                </div>

                <ul className="justify-end items-center text-white hidden md:flex px-10  gap-5">


                    {userInfo ? (

                        <>
                            <li>
                                {userInfo[0]?.firstname} {userInfo[0]?.lastname}
                            </li>

                            <span className='text-slate-700'>|</span>

                            <li className='cursor-pointer hover:text-gray-600'>
                                Logout
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/signin" className="hover:text-gray-300 border  px-5 py-1 rounded-md">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup" className="hover:text-gray-300 border px-5 py-1 rounded-md">Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>


            </div>

            {nav && (
                <div className='float-end p-5 bg-zinc-900 absolute right-1 top-16 shadow-2xl rounded-md mx-5'>
                    <ul className='flex flex-col gap-5 text-white '>
                        {userInfo ? (

                            <>
                                <li>
                                    {userInfo[0]?.firstname} {userInfo[0]?.lastname}
                                </li>

                                <span className='text-slate-700'>|</span>

                                <li className='cursor-pointer hover:text-gray-600'>
                                    Logout
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/signin" className="hover:text-gray-300 border  px-5 py-1 rounded-md">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="hover:text-gray-300 border px-5 py-1 rounded-md">Sign Up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}

        </div>
    );
}

export default Navbar;
