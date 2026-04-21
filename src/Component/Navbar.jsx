import React from 'react';
import { Link, NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="text-2xl"><span className='font-bold'>Keen</span>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-6">
     <NavLink to={"/"}  className={({isActive}) => `${isActive ? "btn btn-success":" btn btn-ghost"}`}><RiHome2Line />Home</NavLink>
      <NavLink to={"/timeline"} className={({isActive}) => `${isActive ? "btn btn-success":" btn btn-ghost"}`}><IoMdTime />Timeline</NavLink>
      <NavLink to={"/stats"} className={({isActive}) => `${isActive ? "btn btn-success":" btn btn-ghost"}`}><ImStatsDots />Stats</NavLink>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;