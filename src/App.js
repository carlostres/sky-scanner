import React, { useState } from 'react';
import Header from './components/Header';
import logo from './Flight.png';
import FlightInfo from './components/FlightInfo';
import BuildFlightTable from './components/BuildFlightTable';


function App() {
    const [Result, setResult] = useState('')
    function placeInformation(query) {
        setResult(query);
    }
    const [currency, setCurrency] = useState('USD')
    function updateCurrency(selection) {
        setCurrency(selection)
    }
    return (
        <div>
            <Header updateCurrency={updateCurrency} />
            <div className='main-container'>
                <img src={logo} alt="plane taking off" className='image'></img>
                <FlightInfo updateInfo={placeInformation} currency={currency} />
                {Result !== '' ? <BuildFlightTable info={Result} /> : <> </>}
            </div>
        </div>
    );
}
export default App;