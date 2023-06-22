import {useState} from "react";
import styled from "styled-components";
export const GameBoard = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const manageStocks = {
        1: "player1",
        2: "player2",
        3: "player3",
        4: "player4"
    }
    const [allStocks, setAllStocks] = useState({
        player1: [],
        player2: [],
        player3: [],
        player4: []
    })
    const [dice, setDice] = useState({number: "one", rotateRight: false, isRolling: false});
    const diceArray = ["one", "two", "three", "four", "five", "six"];
    const diceNumber = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6
    }
    const Entry = styled.div`
        visibility: ${(props) => allStocks.player1.includes(props.number) || allStocks.player2.includes(props.number) || allStocks.player3.includes(props.number) || allStocks.player4.includes(props.number) ? "visible" : "hidden"};
        background-color: ${(props) => allStocks.player1.includes(props.number) ? "gold" : allStocks.player2.includes(props.number) ? "red" : allStocks.player3.includes(props.number) ? "blue" : "springGreen"};
`
    const rollDice = () => {
        const audio = new Audio("/rolling.mp3");
        audio.play().then();
        setDice({number: dice.number, rotateRight: !dice.rotateRight, isRolling: true})
        const randomRoll = diceArray[Math.floor(Math.random() * diceArray.length)];
        setTimeout(() => {
            setDice({number: randomRoll, rotateRight: !dice.rotateRight, isRolling: false})
        }, 1000)
    }
    const handleClickOnStock = (e) => {
        if(currentPlayer === 1 && dice.number === "six"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player1: [...allStocks.player1, 41]})
            setDice({...dice, number: "one"})
        }
        else if(currentPlayer === 2 && dice.number === "six"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player2: [...allStocks.player1, 2]})
            setDice({...dice, number: "one"})
        }
        else if(currentPlayer === 3 && dice.number === "six"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player3: [...allStocks.player1, 15]})
            setDice({...dice, number: "one"})
        }
        else if(currentPlayer === 4 && dice.number === "six"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player4: [...allStocks.player1, 28]})
            setDice({...dice, number: "one"})
        }
    }
    const moveStock = (e, item) => {
        const stockPosition = allStocks[manageStocks[`${currentPlayer}`]].indexOf(item);
        if(currentPlayer === 1){
            let newArray = allStocks.player1;
            newArray[stockPosition] += diceNumber[dice.number];
            setAllStocks({...allStocks, player1: newArray})
        }
        else if(currentPlayer === 2){
            let newArray = allStocks.player2;
            newArray[stockPosition] += diceNumber[dice.number];
            setAllStocks({...allStocks, player2: newArray})
        }
        else if(currentPlayer === 3){
            let newArray = allStocks.player3;
            newArray[stockPosition] += diceNumber[dice.number];
            setAllStocks({...allStocks, player3: newArray})
        }
        else{
            let newArray = allStocks.player4;
            newArray[stockPosition] += diceNumber[dice.number];
            setAllStocks({...allStocks, player4: newArray})
        }
        if(currentPlayer === 4){
            setCurrentPlayer(1)
        }
        else {
            setCurrentPlayer(currentPlayer + 1)
        }
    }
    return(
        <>
            <div className="game-board">
                <div className="player1-box" style={{outline: currentPlayer === 1 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item, index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 1 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
                <div className="top-box">
                    {[51, 52, 1, 50, "", 2, 49, "", 3, 48, "", 4, 47, "", 5, 46, "", 6].map((item, index) => {
                        return <div key={index}><Entry number={item} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="player2-box" style={{outline: currentPlayer === 2 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 2 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
                <div className="left-box">
                    {[40, 41, 42, 43, 44, 45, 39, "", "", "", "", "", 38, 37, 36, 35, 34, 33].map((item, index) => {
                        return <div key={index}><Entry number={item} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="dice-box">
                    <div className={`dice fa fa-dice-${dice.number} ${dice.rotateRight && "rotate-right"} ${dice.isRolling && "disabled-dice"}`} onClick={rollDice}></div>
                </div>
                <div className="right-box">
                    {[7, 8, 9, 10, 11, 12, "", "", "", "", "", 13, 19, 18, 17, 16, 15, 14].map((item, index) => {
                        return <div key={index}><Entry number={item} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="player4-box" style={{outline: currentPlayer === 4 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 4 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
                <div className="bottom-box">
                    {[32, "", 20, 31, "", 21, 30, "", 22, 29, "", 23, 28, "", 24, 27, 26, 25].map((item, index) => {
                        return <div key={index}><Entry number={item} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="player3-box" style={{outline: currentPlayer === 3 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 3 && dice.number === "six" ? "solid black 3px" : "none"}}><div className="stock" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
            </div>
        </>
    )
}