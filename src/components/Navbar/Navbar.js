import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar  bg-primary text-primary-content">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-success rounded-box w-52">
                        <Link to={'/'}>Home</Link>
                        <li> <Link to={'/shop'}>Home</Link></li>
                        <Link to={'/'}>Home</Link>

                        {/* <li><a>Shop</a></li>
                        <li><a>Featured</a></li>
                        <li><a>Recommandred</a></li> */}
                    </ul>
                </div>
                {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link to={'/'}>

                    <img className='w-50' src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="" />
                </Link>
            </div>



            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li> <Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/shop'}>Shop</Link></li>
                    <li> <Link to={'/features'}>Features</Link></li>
                    <li> <Link to={'/recommandred'}>Recommandred</Link></li>
                </ul>
            </div>
            <div class="navbar-end">

                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span class="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <p className='pr-5'>Sign In</p>
                <button class="btn success">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;