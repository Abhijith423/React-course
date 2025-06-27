import React from "react";

function Message(){
    const handleClick = () => {
        alert("Button clicked!");
    }
    return(
        <button onClick={handleClick}>click here</button>
    )
}
export default Message
