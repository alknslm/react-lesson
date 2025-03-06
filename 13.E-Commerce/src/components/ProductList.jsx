import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Product from './Product'
import '../css/Product.css'


function ProductList() {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);


    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return (
        <div className='card-list'>
            {products && products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList