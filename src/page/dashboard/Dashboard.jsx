import React from 'react';
import { Outlet } from 'react-router-dom';
import './dashboard.css'
const Dashboard = () => {
    return (
        <div className='dash'>
           <Outlet/>
        </div>
    );
};

export default Dashboard;