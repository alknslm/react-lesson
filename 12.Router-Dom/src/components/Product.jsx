import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, name, price } = product;
    const navigate = useNavigate();

    return (
        <div style={{ marginBottom: "40px", backgroundColor: 'lightgrey' }}>
            <h2>Ürün Detayı</h2>
            <h3>İsim : {name}</h3>
            <h3>Fiyat : {price}</h3>
            <button onClick={() => navigate("/product-details/" + id)}> Detayına Git</button>
            <hr />
        </div>
    )
}

export default Product