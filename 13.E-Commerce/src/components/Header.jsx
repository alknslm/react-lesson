import React from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import ModeSwitch from './UI/ModeSwitch';
import SearchInput from './UI/SearchInput';
import Basket from './UI/Basket';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

function Header() {

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);
    const dispatch = useDispatch()

    return (
        <div style={{
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between'
        }}>
            <div className='flex-row' onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                <img className='logo' src="./src/images/logo.png" alt="" />
            </div>

            <div className='flex-row'>
                {/* <input className='search-input' placeholder='Search something..' type="text" /> */}
                <SearchInput />
                <div className='flex-row'>
                    {/* <CiShoppingBasket className='icon' /> */}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <Basket />
                    </Badge>

                    <ModeSwitch />
                </div>
            </div>
        </div>
    )
}

export default Header