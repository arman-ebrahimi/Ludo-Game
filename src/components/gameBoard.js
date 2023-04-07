
export const GameBoard = () => {
    return(
        <>
            <div className="game-board">
                <div className="player1-box">
                    {Array.from({length: 4}).map((item, index) => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
                <div className="top-box">
                    {Array.from({length: 18}).map((item, index) => {
                        return <div></div>
                    })}
                </div>
                <div className="player2-box">
                    {Array.from({length: 4}).map((item, index) => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
                <div className="left-box">
                    {Array.from({length: 18}).map((item, index) => {
                        return <div></div>
                    })}
                </div>
                <div className="dice-box"></div>
                <div className="right-box">
                    {Array.from({length: 18}).map((item, index) => {
                        return <div></div>
                    })}
                </div>
                <div className="player3-box">
                    {Array.from({length: 4}).map((item, index) => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
                <div className="bottom-box">
                    {Array.from({length: 18}).map((item, index) => {
                        return <div></div>
                    })}
                </div>
                <div className="player4-box">
                    {Array.from({length: 4}).map((item, index) => {
                        return <div className="hole"><div className="stock"></div></div>
                    })}
                </div>
            </div>
        </>
    )
}