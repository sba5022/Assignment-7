import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import AllFriends from '../friens/AllFriends';

const Layout = () => {
    return (
        <div>
            <Navbar/>
          
            <Outlet/>
        </div>
    );
};

export default Layout;