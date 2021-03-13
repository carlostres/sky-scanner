import React, { useState } from 'react';
import './FlightInfo.css'
function FlightInfo(props) {
    const [search,setSearch] = useState(
        {startingPoint: '', destinationPoint: ''}
    );
    const [dates, setDates] = useState(
        {DoD: 'anytime', DoR: 'anytime'}
    );
    function apiCall(e) {
        e.preventDefault();
        const request = {"method": "GET",
                "headers": {
                    "x-rapidapi-key": "172af3e01dmsh36fcbf3c159dd11p1bfc9fjsn1462c8993668",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }
            }
        async function retrieveInfo() {
            let response = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/'
            + search.startingPoint + '/' + search.destinationPoint + '/' + dates.DoD + '?inboundpartialdate=' + dates.DoR, request);
            response =  await response.json();
            props.updateInfo(response)
            console.log(response)
        }
        if (search.startingPoint !== '' & search.destinationPoint !== ''){
            retrieveInfo(); // built in check to only look up flight data if required fields are not blank
        }
    }
    function handleChange(e) {
        const val = e.target.value
        if (e.target.type !== 'date'){ //changes the value of only
            setSearch({
                ...search,
                [e.target.name]: val
            });
        } else {
            setDates(
                {...dates, [e.target.name]: val}
            );
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

export default FlightInfo;