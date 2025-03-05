import React from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import ModeSwitch from './ModeSwitch';
import SearchInput from './SearchInput';
import Basket from './Basket';
import { useState } from 'react';

function Header() {
    return (
        <div style={{
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between'
        }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" alt="" />
            </div>

            <div className='flex-row'>
                {/* <input className='search-input' placeholder='Search something..' type="text" /> */}
                <SearchInput />
                <div className='flex-row'>
                    {/* <CiShoppingBasket className='icon' /> */}
                    <Basket />
                    <ModeSwitch />
                </div>
            </div>
        </div>
    )
}

export default Header