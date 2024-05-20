import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    let UpdateBlue = ()=>{
        setMoves( (prevMoves)=>{
            return {...prevMoves,blue:moves.blue+1};
        })
    }
    return(
        <div>
            <p>Game Begins</p>
            <div>
                <p>Blue Moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={UpdateBlue} > +1</button>
                <p>Red Moves= {moves.red} </p>
                <button style={{backgroundColor:"red"}}> +1</button>
                <p>Green Moves= {moves.green} </p>
                <button style={{backgroundColor:"green"}}> +1</button>
                <p>Yellow Moves= {moves.yellow} </p>
                <button style={{backgroundColor:"yellow"}}> +1</button>
            </div>
        </div>
    )
}