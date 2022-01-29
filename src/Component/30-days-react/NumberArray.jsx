import React from 'react'
import '../../styles/numbers.css'



function NumberArray() {
    const numbers = [ 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31 ];
    
    return (
        <div className='digit'>
            <h1 style={{textAlign:'center'}}>30 Days of React</h1>
            <h2 style={{textAlign:'center'}}>Number Generator</h2>
           
            <table>
                  <tbody>
                  <tr>
                       {numbers.map(number =>
                          number <= 7 ? <td style={number % 2 === 1 ? {backgroundColor: 'green'}:{backgroundColor: 'yellow'}} >{number}</td> : null
                         )}
                    </tr>

                   <tr >
                       {numbers.map(number =>
                          number > 7 && number <= 15 ? <td style={number % 2 === 1 ? {backgroundColor: 'green'}:{backgroundColor: 'yellow'}}>{number}</td> : null
                         )}
                    </tr>

                   <tr>
                       {numbers.map(number =>
                           number > 15 && number <= 23 ? <td style={number % 2 === 1 ? {backgroundColor: 'green'}:{backgroundColor: 'yellow'}}>{number}</td> : null
                         )}
                    </tr>

                   <tr>
                       {numbers.map(number =>
                          number > 23 ? <td style={number % 2 === 1 ? {backgroundColor: 'green'}:{backgroundColor: 'yellow'}}>{number}</td> : null
                         )}
                    </tr>
                  </tbody>
            </table>
            
        </div>
    )
}
export default NumberArray
