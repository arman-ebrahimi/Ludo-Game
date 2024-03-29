import {useEffect, useState} from "react";
import {Entry} from "../components";

export const GameBoard = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [allStocks, setAllStocks] = useState({
        player1: [23, 41, 5, 35],
        player2: [14, 18, 51, 45],
        player3: [46, 29, 12],
        player4: [11, 40, 24]
    })
    const [checkHit, setCheckHit] = useState(false);
    const [moveAllow, setMoveAllow] = useState(true);
    const [dice, setDice] = useState({number: "one", rotateRight: false, isRolling: false});

    const diceArray = ["one", "two", "three", "four", "five", "six"];
    const parkingEntrance = ['', 39, 52, 13, 26];
    const currentLetter = ['', 'Y', 'R', 'B', 'G'];

    const diceNumber = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6
    }
    const manageStocks = {
        1: "player1",
        2: "player2",
        3: "player3",
        4: "player4"
    }

    const rollDice = () => {
        const audio = new Audio("/rolling.mp3");
        audio.play();
        setDice({number: dice.number, rotateRight: !dice.rotateRight, isRolling: true})
        const randomRoll = diceArray[Math.floor(Math.random() * diceArray.length)];
        function function1(value){
            return typeof value === 'number';
        }
        function function2(value){
            return Number(value.substring(1)) + diceNumber[randomRoll] > 5 || allStocks[manageStocks[`${currentPlayer}`]].includes(value.substring(0,1) + (Number(value.substring(1)) + diceNumber[randomRoll]))
        }
        setTimeout(() => {
            setMoveAllow(true)
            audio.pause();
            setDice({number: randomRoll, rotateRight: !dice.rotateRight, isRolling: true})
            if(randomRoll !== "six" && !(allStocks[manageStocks[`${currentPlayer}`]].some(function1)) && allStocks[manageStocks[`${currentPlayer}`]].every(function2)){
                if(currentPlayer === 4){
                    setCurrentPlayer(1)
                    setDice({number: randomRoll, rotateRight: !dice.rotateRight, isRolling: false})
                }
                else {
                    setCurrentPlayer(currentPlayer + 1)
                    setDice({number: randomRoll, rotateRight: !dice.rotateRight, isRolling: false})
                }
                setMoveAllow(false)
            }
        }, 1000)
    }
    const handleClickOnStock = (e) => {
        if(!moveAllow) return
        if(currentPlayer === 1 && dice.number === "six" && e.target.id === "1"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player1: [...allStocks.player1, 41]})
            setDice({...dice, number: "one", isRolling: false})
        }
        else if(currentPlayer === 2 && dice.number === "six" && e.target.id === "2"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player2: [...allStocks.player2, 2]})
            setDice({...dice, number: "one", isRolling: false})
        }
        else if(currentPlayer === 3 && dice.number === "six" && e.target.id === "3"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player3: [...allStocks.player3, 15]})
            setDice({...dice, number: "one", isRolling: false})
        }
        else if(currentPlayer === 4 && dice.number === "six" && e.target.id === "4"){
            e.target.style.display = "none";
            setAllStocks({...allStocks, player4: [...allStocks.player4, 28]})
            setDice({...dice, number: "one", isRolling: false})
        }
    }

    useEffect(() => {
        if(checkHit === true){
            function hitFunction1(j){
                let updatedArray = allStocks.player1;
                updatedArray.splice(j,1);
                setAllStocks({...allStocks, player1: updatedArray})
                const stocks = document.getElementsByClassName("1");
                for(let i=0; i <= 3; i++){
                    if(stocks[i].style.display === "none"){
                        stocks[i].style.display = "flex";
                        return
                    }
                }
            }
            function hitFunction2(j){
                let updatedArray = allStocks.player2;
                updatedArray.splice(j,1);
                setAllStocks({...allStocks, player2: updatedArray})
                const stocks = document.getElementsByClassName("2");
                for(let i=0; i <= 3; i++){
                    if(stocks[i].style.display === "none"){
                        stocks[i].style.display = "flex";
                        return
                    }
                }
            }
            function hitFunction3(j){
                let updatedArray = allStocks.player3;
                updatedArray.splice(j,1);
                setAllStocks({...allStocks, player3: updatedArray})
                const stocks = document.getElementsByClassName("3");
                for(let i=0; i <= 3; i++){
                    if(stocks[i].style.display === "none"){
                        stocks[i].style.display = "flex";
                        return
                    }
                }
            }
            function hitFunction4(j){
                let updatedArray = allStocks.player4;
                updatedArray.splice(j,1);
                setAllStocks({...allStocks, player4: updatedArray})
                const stocks = document.getElementsByClassName("4");
                for(let i=0; i <= 3; i++){
                    if(stocks[i].style.display === "none"){
                        stocks[i].style.display = "flex";
                        return
                    }
                }
            }

            if(currentPlayer === 1){
                for(let i=0; i < allStocks.player1.length; i++){
                    for(let j=0; j < allStocks.player2.length; j++){
                        if(allStocks.player1[i] === allStocks.player2[j]){
                            hitFunction2(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player1.length; i++){
                    for(let j=0; j < allStocks.player3.length; j++){
                        if(allStocks.player1[i] === allStocks.player3[j]){
                            hitFunction3(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player1.length; i++){
                    for(let j=0; j < allStocks.player4.length; j++){
                        if(allStocks.player1[i] === allStocks.player4[j]){
                            hitFunction4(j);
                        }
                    }
                }
            }
            else if(currentPlayer === 2){
                for(let i=0; i < allStocks.player2.length; i++){
                    for(let j=0; j < allStocks.player1.length; j++){
                        if(allStocks.player2[i] === allStocks.player1[j]){
                            hitFunction1(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player2.length; i++){
                    for(let j=0; j < allStocks.player3.length; j++){
                        if(allStocks.player2[i] === allStocks.player3[j]){
                            hitFunction3(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player2.length; i++){
                    for(let j=0; j < allStocks.player4.length; j++){
                        if(allStocks.player2[i] === allStocks.player4[j]){
                            hitFunction4(j);
                        }
                    }
                }
            }
            else if(currentPlayer === 3){
                for(let i=0; i < allStocks.player3.length; i++){
                    for(let j=0; j < allStocks.player1.length; j++){
                        if(allStocks.player3[i] === allStocks.player1[j]){
                            hitFunction1(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player3.length; i++){
                    for(let j=0; j < allStocks.player2.length; j++){
                        if(allStocks.player3[i] === allStocks.player2[j]){
                            hitFunction2(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player3.length; i++){
                    for(let j=0; j < allStocks.player4.length; j++){
                        if(allStocks.player3[i] === allStocks.player4[j]){
                            hitFunction4(j);
                        }
                    }
                }
            }
            else {
                for(let i=0; i < allStocks.player4.length; i++){
                    for(let j=0; j < allStocks.player1.length; j++){
                        if(allStocks.player4[i] === allStocks.player1[j]){
                            hitFunction1(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player4.length; i++){
                    for(let j=0; j < allStocks.player2.length; j++){
                        if(allStocks.player4[i] === allStocks.player2[j]){
                            hitFunction2(j);
                        }
                    }
                }
                for(let i=0; i < allStocks.player4.length; i++){
                    for(let j=0; j < allStocks.player3.length; j++){
                        if(allStocks.player4[i] === allStocks.player3[j]){
                            hitFunction3(j);
                        }
                    }
                }
            }

            if(dice.number !== "six"){
                if(currentPlayer === 4){
                    setCurrentPlayer(1)
                    setDice({...dice, isRolling: false})
                }
                else {
                    setCurrentPlayer(currentPlayer + 1)
                    setDice({...dice, isRolling: false})
                }
            }
            else{
                setDice({...dice, isRolling: false})
            }
            setMoveAllow(false)
        }// eslint-disable-next-line
    }, [checkHit])

    const moveStock = (e, item) => {
        const stockPosition = allStocks[manageStocks[`${currentPlayer}`]].indexOf(item);
        if(stockPosition === -1 || !moveAllow){ //moveAllow===false means you need to roll dice again for new movement!
            return;
        }
        function moveFunction(x){
            let counter = 1;
            let audio;
            const interval = setInterval(() => {
                setCheckHit(false);
                if(counter <= diceNumber[dice.number]){
                    audio = document.createElement('audio');
                    audio.src = "/move.wav";
                    audio.play();
                    let newArray = allStocks[`player${x}`];
                    if(counter === 1 && ((dice.number === "six" && newArray[stockPosition] === parkingEntrance[x]) || newArray.includes(currentLetter[x] + (diceNumber[dice.number] - (parkingEntrance[x] - newArray[stockPosition]))) || (isNaN(newArray[stockPosition]) && (Number(newArray[stockPosition].substring(1)) + diceNumber[dice.number] > 5 || newArray.includes(currentLetter[x] + (Number(newArray[stockPosition].substring(1)) + diceNumber[dice.number])))))){
                        return audio.pause();
                    }
                    else if(newArray[stockPosition] === parkingEntrance[x]){
                        newArray[stockPosition] = currentLetter[x] + 1;
                    }
                    else if(isNaN(newArray[stockPosition])){
                        newArray[stockPosition] = currentLetter[x] + (Number(newArray[stockPosition].substring(1)) + 1);
                    }
                    else{
                        newArray[stockPosition] ++;
                        if(newArray[stockPosition] > 52){
                            newArray[stockPosition] -= 52;
                        }
                    }

                    if(x === 1){
                        setAllStocks({...allStocks, player1: newArray})
                    }
                    else if(x === 2){
                        setAllStocks({...allStocks, player2: newArray})
                    }
                    else if(x === 3){
                        setAllStocks({...allStocks, player3: newArray})
                    }
                    else if(x === 4){
                        setAllStocks({...allStocks, player4: newArray})
                    }
                    counter ++;
                }
                else {
                    clearInterval(interval)
                    setCheckHit(true);
                }
                setTimeout(() => {
                    audio.pause()
                }, 100)
            }, 200)
        }

        if(currentPlayer === 1){
            moveFunction(1);
        }
        else if(currentPlayer === 2){
            moveFunction(2);
        }
        else if(currentPlayer === 3){
            moveFunction(3);
        }
        else{
            moveFunction(4);
        }

    }

    return(
        <>
            <div className="game-board">
                <div className="player1-box" style={{outline: currentPlayer === 1 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item, index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 1 && dice.number === "six" ? "solid black 3px" : "none"}}><div id="1" className="stock 1" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
                <div className="top-box">
                    {[51, 52, 1, 50, "R1", 2, 49, "R2", 3, 48, "R3", 4, 47, "R4", 5, 46, "R5", 6].map((item, index) => {
                        return <div key={index}><Entry number={item} allstocks={allStocks} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="player2-box" style={{outline: currentPlayer === 2 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 2 && dice.number === "six" ? "solid black 3px" : "none"}}><div id="2" className="stock 2" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
                <div className="left-box">
                    {[40, 41, 42, 43, 44, 45, 39, "Y1", "Y2", "Y3", "Y4", "Y5", 38, 37, 36, 35, 34, 33].map((item, index) => {
                        return <div key={index}><Entry number={item} allstocks={allStocks} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="dice-box">
                    <div className={`dice fa fa-dice-${dice.number} ${dice.rotateRight && "rotate-right"} ${dice.isRolling && "disabled-dice"}`} onClick={rollDice}></div>
                </div>
                <div className="right-box">
                    {[7, 8, 9, 10, 11, 12, "B5", "B4", "B3", "B2", "B1", 13, 19, 18, 17, 16, 15, 14].map((item, index) => {
                        return <div key={index}><Entry number={item} allstocks={allStocks} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="player4-box" style={{outline: currentPlayer === 4 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 4 && dice.number === "six" ? "solid black 3px" : "none"}}><div id="4" className="stock 4" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
                <div className="bottom-box">
                    {[32, "G5", 20, 31, "G4", 21, 30, "G3", 22, 29, "G2", 23, 28, "G1", 24, 27, 26, 25].map((item, index) => {
                        return <div key={index}><Entry number={item} allstocks={allStocks} className="entry-stock" onClick={(e) => moveStock(e, item)}></Entry>{item}</div>
                    })}
                </div>
                <div className="player3-box" style={{outline: currentPlayer === 3 ? "solid black 4px" : "none"}}>
                    {Array.from({length: 4}).map((item,index) => {
                        return <button key={index} className="hole" style={{border: currentPlayer === 3 && dice.number === "six" ? "solid black 3px" : "none"}}><div id="3" className="stock 3" onClick={handleClickOnStock}></div></button>
                    })}
                </div>
            </div>
        </>
    )
}