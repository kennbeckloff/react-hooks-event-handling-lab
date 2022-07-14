// Code Keypad Component Here
import React from 'react';

function Keypad(){
    function handleChange(event) {
      console.log(`${event.target.placeholder}`);
    }
    return(
    <div>
      <input 
      type="password"
      placeholder="Entering password..."
      onChange={handleChange}
      />
    </div>
    );
  }
  
  export default Keypad;