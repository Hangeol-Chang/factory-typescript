import Tile from "@/components/minesweeper/Tile";
import { mapSizeState, mapState } from "@/states/minesweeper/states"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"

export default function MineSweeper() {
    const [map, SetMap] = useRecoilState<Array<Array<TileType>>>(mapState);
    const [mapSize, SetMapSize] = useRecoilState(mapSizeState);
    const [mines, SetMines] = useState<Array<number[]> | null>([]);
    const [mineCount, SetMinsCount] = useState<number>(20);


    const clickTile = function(tile : TileType) {

    }

    const maketMines = function() {
        for(let i = 0; i < mineCount; i++) {

        }
    }

    const makeMap = function() {
        let newmap : Array<Array<TileType>> = [];
        let maprow : Array<TileType> = [];
        const temptile : TileType = {
            state : 0,
            value : 0,
        }   
        for(let i = 0; i < mapSize[1]; i++) {
            maprow.push(temptile);
        }
        for(let i = 0; i < mapSize[0]; i++) newmap.push(maprow);

        // 지뢰 심으면서 지뢰 주변 숫자 늘리기.

        SetMap(newmap);
    }
    // init 초기화
    useEffect(() => {
        maketMines();
        makeMap();
    }, [])

    return (
        <div>
            지뢰찾기 입니다.
            {map.map((row, idx) => (
                <div>
                    {row.map((tileval, idx) => (
                        <Tile 
                            className={``} 
                            tile={tileval}
                            onClick={clickTile}
                            style={'hidden'}
                        ></Tile>
                    ))}
                </div>
            ))}
        </div>
    )
}