import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <main className="page-container">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
