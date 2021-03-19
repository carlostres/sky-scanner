import React, { useEffect, useState } from 'react';
import './Header.css'
import Logo from '../Logo.png'

function Header(props) {
    const request = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "172af3e01dmsh36fcbf3c159dd11p1bfc9fjsn1462c8993668",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    }
    const [currency, setCurrency] = useState([])

    async function fetchCurrencies() {
        let currencies = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", request)
        currencies = await currencies.json();
        setCurrency(currencies.Currencies)
    }

    useEffect(() => { fetchCurrencies() }, [])

    return (
        <div className='total'>
            <div className='slogan'>
                <img src={Logo} className='logo' />
                <strong>Find your next adventure</strong>
            </div>
            <form className='Currency'>
                <select onChange={e => props.updateCurrency(e.target.value)} >
                    <option selected disabled hidden> Select currency: </option>
                    {currency.map(entry => {
                        return (<option value={entry.Code}> {entry.Code} </option>)
                    })}
                </select>
            </form>
        </div>
    );
}

export default Header