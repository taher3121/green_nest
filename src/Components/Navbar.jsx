import { Link, NavLink } from 'react-router';
import greenleaf from '../assets/istockphoto-1045368942-612x612.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const links = <>
        <NavLink to='/' className='mr-3 text-xl '>Home</NavLink>
        <NavLink to='/plants' className='mr-3 text-xl'>Plants</NavLink>
        <NavLink to='/myProfile' className='mr-3 text-xl'>My Profile</NavLink>
    </>

    const result = useContext(AuthContext);
    console.log(result)
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm relative z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className='flex justify-center items-center'>
                        <img className='h-13 w-auto' src={greenleaf} alt="" />
                        <p className='text-green-700'>Green NEst</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-2" >
                    <button className='btn'>
                        <Link to='/signin'>Sign In</Link>
                    </button>
                    <button className='btn'>
                        <Link to='/Signup'>Sign Up</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;