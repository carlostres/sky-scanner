import React, {useEffect, useState} from 'react';
import './Header.css'

function Header(props) {
    const request = {method: "GET",
                headers: {
                    "x-rapidapi-key": "172af3e01dmsh36fcbf3c159dd11p1bfc9fjsn1462c8993668",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }
            }
    const [currency, setCurrency] = useState([])

    async function fetchCurrencies(){
        let currencies = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", request)
        currencies = await currencies.json();
         setCurrency(currencies.Currencies)
        }
        
    useEffect(() => {fetchCurrencies()}, [])

    return(
        <div className='total'>
            <div className='boxed-letters'>
                <h1>F</h1> <h1>L</h1> <h1>I</h1> <h1>G</h1> <h1>H</h1> <h1>T</h1> 
                <form className='Currency'>
                    <select onChange={ e => props.updateCurrency(e.target.value)}>
                        <option selected disabled hidden> Select currency: </option>
                        {currency.map(entry => {
                            return( <option value={entry.Code}> {entry.Code} </option>)
                        })}
                    </select>
                </form>
            </div>
            <p>
                <strong>Find your next adventure</strong>
            </p>
        </div>
    );
}

export default Header