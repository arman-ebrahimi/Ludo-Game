import {useState} from "react";

export const StartPage = () => {
    const [state, setState] = useState(true)
    const handleClick = () => {
        setState(false)
    }
    return(
        <div className="start-page" style={{display: state ? "flex" : "none"}}>
            <h1>Choose the number of members</h1>
            <div className="start-buttons">
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button onClick={handleClick}>4</button>
            </div>
        </div>
    )
}