import React from 'react'

function Product({ productName, price }) {
    // const { productName, price } = props; // destructuring yapısı
    return (
        <div>
            <div>Urun Bilgileri</div>

            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {price} TL</div>
            </div>
            <hr />
        </div>
    )
}

export default Product