import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    Download,
    Eye,
    Edit2,
    Trash2,
    ExternalLink
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Publications.css';

const publications = [
    {
        id: 1,
        title: "Deep Learning for Medical Image Segmentation",
        author: "Dr. Sarah Johnson",
        type: "Journal",
        year: 2023,
        publisher: "IEEE Transactions",
        status: "Published"
    },
    {
        id: 2,
        title: "Efficient Algorithms for Large Scale Graph Processing",
        author: "Prof. Michael Chen",
        type: "Conference",
        year: 2024,
        publisher: "VLDB 2024",
        status: "Accepted"
    },
    {
        id: 3,
        title: "Blockchain Applications in Supply Chain Management",
        author: "Dr. Emily Davis",
        type: "Journal",
        year: 2022,
        publisher: "ACM Computing Surveys",
        status: "Published"
    },
    {
        id: 4,
        title: "Advancements in Quantum Computing Architectures",
        author: "Dr. Sarah Johnson",
        type: "Conference",
        year: 2023,
        publisher: "QIP 2023",
        status: "Published"
    },
    {
        id: 5,
        title: "Natural Language Processing for Low Resource Languages",
        author: "Dr. Robert Wilson",
        type: "Journal",
        year: 2023,
        publisher: "Computational Linguistics",
        status: "Under Review"
    },
];

const Publications = () => {
    return (
        <div className="publications-container">
            <div className="page-header">
                <div className="header-text">
                    <h1>Publications Management</h1>
                    <p>Track and manage all faculty research work here.</p>
                </div>
                <div className="header-actions">
                    <Button variant="outline" icon={<Download size={18} />}>Export Reports</Button>
                    <Button icon={<Plus size={18} />}>Add Publication</Button>
                </div>
            </div>

            <Card>
                <div className="table-controls">
                    <div className="search-group">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search by title, author, or keyword..." />
                    </div>
                    <div className="filter-group">
                        <select className="filter-select">
                            <option value="">Year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        <select className="filter-select">
                            <option value="">Type</option>
                            <option value="journal">Journal</option>
                            <option value="conference">Conference</option>
                        </select>
                        <Button variant="ghost" icon={<Filter size={18} />}>More Filters</Button>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Type</th>
                                <th>Year</th>
                                <th>Publisher</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publications.map((pub) => (
                                <tr key={pub.id}>
                                    <td className="pub-title-cell">
                                        <span className="pub-title">{pub.title}</span>
                                        <ExternalLink size={12} className="link-icon" />
                                    </td>
                                    <td>{pub.author}</td>
                                    <td>
                                        <span className={`badge badge-${pub.type.toLowerCase()}`}>
                                            {pub.type}
                                        </span>
                                    </td>
                                    <td>{pub.year}</td>
                                    <td>{pub.publisher}</td>
                                    <td>
                                        <span className={`status-dot ${pub.status.toLowerCase().replace(' ', '-')}`}></span>
                                        {pub.status}
                                    </td>
                                    <td>
                                        <div className="action-btns">
                                            <button className="action-btn"><Eye size={16} /></button>
                                            <button className="action-btn"><Edit2 size={16} /></button>
                                            <button className="action-btn delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pagination">
                    <span className="pagination-info">Showing 1 to 5 of 1,452 entries</span>
                    <div className="pagination-btns">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <div className="pagination-numbers">
                            <button className="page-num active">1</button>
                            <button className="page-num">2</button>
                            <button className="page-num">3</button>
                            <span className="page-dots">...</span>
                            <button className="page-num">48</button>
                        </div>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Publications;
