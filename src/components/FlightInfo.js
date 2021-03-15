import React, { useState } from 'react';
import './FlightInfo.css';

function FlightInfo(props) {
    const [search, setSearch] = useState({ startingPoint: '', destinationPoint: '' });
    const [dates, setDates] = useState({ DoD: 'anytime', DoR: 'anytime' });
    const [airports, setAirports] = useState([]);
    const [showAirports, setShowAirports] = useState(false);

    const request = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "172af3e01dmsh36fcbf3c159dd11p1bfc9fjsn1462c8993668",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        async function retrieveInfo() {
            let response = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/' + props.currency + '/en-US/'
                + search.startingPoint + '/' + search.destinationPoint + '/' + dates.DoD + '?inboundpartialdate=' + dates.DoR, request);
            response = await response.json();
            props.updateInfo(response) //passes response of flight data to App function to be used in BuildFlightTable as table entries
        }
        if (search.startingPoint !== '' && search.destinationPoint !== '') {
            retrieveInfo(); // built in check to only look up flight data if required fields are not blank
        }
        setSearch({ startingPoint: '', destinationPoint: '' })
        setDates({ DoD: '', DoR: '' }) // clear form inputs after submit
    }
    function handleChange(e) {
        const val = e.target.value
        if (e.target.type !== 'date') { //receives changes for both 
            setSearch({
                ...search,
                [e.target.name]: val
            });
        } else {
            setDates(
                { ...dates, [e.target.name]: val }
            );
        }
    }
    function createTable() {
        let query = prompt("Enter name of desired location")
        async function getPlaces() {
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({ query: query }), request)
            response = await response.json()
            setAirports(response.Places)
            setShowAirports(true)
        }
        getPlaces()
    }
    function fillIn(Id) {
        console.log(Id)
        if ((search.startingPoint === '' && search.destinationPoint === '') || (search.startingPoint === '')) {
            setSearch({ ...search, ['startingPoint']: Id})
        } else if (search.destinationPoint === '') {
            setSearch({...search, ['destinationPoint']: Id})
        }
        setShowAirports(false)
    }

    return (
        <div className='location-field'>
            <p>
                Instructions: If you know the airport code for where you want to depart from and arrive to, input them below.
                If not, click <a onClick={createTable}> here </a> to view airport locations
            </p>
            <form className='form-inline' onSubmit={handleSubmit}>
                <label htmlFor='startingPoint' value={search.startingPoint}> Leaving from: </label>
                <input type='text' onChange={handleChange} name='startingPoint' value={search.startingPoint}></input>
                <label htmlFor='destinationPoint'> Going to: </label>
                <input type='text' onChange={handleChange} name='destinationPoint' value={search.destinationPoint}></input>
                <div className='date-field'>
                    <label htmlFor='departureDate'>Departing: </label>
                    <input type='date' name='DoD' onChange={handleChange} value={dates.DoD}></input>
                    <label htmlFor='returnDate'>Returning: </label>
                    <input type='date' name='DoR' onChange={handleChange} value={dates.DoR} ></input>
                    <button type='submit'> View Rates!</button>
                </div>
            </form>
            {showAirports ? airports.map( entry => { return ( <tr id={entry.PlaceId} onClick={() => fillIn(entry.PlaceId)}>
                <td>{entry.PlaceName}</td>
            </tr>
            )}) : <> </>}
        </div>
    );
}

export default FlightInfo;