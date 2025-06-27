import React, { useState } from "react";

function Message(){
    const [count, setCount] = useState(0);   //Increment and Decrement using button in React
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

  
    return(
      <div>
        <h1> This my Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
      </div>
    
    )
}
export default Message
