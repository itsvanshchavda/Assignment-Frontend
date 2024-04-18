import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { FaRegUser } from "react-icons/fa";
import { logout } from '../../slices/AuthSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);
    const { userInfo } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleNav = () => {
        setNav((prev) => !prev);
    };

    const handleLogout = () => {
        dispatch(logout())
        toast.success("Logout Success")
        navigate('/signin');
    };

    useEffect(() => {
        if (userInfo == null || userInfo.length === 0) {
            navigate('/signin');
        }
    }, [userInfo]);

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

                    {userInfo === null || userInfo?.[0] == null ? (
                        <>
                            <li>
                                <Link to="/signin" className="hover:text-gray-300 border px-5 py-1 rounded-md">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup" className="hover:text-gray-300 border px-5 py-1 rounded-md">Sign Up</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='flex justify-center items-center gap-3'>
                                <FaRegUser />
                                {userInfo[0]?.fullName}
                            </li>
                            <li className='hidden md:block'>
                                <button onClick={handleLogout} className="hover:text-gray-300 border px-5 py-1 rounded-md">Logout</button>
                            </li>
                        </>
                    )}


                </ul>
            </div>

            {nav && (
                <div>
                    <div className='float-end p-5 bg-zinc-900 absolute right-1 top-16 shadow-2xl rounded-md mx-5'>
                        <ul className='flex flex-col gap-5 text-white '>
                            {userInfo === null || userInfo?.[0] == null ? (
                                <>
                                    <li>
                                        <Link to="/signin" className="hover:text-gray-300 border px-5 py-1 rounded-md">Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className="hover:text-gray-300 border px-5 py-1 rounded-md">Sign Up</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className='flex justify-center  items-center gap-3'>
                                        <FaRegUser />
                                        {userInfo[0]?.fullName}
                                    </li>
                                    <li className='hidden md:block'>
                                        <button onClick={handleLogout} className="hover:text-gray-300 border px-5 py-1 rounded-md">Logout</button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            )}

            <h1 className='text-white flex justify-center items-center gap-3 md:hidden font-bold float-end mt-1 relative bottom-[4rem] right-16'>
                <FaRegUser />
                {userInfo?.[0]?.fullName}
            </h1>

        </div>
    );
};

export default Navbar;
