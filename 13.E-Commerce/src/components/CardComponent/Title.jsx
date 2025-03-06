import React from 'react';
import '../../css/Product.css';

const Title = ({ title }) => {
    const maxLength = 25;

    // Metni kes ve gerektiğinde "..." ekle
    const truncatedTitle = title.length > maxLength
        ? title.substring(0, maxLength) + '...'
        : title;

    return (
        <div className="card-title">
            {truncatedTitle}
        </div>
    );
};

export default Title;