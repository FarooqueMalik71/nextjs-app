
"use client"  // This is a directive specific to Next.js that ensures this component runs on the client side.



// Importing the useState hook from React for managing component state.

import { useState } from "react";

// The default export for the Click component.

export default function Click() {

    // Defining a state variable 'tap' and a function 'settap' to update 'tap'.
    // 'tap' starts with an initial value of 0.
    let [tap, settap] = useState(0);


    // Function to reset 'tap' to 0 when called.
    const clearTap = () => {
        settap(0); // Reset the tap counter to 0.
    };


    // JSX returned from the component, rendering the UI.
    return (
        <div>
            <h1>Click to Earn Coins</h1> {/* Title */}
            <h1>{tap}</h1> {/* Displaying the current value of 'tap' */}



            {/* Button to increment 'tap' when clicked */}
            <button onClick={() => { settap(tap = tap + 1) }}>Increment ^</button>



            {/* Button to call clearTap function to reset the 'tap' */}
            <button onClick={clearTap} className="bt2">Burn Coin</button>
            
        </div>
    );
}

