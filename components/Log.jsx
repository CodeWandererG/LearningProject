export default function Log({turns}){

    // when output dynamic list there should always be a key
    return(
        <ol id="log">
            {turns.map((turn , key) => <li key = {`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected {turn.square.row},{turn.square.col}
            </li>)}
        </ol>
    )
}