import {useState} from "react";

export const GameBoard = () => {
    const [dice, setDice] = useState({number: "one", rotateRight: false, isRolling: false});
    const diceArray = ["one", "two", "three", "four", "five", "six"];
    const rollDice = () => {
        setDice({number: dice.number, rotateRight: !dice.rotateRight, isRolling: true})
        setTimeout(() => {
            const randomRoll = diceArray[Math.floor(Math.random() * diceArray.length)];
            setDice({number: randomRoll, rotateRight: !dice.rotateRight, isRolling: false})
        }, 1000)
    }
    return(
        <>
            <div className="game-board">
                <div className="player1-box">
                    {Array.from({length: 4}).map(() => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
                <div className="top-box">
                    {Array.from({length: 18}).map(() => {
                        return <div></div>
                    })}
                </div>
                <div className="player2-box">
                    {Array.from({length: 4}).map(() => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
                <div className="left-box">
                    {Array.from({length: 18}).map(() => {
                        return <div></div>
                    })}
                </div>
                <div className="dice-box">
                    <div className={`dice fa fa-dice-${dice.number} ${dice.rotateRight && "rotate-right"} ${dice.isRolling && "disabled-dice"}`} onClick={rollDice}></div>
                </div>
                <div className="right-box">
                    {Array.from({length: 18}).map(() => {
                        return <div></div>
                    })}
                </div>
                <div className="player3-box">
                    {Array.from({length: 4}).map(() => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
                <div className="bottom-box">
                    {Array.from({length: 18}).map(() => {
                        return <div></div>
                    })}
                </div>
                <div className="player4-box">
                    {Array.from({length: 4}).map(() => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
            </div>
        </>
    )
}