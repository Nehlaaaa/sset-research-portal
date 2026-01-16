import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Linkedin,
    Globe,
    Award,
    BookOpen,
    Calendar,
    FileText
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Profile.css';

const Profile = () => {
    const profile = {
        name: "Dr. Sarah Johnson",
        designation: "Associate Professor",
        department: "Computer Science & Engineering",
        email: "sarah.johnson@college.edu",
        phone: "+1 (555) 123-4567",
        location: "Block A, Room 402",
        bio: "Passionate researcher focusing on Deep Learning and Medical Image Analysis. Over 10 years of experience in academia and industry research.",
        specializations: ["Artificial Intelligence", "Medical Imaging", "Computer Vision"],
        stats: {
            publications: 42,
            citations: 856,
            hIndex: 12
        }
    };

    const publications = [
        { id: 1, title: "Deep Learning for Medical Image Segmentation", type: "Journal", year: 2023, publisher: "IEEE Transactions" },
        { id: 2, title: "Advancements in Quantum Computing Architectures", type: "Conference", year: 2023, publisher: "QIP 2023" },
        { id: 3, title: "AI-Driven Diagnostics for Oncology", type: "Journal", year: 2022, publisher: "Nature Medicine" },
    ];

    return (
        <div className="profile-container">
            <div className="profile-header-card">
                <Card className="profile-main-card">
                    <div className="profile-layout">
                        <div className="profile-avatar-sec">
                            <div className="profile-avatar">SJ</div>
                            <Button size="sm" variant="outline" className="edit-profile-btn">Edit Profile</Button>
                        </div>

                        <div className="profile-info-sec">
                            <div className="profile-titles">
                                <h1>{profile.name}</h1>
                                <p className="designation">{profile.designation}</p>
                                <p className="dept">{profile.department}</p>
                            </div>

                            <div className="profile-contact-grid">
                                <div className="contact-item">
                                    <Mail size={16} /> <span>{profile.email}</span>
                                </div>
                                <div className="contact-item">
                                    <Phone size={16} /> <span>{profile.phone}</span>
                                </div>
                                <div className="contact-item">
                                    <MapPin size={16} /> <span>{profile.location}</span>
                                </div>
                            </div>

                            <div className="profile-socials">
                                <a href="#" className="social-link"><Globe size={20} /></a>
                                <a href="#" className="social-link"><Linkedin size={20} /></a>
                            </div>
                        </div>

                        <div className="profile-stats-sec">
                            <div className="p-stat-box">
                                <span className="p-stat-val">{profile.stats.publications}</span>
                                <span className="p-stat-lbl">Publications</span>
                            </div>
                            <div className="p-stat-box">
                                <span className="p-stat-val">{profile.stats.citations}</span>
                                <span className="p-stat-lbl">Citations</span>
                            </div>
                            <div className="p-stat-box">
                                <span className="p-stat-val">{profile.stats.hIndex}</span>
                                <span className="p-stat-lbl">h-index</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="profile-content-grid">
                <div className="profile-left-col">
                    <Card title="About">
                        <p className="bio-text">{profile.bio}</p>
                        <div className="specialization-tags">
                            {profile.specializations.map(tag => (
                                <span key={tag} className="spec-tag">{tag}</span>
                            ))}
                        </div>
                    </Card>

                    <Card title="Awards & Recognitions" className="mt-2">
                        <div className="awards-list">
                            <div className="award-item">
                                <Award size={20} className="award-icon" />
                                <div>
                                    <p className="award-name">Best Researcher Award 2023</p>
                                    <p className="award-meta">University Academic Council</p>
                                </div>
                            </div>
                            <div className="award-item">
                                <Award size={20} className="award-icon" />
                                <div>
                                    <p className="award-name">Distinguished Faculty Grant</p>
                                    <p className="award-meta">National Science Foundation</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="profile-right-col">
                    <Card title="Recent Publications" extra={<Button size="sm" variant="ghost">View All</Button>}>
                        <div className="profile-pubs-list">
                            {publications.map(pub => (
                                <div key={pub.id} className="profile-pub-item">
                                    <div className="pub-meta">
                                        <span className={`p-badge ${pub.type.toLowerCase()}`}>{pub.type}</span>
                                        <span className="pub-year"><Calendar size={14} /> {pub.year}</span>
                                    </div>
                                    <h3 className="pub-item-title">{pub.title}</h3>
                                    <p className="pub-item-publisher">{pub.publisher}</p>
                                    <div className="pub-item-actions">
                                        <Button size="sm" variant="outline" icon={<ExternalLink size={14} />}>DOI Link</Button>
                                        <Button size="sm" variant="ghost" icon={<FileText size={14} />}>Full Text</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="add-pub-btn mt-2" icon={<BookOpen size={18} />}>
                            Add New Publication
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
