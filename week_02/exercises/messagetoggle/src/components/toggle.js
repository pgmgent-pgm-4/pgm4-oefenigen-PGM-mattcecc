import React, {useState} from "react";

export default function Toggle({message}) {
    const [showMessage, setShowMessage] = useState(false);
    const handleClickShow = () => {setShowMessage(!showMessage)};
    return (
        <div>
            <button onClick={handleClickShow}>Show/hide</button>
        {showMessage && <p>{message}</p>}
            
        </div>
    );
}