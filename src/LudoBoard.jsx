import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    let UpdateBlue = ()=>{
        setMoves( (prevMoves)=>{
            return {...prevMoves,blue:moves.blue+1};
        })
    }
    let UpdateRed = ()=>{
        setMoves( (prevMoves)=>{
            return {...prevMoves,red:moves.red+1};
        })
    }

    let UpdateGreen = ()=>{
        setMoves( (prevMoves)=>{
            return {...prevMoves,green:moves.green+1};
        })
    }

    let updateYellow = ()=>{
        setMoves( (prevMoves)=>{
            return {...prevMoves,yellow:moves.yellow+1};
        })
    }
    return(
        <div>
            <p>Game Begins</p>
            <div>
                <p>Blue Moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={UpdateBlue} > +1</button>
                <p>Red Moves= {moves.red} </p>
                <button style={{backgroundColor:"red"}} onClick={UpdateRed}> +1</button>
                <p>Green Moves= {moves.green} </p>
                <button style={{backgroundColor:"green"}} onClick={UpdateGreen} > +1</button>
                <p>Yellow Moves= {moves.yellow} </p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow} > +1</button>
            </div>
        </div>
    )
}