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
    return (
        <div>
        <Header />
        <img src={logo} ></img>
        <FlightInfo updateInfo={placeInformation}/>
        {Result !== '' ? <BuildFlightTable info={Result}/> : <> </> }
        </div>
    );
}
export default App;