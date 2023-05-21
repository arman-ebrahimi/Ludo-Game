import {useState} from "react";

export const GameBoard = () => {
    const [currentPlayer, setCurrentPlayer] = useState({player: {number: 1, moveAllow: false}, entry: 0});
    const [dice, setDice] = useState({number: "one", rotateRight: false, isRolling: false});
    const diceArray = ["one", "two", "three", "four", "five", "six"];
    const diceNumber = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6
    }
    const rollDice = () => {
        const audio = new Audio("/rolling.mp3");
        audio.play().then();
        setCurrentPlayer({...currentPlayer, player: {...currentPlayer.player, moveAllow: true}})
        setDice({number: dice.number, rotateRight: !dice.rotateRight, isRolling: true})
        const randomRoll = diceArray[Math.floor(Math.random() * diceArray.length)];
        setTimeout(() => {
            setDice({number: randomRoll, rotateRight: !dice.rotateRight, isRolling: false})
        }, 1000)
    }
    const handleClickOnStock = (e) => {
        if(currentPlayer.player.number === 1 && dice.number === "six"){
            e.target.style.display = "none";
            setCurrentPlayer({player: {...currentPlayer.player, moveAllow: false}, entry: 41})
            setDice({...dice, number: "one"})
        }
        else if(currentPlayer.player.number === 2 && dice.number === "six"){
            e.target.style.display = "none";
            setCurrentPlayer({player: {...currentPlayer.player, moveAllow: false}, entry: 2})
            setDice({...dice, number: "one"})
        }
        else if(currentPlayer.player.number === 3 && dice.number === "six"){
            e.target.style.display = "none";
            setCurrentPlayer({player: {...currentPlayer.player, moveAllow: false}, entry: 15})
            setDice({...dice, number: "one"})
        }
        else if(currentPlayer.player.number === 4 && dice.number === "six"){
            e.target.style.display = "none";
            setCurrentPlayer({player: {...currentPlayer.player, moveAllow: false}, entry: 28})
            setDice({...dice, number: "one"})
        }
    }
    const moveStock = (e) => {
        if(currentPlayer.player.moveAllow === true){
            setCurrentPlayer({player: {number: currentPlayer.player.number + 1, moveAllow: false}, entry: currentPlayer.entry + diceNumber[dice.number]})
        }
    }
    return(
        <>
            <div className="game-board">
                <div className="player1-box" style={{outline: currentPlayer.player.number === 1 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item, index) => {
                        return <button className="hole" style={{border: currentPlayer.player.number === 1 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}>{index}</div></button>
                    })}
                </div>
                <div className="top-box">
                    {[51, 52, 1, 50, "", 2, 49, "", 3, 48, "", 4, 47, "", 5, 46, "", 6].map((item, index) => {
                        return <div><div className="entry-stock" style={{display: currentPlayer.entry === item ? "block" : "none"}} onClick={moveStock}></div>{item}</div>
                    })}
                </div>
                <div className="player2-box" style={{outline: currentPlayer.player.number === 2 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button className="hole" style={{border: currentPlayer.player.number === 2 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}>{index}</div></button>
                    })}
                </div>
                <div className="left-box">
                    {[40, 41, 42, 43, 44, 45, 39, "", "", "", "", "", 38, 37, 36, 35, 34, 33].map((item, index) => {
                        return <div><div className="entry-stock" style={{display: currentPlayer.entry === item ? "block" : "none"}} onClick={moveStock}></div>{item}</div>
                    })}
                </div>
                <div className="dice-box">
                    <div className={`dice fa fa-dice-${dice.number} ${dice.rotateRight && "rotate-right"} ${dice.isRolling && "disabled-dice"}`} onClick={rollDice}></div>
                </div>
                <div className="right-box">
                    {[7, 8, 9, 10, 11, 12, "", "", "", "", "", 13, 19, 18, 17, 16, 15, 14].map((item, index) => {
                        return <div><div className="entry-stock" style={{display: currentPlayer.entry === item ? "block" : "none"}} onClick={moveStock}></div>{item}</div>
                    })}
                </div>
                <div className="player4-box" style={{outline: currentPlayer.player.number === 4 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button className="hole" style={{border: currentPlayer.player.number === 4 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}>{index}</div></button>
                    })}
                </div>
                <div className="bottom-box">
                    {[32, "", 20, 31, "", 21, 30, "", 22, 29, "", 23, 28, "", 24, 27, 26, 25].map((item, index) => {
                        return <div><div className="entry-stock" style={{display: currentPlayer.entry === item ? "block" : "none"}} onClick={moveStock}></div>{item}</div>
                    })}
                </div>
                <div className="player3-box" style={{outline: currentPlayer.player.number === 3 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button className="hole" style={{border: currentPlayer.player.number === 3 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}>{index}</div></button>
                    })}
                </div>
            </div>
        </>
    )
}