import React from 'react';
import './Header.css'

function Header() {
    return(
        <div className='total'>
            <div className='boxed-letters'>
                <h1>F</h1> <h1>L</h1> <h1>I</h1> <h1>G</h1> <h1>H</h1> <h1>T</h1> 
                <form className='CandC'>
                    <label htmlFor="currency"> Choose a currency: </label>
                    <select>
                        <option value="USD"> USD</option>
                    </select>
                </form>
            </div>
            <p>
                <strong>Find your next adventure</strong>
            </p>
        </div>
    );
}

export default Header