import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetail() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count >= 0) {
            setCount(count - 1)
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

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

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: '40px', marginRight: '15px' }} />
                    <span style={{ fontSize: '40px' }}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: '40px', marginLeft: '15px' }} />
                </div>

                <div>
                    <button
                        onClick={addBasket}
                        style={{
                            marginTop: '25px',
                            border: 'none',
                            padding: '10px',
                            backgroundColor: '#ec2849',
                            borderRadius: '5px',
                            color: '#fff'
                        }}> Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail