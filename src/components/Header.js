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
    const [countries, setCountries] = useState([])

    async function fetchCurrencies(){
        let currencies = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", request)
        currencies = await currencies.json();
         setCurrency(currencies.Currencies)
        }
    async function fetchCountries(){
        let countries = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US", request)
        countries = await countries.json();
        setCountries(countries.Countries)
    }
    useEffect(() => {fetchCurrencies()}, [])
    useEffect(() => {fetchCountries()}, [])

    return(
        <div className='total'>
            <div className='boxed-letters'>
                <h1>F</h1> <h1>L</h1> <h1>I</h1> <h1>G</h1> <h1>H</h1> <h1>T</h1> 
                <form className='CandC'>
                    <label htmlFor="currency"> Choose a currency: </label>
                    <select onChange={ e => props.updateCurrency(e.target.value)}>
                        {currency.map(entry => {
                            return( <option value={entry.Code}> {entry.Code} </option>)
                        })}
                    </select>
                    <div className="currentCountry">
                        <label htmlFor="country"> Choose current country: </label>
                        <select onChange={ e => props.updateCountry(e.target.value)}>
                            {countries.map( entry => {
                                return( <option value={entry.Code}> {entry.Code} </option>)
                            })}
                        </select>
                    </div>
                </form>
            </div>
            <p>
                <strong>Find your next adventure</strong>
            </p>
        </div>
    );
}

export default Header