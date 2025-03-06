import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function ProductDetail() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        }
        )
    }
    return (
        <div className="flex-row" style={{ marginTop: '30px', display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div style={{ marginRight: "40px" }}>
                <img src={image} width={300} height={500} alt="" />
            </div>

            <div>
                <h1 style={{ fontFamily: "sans-serif" }}>{title}</h1>
                <h3 style={{ fontFamily: "cursive", fontSize: "23" }}>{description}</h3>
                <h1 style={{
                    fontSize: "50px", fontFamily: "sans-serif", fontWeight: "bold", color: "red"
                }}>{price}€</h1>
            </div>
        </div>
    )
}

export default ProductDetail