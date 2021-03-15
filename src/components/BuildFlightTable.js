import React from 'react';

function BuildFlightTable(props) {
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
  if (props.info.Quotes[0] !== undefined || props.info.Quotes !== []){ 
    return (
      <div className='tableOfFlights'>
        <table id='flight-info'>
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
  } else {
    return (
      <div className='error'>
        <h3> No flight data available, please make sure to choose a currency or try
          different dates. Note: The COVID-19 pandemic could be impacting travel in your area. 
          To learn more about travel restrictions please visit <a href='https://travel.state.gov/content/travel/en/traveladvisories/COVID-19-Country-Specific-Information.html'>
          here.
          </a>
        </h3>
      </div>
    )
  }

  }

export default BuildFlightTable;