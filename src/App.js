import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import logo from './Flight.png';
import FlightInfo from './components/FlightInfo';
import BuildFlightTable from './components/BuildFlightTable';


function App()  {
    const [Result, setResult] = useState('')
    function placeInformation(query) {
        setResult(query);
    }
    const [currency, setCurrency] = useState('')
    function updateCurrency(selection){
        setCurrency(selection)
    }
    const [country,  setCountry] = useState('')
    function updateCountry(selection){
        setCountry(selection)
    }
    return (
        <div>
        <Header updateCurrency={updateCurrency} updateCountry={updateCountry} />
        <img src={logo} ></img>
        <FlightInfo updateInfo={placeInformation} currency={currency} country={country}/>
        {Result !== '' ? <BuildFlightTable info={Result}/> : <> </> }
        </div>
    );
}
export default App;