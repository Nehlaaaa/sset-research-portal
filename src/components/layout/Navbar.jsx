import React from 'react';
import { Bell, Search, User, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-branding">
            </div>

            <div className="search-bar">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Search publications, faculty..." />
            </div>

            <div className="navbar-actions">
                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="notification-badge"></span>
                </button>

                <div className="user-profile">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <div className="user-info">
                        <span className="user-name">Dr. Sarah Johnson</span>
                        <span className="user-role">Professor, Dept. of CSE</span>
                    </div>
                    <ChevronDown size={16} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
