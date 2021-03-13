import React, {useState} from 'react';

function BuildFlightTable(props) {
  function whatShow(props){
    
  }
  return (
    <div className='tableOfFlights'>
      <table>
        <thead>
          <tr>
            <th> Airline Name</th>
            <th> Flight Price</th>
            <th> Direct Flight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td> {props.info.Carriers[0].Name} </td>
          <td> { '$' + props.info.Quotes[0].MinPrice}</td>
          <td>{props.info.Quotes[0].Direct.toString() === 'true' ? "Yes" : "No"}</td>
          </tr>
          {/* {props.map(entry => {
            return(<tr>
              <th>{entry.Carriers[0].Name}</th>
              <th>{entry.Quotes[0].MinPrice}</th>
              <th>{entry.Quotes[0].Direct}</th>
            </tr>)
          })} */}
        </tbody>
      {/* h2> {props.info.Carriers[0].Name} </h2> */}
      </table>
    </div>
  );
  }

export default BuildFlightTable;
