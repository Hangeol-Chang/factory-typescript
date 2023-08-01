import Tile from "@/components/minesweeper/Tile";
import { mapSizeState, mapState } from "@/states/minesweeper/states"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"

export default function MineSweeper() {
    const [map, setMap] = useRecoilState<Array<Array<TileType>>>(mapState);
    const [mapSize, setMapSize] = useRecoilState(mapSizeState);
    const [mines, setMines] = useState<Array<number[]>>([]);
    const [mineCount, setMinsCount] = useState<number>(20);


    const clickTile = function(idf : number) {
        const r = Math.floor(idf / 100);
        const c = Math.floor(idf % 100);

        // console.log(Math.floor(idf/100), idf%100);
        // let copyMap = [...map];
        let copyMap = JSON.parse(JSON.stringify(map));

        const temptile : TileType = {
            state: 'open',
            value: map[r][c].value,
        }
        // console.log(copyMap[r][c]);
        console.log(     copyMap[r][c].state);
        copyMap[r][c].state = 'open';

        // copyMap[r][c];
        setMap(copyMap);
    }

    const maketMines = function() {
        const maxR = mapSize[0] - 1;
        const maxC = mapSize[1] - 1;

        for(let i = 0; i < mineCount; i++) {
            let mine : number[] = [0, 0];
            while(true) {
                mine[0] = Math.floor(Math.random() * maxR);
                mine[1] = Math.floor(Math.random() * maxC);
                
                if(!mines.includes(mine)) break;
            }
        }
    }

    const makeMap = function() {
        let newmap : Array<Array<TileType>> = [];
        let maprow : Array<TileType> = [];
        const temptile : TileType = {
            state : 'hidden',
            value : 0,
        }   
        for(let i = 0; i < mapSize[1]; i++) {
            maprow.push(temptile);
        }
        for(let i = 0; i < mapSize[0]; i++) newmap.push(maprow);

        // 지뢰 심으면서 지뢰 주변 숫자 늘리기.

        setMap(newmap);
    }
    // init 초기화
    useEffect(() => {
        maketMines();
        makeMap();
    }, [])

    return (
        <div
            className={`
                flex flex-col items-center
            `}
        >
            지뢰찾기 입니다.
            {map.map((row, rowidx) => (
                <div
                    key={rowidx * 2}
                    className={`
                        flex
                        items-center
                    `}
                >
                    {row.map((tileval, colidx) => (
                        <Tile
                            key={colidx * 2}
                            className={``}
                            idf={rowidx * 100 + colidx}
                            tile={tileval}
                            onClick={clickTile}
                            size={[40, 40]}
                        ></Tile>
                    ))}
                </div>
            ))}
        </div>
    )
}