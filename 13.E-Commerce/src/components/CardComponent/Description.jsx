import React from 'react';
import '../../css/Product.css';

const Description = ({ description }) => {
    const maxLength = 50;

    // Metni kes ve gerektiğinde "..." ekle
    const truncatedDescription = description.length > maxLength
        ? description.substring(0, maxLength) + '...'
        : description;

    return (
        <div className="card-subtitle">
            {truncatedDescription}
        </div>
    );
};

export default Description;