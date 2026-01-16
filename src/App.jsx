import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Publications from './pages/Publications';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Admin from './pages/Admin';

import { Link } from 'react-router-dom';
import Card from './components/common/Card';
import Button from './components/common/Button';
import { User } from 'lucide-react';

const Faculty = () => {
  const facultyList = [
    { id: 1, name: 'Dr. Sarah Johnson', dept: 'Computer Science', role: 'Professor' },
    { id: 2, name: 'Dr. Michael Chen', dept: 'Civil Engineering', role: 'Asst. Professor' },
    { id: 3, name: 'Dr. Emily Brown', dept: 'Mechanical Engineering', role: 'Associate Professor' }
  ];

  return (
    <div className="publications-container">
      <div className="page-header">
        <div className="header-text">
          <h1>Faculty Directory</h1>
          <p>Manage and view faculty research profiles across departments.</p>
        </div>
      </div>

      <div className="charts-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {facultyList.map(f => (
          <Card key={f.id}>
            <div className="faculty-cell" style={{ padding: '1.5rem', flexDirection: 'column', textAlign: 'center' }}>
              <div className="f-avatar-small" style={{ width: '64px', height: '64px', fontSize: '1.5rem', marginBottom: '1rem' }}>
                {f.name.split(' ').pop()[0]}
              </div>
              <h3 style={{ marginBottom: '0.25rem' }}>{f.name}</h3>
              <p style={{ color: 'var(--accent-teal)', fontSize: '0.875rem', fontWeight: 600 }}>{f.role}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: '1.5rem' }}>{f.dept}</p>
              <Link to={`/faculty/${f.id}`} style={{ width: '100%' }}>
                <Button variant="outline" className="w-full">View Profile</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
const Settings = () => <div className="placeholder">Settings (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/publications" element={<MainLayout><Publications /></MainLayout>} />
        <Route path="/faculty" element={<MainLayout><Faculty /></MainLayout>} />
        <Route path="/faculty/:id" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/admin" element={<MainLayout><Admin /></MainLayout>} />
        <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
