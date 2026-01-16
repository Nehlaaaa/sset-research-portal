import React from 'react';
import './Card.css';

const Card = ({ children, title, subtitle, extra, className = '' }) => {
    return (
        <div className={`card ${className}`}>
            {(title || extra) && (
                <div className="card-header">
                    <div className="card-title-group">
                        {title && <h3 className="card-title">{title}</h3>}
                        {subtitle && <p className="card-subtitle">{subtitle}</p>}
                    </div>
                    {extra && <div className="card-extra">{extra}</div>}
                </div>
            )}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default Card;
