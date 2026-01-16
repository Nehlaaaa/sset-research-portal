import React from 'react';
import {
    ShieldCheck,
    UserPlus,
    FileBarChart,
    Clock,
    CheckCircle2,
    XCircle,
    ArrowRight
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Admin.css';

const Admin = () => {
    const pendingApprovals = [
        { id: 1, title: "Quantum Cryptography Trends", faculty: "Dr. Alan Turing", date: "2024-01-12", status: "Pending" },
        { id: 2, title: "Edge Computing in IoT", faculty: "Prof. Grace Hopper", date: "2024-01-14", status: "Pending" },
    ];

    const facultyList = [
        { id: 1, name: "Dr. Sarah Johnson", dept: "CSE", pubs: 42, lastActive: "2 hours ago" },
        { id: 2, name: "Prof. Michael Chen", dept: "ECE", pubs: 38, lastActive: "5 hours ago" },
        { id: 3, name: "Dr. Emily Davis", dept: "MECH", pubs: 25, lastActive: "1 day ago" },
    ];

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1>Administrative Control Center</h1>
                <p>Manage faculty data, verify publications, and generate institutional reports.</p>
            </div>

            <div className="admin-top-row">
                <Card title="Approval Queue" subtitle="Publications awaiting verification" className="approval-card">
                    <div className="approval-list">
                        {pendingApprovals.map(item => (
                            <div key={item.id} className="approval-item">
                                <div className="approval-info">
                                    <h4 className="item-title">{item.title}</h4>
                                    <p className="item-meta">Submitted by <strong>{item.faculty}</strong> • {item.date}</p>
                                </div>
                                <div className="approval-actions">
                                    <button className="approve-btn"><CheckCircle2 size={18} /></button>
                                    <button className="reject-btn"><XCircle size={18} /></button>
                                    <button className="view-btn"><ArrowRight size={18} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-1">View Full Queue</Button>
                </Card>

                <Card title="Quick Actions" className="actions-card">
                    <div className="quick-actions-grid">
                        <button className="q-action-btn">
                            <div className="q-icon-box blue"><UserPlus size={24} /></div>
                            <span>Add Faculty</span>
                        </button>
                        <button className="q-action-btn">
                            <div className="q-icon-box navy"><ShieldCheck size={24} /></div>
                            <span>Permissions</span>
                        </button>
                        <button className="q-action-btn">
                            <div className="q-icon-box accent"><FileBarChart size={24} /></div>
                            <span>Global Report</span>
                        </button>
                        <button className="q-action-btn">
                            <div className="q-icon-box light-blue"><Clock size={24} /></div>
                            <span>Audit Logs</span>
                        </button>
                    </div>
                </Card>
            </div>

            <div className="admin-bottom-row">
                <Card title="Faculty Management" extra={<Button size="sm">Manage All</Button>}>
                    <div className="table-wrapper">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Faculty Member</th>
                                    <th>Department</th>
                                    <th>Total Pubs</th>
                                    <th>Last Activity</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facultyList.map(faculty => (
                                    <tr key={faculty.id}>
                                        <td>
                                            <div className="faculty-cell">
                                                <div className="f-avatar-small">{faculty.name.split(' ').map(n => n[0]).join('')}</div>
                                                <span>{faculty.name}</span>
                                            </div>
                                        </td>
                                        <td>{faculty.dept}</td>
                                        <td>{faculty.pubs}</td>
                                        <td>{faculty.lastActive}</td>
                                        <td><span className="status-badge active">Active</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Card title="Report Generation" className="report-card">
                    <div className="report-form">
                        <div className="report-field">
                            <label>Report Type</label>
                            <select>
                                <option>Annual Research Summary</option>
                                <option>Department Performance</option>
                                <option>Individual Faculty Growth</option>
                            </select>
                        </div>
                        <div className="report-field">
                            <label>Time Period</label>
                            <div className="date-range">
                                <input type="date" />
                                <span>to</span>
                                <input type="date" />
                            </div>
                        </div>
                        <Button variant="primary" className="w-full mt-1">Generate PDF Report</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Admin;
