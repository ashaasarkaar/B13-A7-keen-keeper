'use client'
import React from 'react';
import ThemeToggle from '../themeToggle/page';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';



const NavBar = () => {
  const pathname = usePathname()
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
              
             <Link
              href="/pages/homepage"
              className={
                pathname === "/pages/homepage"
                  ? "btn bg-[#244D3F] text-white"
                  : "btn text-[#64748B]"
              }
            >
              <IoHomeOutline />
              <span>Home</span>
            </Link>

            <Link
              href="/pages/timeline"
              className={
                pathname === "/pages/timeline"
                  ? "btn bg-[#244D3F] text-white"
                  : "btn text-[#64748B]"
              }
            >
              <RiTimeLine />
              <span>Timeline</span>
            </Link>

            <Link
              href="/pages/stats"
              className={
                pathname === "/pages/stats"
                  ? "btn bg-[#244D3F] text-white"
                  : "btn text-[#64748B]"
              }
            >
              <ImStatsDots />
              <span>Stats</span>
            </Link>

            </ul>
          </div>
          <h1 className="text-xl font-bold cursor-pointer">KeenKeeper</h1>
        </div>
        <div className="navbar-end hidden lg:flex">

          <div className="menu menu-horizontal px-1 space-x-2">

   
        
           <Link
              href="/pages/homepage"
              className={
                pathname === "/pages/homepage"
                  ? "btn bg-[#244D3F] text-white"
                  : "btn text-[#64748B]"
              }
            >
              <IoHomeOutline />
              <span>Home</span>
            </Link>

            <Link
              href="/pages/timeline"
              className={
                pathname === "/pages/timeline"
                  ? "btn bg-[#244D3F] text-white"
                  : "btn text-[#64748B]"
              }
            >
              <RiTimeLine />
              <span>Timeline</span>
            </Link>

            <Link
              href="/pages/stats"
              className={
                pathname === "/pages/stats"
                  ? "btn bg-[#244D3F] text-white"
                  : "btn text-[#64748B]"
              }
            >
              <ImStatsDots />
              <span>Stats</span>
            </Link>


          </div>


        </div>

        <ThemeToggle></ThemeToggle>

      </div>
    </div>
  );
};

export default NavBar;