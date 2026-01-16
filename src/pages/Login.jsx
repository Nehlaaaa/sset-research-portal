import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, School, UserCircle, Briefcase } from 'lucide-react';
import Button from '../components/common/Button';
import './Login.css';

const Login = () => {
    const [role, setRole] = useState('faculty');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-visual">
                <div className="visual-image">
                    <img src="/mural.png" alt="SCSET Mural" />
                </div>
                <div className="visual-content">
                    <div className="visual-logo-img">
                        <img src="/logo.png" alt="SSET Logo" />
                    </div>
                    <p className="inst-meta">SCMS School of Engineering and Technology</p>
                    <h1>Faculty Research & Publications Portal</h1>
                    <p>The institutional gateway for managing academic excellence and research contributions at <strong>SSET</strong>.</p>

                    <div className="visual-stats">
                        <div className="v-stat">
                            <span className="v-num">1.4k+</span>
                            <span className="v-label">Publications</span>
                        </div>
                        <div className="v-stat">
                            <span className="v-num">250+</span>
                            <span className="v-label">Researcher</span>
                        </div>
                    </div>
                </div>
                <div className="abstract-bg">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </div>

            <div className="login-form-area">
                <div className="login-box">
                    <h2>Welcome Back</h2>
                    <p className="subtitle">Please login to access your research dashboard.</p>

                    <div className="role-selector">
                        <button
                            className={`role-btn ${role === 'faculty' ? 'active' : ''}`}
                            onClick={() => setRole('faculty')}
                        >
                            <UserCircle size={18} />
                            Faculty
                        </button>
                        <button
                            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
                            onClick={() => setRole('admin')}
                        >
                            <Briefcase size={18} />
                            Admin
                        </button>
                    </div>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label>Institutional Email</label>
                            <div className="input-wrapper">
                                <Mail size={18} className="input-icon" />
                                <input type="email" placeholder="name@college.edu" required />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-wrapper">
                                <Lock size={18} className="input-icon" />
                                <input type="password" placeholder="••••••••" required />
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgot-pass">Forgot password?</a>
                        </div>

                        <Button type="submit" className="login-submit">
                            Sign In to Portal
                        </Button>
                    </form>

                    <p className="login-footer">
                        Having trouble logging in? <a href="#">Contact Support</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
