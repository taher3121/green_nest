import { Link, NavLink } from 'react-router';
import greenleaf from '../assets/istockphoto-1045368942-612x612.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutfunc, setUser } = useContext(AuthContext);
    console.log(user)
    
    const links = <>
        <NavLink to='/' className='mr-3 text-xl '>Home</NavLink>
        <NavLink to='/plants' className='mr-3 text-xl'>Plants</NavLink>
        {
            user &&(<NavLink to='/myProfile' className='mr-3 text-xl'>My Profile</NavLink>)
        }
    </>


    const handleSignOut = () => {
        signOutfunc()
            .then(() => {
                toast.success("signout Successful");
                setUser(null);
            })
            .catch((e) => {
                toast.error(e.message)
            })
    }

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
                    {
                        user ? (
                            <>
                                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                                    <img
                                        src={user?.photoURL || "https://via.placeholder.com/88"}
                                        className="h-[40px] w-[40px] rounded-full mx-auto"
                                        alt=""
                                    />
                                </button>

                                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                                    <li>
                                        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                                    </li>
                                    <li>
                                        <button className='btn' onClick={handleSignOut}>
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <button className='btn'>
                                    <Link to='/signin'>Sign In</Link>
                                </button>
                                <button className='btn'>
                                    <Link to='/Signup'>Sign Up</Link>
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;