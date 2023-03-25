import { boardSizeState } from "@/states/cardground/states";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import GameTile from "./atom/GameTile";

export default function GameBoard() {
    // a행 b열을 나타냄.
    const boardsize = useRecoilValue(boardSizeState);

    const MainBoard = () => {
        const row = boardsize[0];
        const col = boardsize[1];

        // let board: ReactNode = [];
        
        // for (let r = 0; r < row; r++) {
        //     board.push(<div></div>)
        // }

        // return board;
    }
    
    return (
        <div>
            <GameTile />
        </div>
    )
}   