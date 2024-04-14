import { useState } from "react"

const mat = [
    [null , null , null],
    [null , null , null],
    [null , null , null]
]


export default function GameBoard({onSelectSquare , turns}){
    let gameBoard = mat;

    for(const turn of turns){
        const {  square , player} = turn;
        const {row , col} = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard , setGameBoard] = useState(mat);

    // function handleSelectSquare(row , col){
    //     setGameBoard((prevBoard) => {
    //         // deep copy here refernce will not be the same
    //         const updatedBoard = [...prevBoard.map(innerVal => [...innerVal])];
    //         updatedBoard[row][col] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            { gameBoard.map((row , i) => (
                <li key = {i}>               
                <ol>
                    { row.map((symbol , j)=>(
                        <li key ={j}>
                            <button onClick={()=> (onSelectSquare(i , j))}>{symbol}</button>
                        </li>
                    ))}
                </ol>
                </li>
 
            ))}
        </ol>
    )


    // sub optimal Code  ---> 



    // const [gameBoard , setGameBoard] = useState(mat);

    // function handleSelectSquare(row , col){
    //     setGameBoard((prevBoard) => {
    //         // deep copy here refernce will not be the same
    //         const updatedBoard = [...prevBoard.map(innerVal => [...innerVal])];
    //         updatedBoard[row][col] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    // return(
    //     <ol id="game-board">
    //         { gameBoard.map((row , i) => (
    //             <li key = {i}>               
    //             <ol>
    //                 { row.map((symbol , j)=>(
    //                     <li key ={j}>
    //                         <button onClick={()=> (handleSelectSquare(i , j))}>{symbol}</button>
    //                     </li>
    //                 ))}
    //             </ol>
    //             </li>
 
    //         ))}
    //     </ol>
    // )
}