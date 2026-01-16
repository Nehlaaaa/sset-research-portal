import React from 'react';
import {
    Users,
    FileText,
    BookOpen,
    Award,
    TrendingUp,
    ArrowUpRight
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area
} from 'recharts';
import Card from '../components/common/Card';
import './Dashboard.css';

const data = [
    { name: '2020', journals: 40, conferences: 24 },
    { name: '2021', journals: 55, conferences: 38 },
    { name: '2022', journals: 48, conferences: 52 },
    { name: '2023', journals: 78, conferences: 63 },
    { name: '2024', journals: 92, conferences: 75 },
];

const deptData = [
    { name: 'CSE', count: 120 },
    { name: 'ECE', count: 85 },
    { name: 'MECH', count: 64 },
    { name: 'CIVIL', count: 42 },
    { name: 'EEE', count: 58 },
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-welcome">
                <h1>Welcome back, Dr. Sarah!</h1>
                <p>Here's what's happening with the research portal today.</p>
            </div>

            <div className="stats-grid">
                <Card className="stat-card">
                    <div className="stat-content">
                        <div className="stat-icon-wrapper blue">
                            <Users size={24} />
                        </div>
                        <div className="stat-details">
                            <span className="stat-label">Total Faculty</span>
                            <h2 className="stat-value">248</h2>
                            <span className="stat-trend positive">
                                <ArrowUpRight size={14} /> +12% from last year
                            </span>
                        </div>
                    </div>
                </Card>

                <Card className="stat-card">
                    <div className="stat-content">
                        <div className="stat-icon-wrapper navy">
                            <FileText size={24} />
                        </div>
                        <div className="stat-details">
                            <span className="stat-label">Total Publications</span>
                            <h2 className="stat-value">1,452</h2>
                            <span className="stat-trend positive">
                                <ArrowUpRight size={14} /> +18% from last year
                            </span>
                        </div>
                    </div>
                </Card>

                <Card className="stat-card">
                    <div className="stat-content">
                        <div className="stat-icon-wrapper light-blue">
                            <BookOpen size={24} />
                        </div>
                        <div className="stat-details">
                            <span className="stat-label">Journals</span>
                            <h2 className="stat-value">842</h2>
                            <span className="stat-trend positive">
                                <ArrowUpRight size={14} /> +8% from last year
                            </span>
                        </div>
                    </div>
                </Card>

                <Card className="stat-card">
                    <div className="stat-content">
                        <div className="stat-icon-wrapper accent">
                            <Award size={24} />
                        </div>
                        <div className="stat-details">
                            <span className="stat-label">Conferences</span>
                            <h2 className="stat-value">610</h2>
                            <span className="stat-trend positive">
                                <ArrowUpRight size={14} /> +24% from last year
                            </span>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="charts-grid">
                <Card title="Year-wise Publications" subtitle="Distribution of Journals vs Conferences">
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}
                                />
                                <Bar dataKey="journals" fill="#003366" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="conferences" fill="#2dd4bf" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card title="Department-wise Contribution" subtitle="Active research publications per department">
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={deptData}>
                                <defs>
                                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                                <Area type="monotone" dataKey="count" stroke="#2dd4bf" fillOpacity={1} fill="url(#colorCount)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
