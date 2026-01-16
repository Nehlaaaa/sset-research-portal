import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Users,
    FileCheck,
    Settings,
    LogOut,
    ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
        { icon: <FileText size={20} />, label: 'Publications', path: '/publications' },
        { icon: <Users size={20} />, label: 'Faculty', path: '/faculty' },
        { icon: <FileCheck size={20} />, label: 'Admin Panel', path: '/admin' },
        { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <div className="logo-img-wrapper">
                        <img src="/logo.png" alt="SSET Logo" />
                    </div>
                    <div className="logo-text">
                        <span className="scms">SSET</span>
                        <span className="portal">Research Portal</span>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                        <ChevronRight className="chevron" size={16} />
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn" onClick={() => navigate('/login')}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
