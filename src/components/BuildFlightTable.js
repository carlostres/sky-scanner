import React, {useState} from 'react';

function BuildFlightTable(props) {
  // console.log(props.info)
  function updateProps(props) { // updates props in order to use map function directly with .Quotes section of props
    const Quotes = props.info.Quotes 
    const Carriers = props.info.Carriers
    let carrierName = ''
    for (var quote in Quotes){ // iterates through quotes if theres more than one
      let carrierNum = Quotes[quote].OutboundLeg.CarrierIds[0] //gets carrier id #
      for (var carrier in Carriers) {
        if (Carriers[carrier].CarrierId === carrierNum) { //matches carrier id to name of carrier and updates Quotes
          carrierName = Carriers[carrier].Name
          props.info.Quotes[quote].OutboundLeg.CarrierIds[0] = carrierName
          break
        }
      }
    }
  }
  updateProps(props)
  console.log(props.info)

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
        {props.info.Quotes.map(entry => {
                return (<tr key={entry.QuoteId}>
                    <td>{entry.OutboundLeg.CarrierIds}</td>
                    <td>{entry.MinPrice}</td>
                    <td>{(entry.Direct.toString() === 'true') ? 'Yes': 'No'}</td>
                </tr>)
            })}
          </tbody>
      </table>
    </div>
  );
  }

export default BuildFlightTable;
