import React, { useState } from 'react'
import '../css/currency.css';
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_sZGf2jndPJqdacga7wq0y80zBds9EBTAwOGyuhBE";


function Currency() {

    // ! ekranda girilecek olan inputlar
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    //! api kullnarak seçilen para biriminin karşılığını hesaplayan fonksiyon
    const exchange = async () => {
        const respone = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (respone.data.data[toCurrency] * amount).toFixed(3);
        setResult(result);
    }

    return (
        <div className="currency-div">
            <div>
                <h2 style={{ marginTop: '-10px', color: '#0012d7' }}>DÖVİZ KURU UYGULAMASI</h2>
            </div>
            <div>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' />

                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowRightLong className='icon' />

                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type="number" className='result' />

            </div>

            <div style={{ width: '100%', marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={exchange}
                    className='exchange-button'>ÇEVİR</button>
            </div>
        </div>
    )
}

export default Currency