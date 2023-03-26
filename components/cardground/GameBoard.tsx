import { boardSizeState, boardState } from "@/states/cardground/states";
import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import GameTile from "./atom/GameTile";

export default function GameBoard() {
    // a행 b열을 나타냄.
    const boardsize = useRecoilValue(boardSizeState);
    const [board, setBoard] = useRecoilState(boardState);

    const MainBoard = () => {
        const row = boardsize[0];
        const col = boardsize[1];

        // 궁극적으로는 얘가 boardSize를 보고 만들어 return하는 형태가 되어야 함.
        
        return (
            <>
                {
                    board.map( col => (
                        <div className="flex m-2 gap-2">
                            {
                                col.map(val => (<GameTile />))
                            }
                        </div>
                    ))        
                }
            </>
        )
    }
    
    return (
        <div>
            <MainBoard />
        </div>
    )
}   