import { useState } from "react"

const mat = [
    [null , "X" , null],
    [null , null , null],
    [null , null , "O"]
]


export default function GameBoard({onSelectSquare , activePlayerSymbol}){
    const [gameBoard , setGameBoard] = useState(mat);

    function handleSelectSquare(row , col){
        setGameBoard((prevBoard) => {
            // deep copy here refernce will not be the same
            const updatedBoard = [...prevBoard.map(innerVal => [...innerVal])];
            updatedBoard[row][col] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return(
        <ol id="game-board">
            { gameBoard.map((row , i) => (
                <li key = {i}>               
                <ol>
                    { row.map((symbol , j)=>(
                        <li key ={j}>
                            <button onClick={()=> (handleSelectSquare(i , j))}>{symbol}</button>
                        </li>
                    ))}
                </ol>
                </li>
 
            ))}
        </ol>
    )
}