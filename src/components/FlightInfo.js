import React, { useState } from 'react';
import './FlightInfo.css'
function FlightInfo() {
    const [search,setSearch] = useState({
        startingPoint: '',
        destinationPoint: ''
    });
    const [dates, setDates] = useState({
        DoD: '',
        DoR: ''
    });
    function apiCall(e) {
        e.preventDefault();
        console.log(search,dates)
        // async function retrieveInfo() {
        //     const request = {method: 'GET',
        //         header: {
        //             "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        //             "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        //         }
        //     }
        // }
    }
    function handleChange(e) {
        const val = e.target.value
        if (e.target.type !== 'date'){
            setSearch({
                ...search,
                [e.target.name]: val
            });
        } else {
            setDates({
                ...dates,
                [e.target.name]: val,
            });
        }
    }
    return(
            <div className='location-field'>
                <form className='form-inline' onSubmit={apiCall}>
                    <label htmlFor='startingPoint'> Leaving from: </label>
                    <input type='text'  onChange={handleChange} name='startingPoint'></input>
                    <label htmlFor='destinationPoint'> Going to: </label>
                    <input type='text'  onChange={handleChange} name='destinationPoint'></input>
                    <button type='submit'> View Rates!</button>
                    <div className='date-field'>
                        <label htmlFor='departureDate'>Departing: </label>
                        <input type='date' name='DoD' onChange={handleChange} ></input>
                        <label htmlFor='returnDate'>Returning: </label>
                        <input type='date' name='DoR' onChange={handleChange} ></input>
                    </div>
                </form>
            </div>

    );
}

export default FlightInfo