import React from 'react'
import './Card.css'

const Card = ({ version, date, status, img, author, description, buttonLabel }) => {
    return (
        <div className='card'>
            <div className="card-header">
                <div className="version-date">
                    <span className="version">{version}</span>
                    <span className="date">({date})</span>
                </div>
                <div className='status-author'>
                    <span className={`status ${status.toLowerCase()}`}>{status}</span>
                    <img src={img} alt={author} />
                    <span className="author">{author}</span>
                </div>
            </div>
            <div className="card-body">
                <p className="description">{description}</p>
            </div>
            <div className="card-footer">
                <button className="download-button">{buttonLabel}</button>
            </div>
        </div>
    )
}

export default Card