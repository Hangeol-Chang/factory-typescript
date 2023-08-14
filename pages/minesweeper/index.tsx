import Tile from "@/components/minesweeper/Tile";
import { mapSizeState, mapState } from "@/states/minesweeper/states"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"

export default function MineSweeper() {
    const [map, setMap] = useRecoilState<Array<Array<TileType>>>(mapState);
    const [mapSize, setMapSize] = useRecoilState(mapSizeState);
    const [mines, setMines] = useState<Array<number[]> | null>([]);
    const [mineCount, setMinsCount] = useState<number>(30);

    const gameOver = function() {
        console.log("game over");
    }

    const clickTile = function(idf : number) {
        const r = Math.floor(idf / 1000);
        const c = Math.floor(idf % 1000);

        const drdc4 : Array<number[]> = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        let copyMap = JSON.parse(JSON.stringify(map));
        
        let que : Array<number[]> = [[r, c]];
        
        // 지뢰 밟음
        if(copyMap[r][c].value == -1) {
            copyMap[r][c].state = 'open';
            gameOver();
        }
        // 게임 진행
        else {
            while(que.length > 0) {
                const now : number[] | undefined = que.shift();
                if(!now) return;
                
                copyMap[now[0]][now[1]].state = 'open';
    
                if(copyMap[now[0]][now[1]].value == 0) {
                    for(const d of drdc4) {
                        const nr = d[0] + now[0];
                        const nc = d[1] + now[1];
                        
                        if(nr < 0 || nr >= mapSize[0] || nc < 0 || nc >= mapSize[1] || copyMap[nr][nc].state == 'open')
                            continue;
                        
                        que.push([nr, nc]);
                    }
                }
            }
        }
        setMap(copyMap);
    }

    const rightClick = function(e : MouseEvent, idf : number) {
        e.preventDefault();

    }

    const maketMines = function() {
        let dupChecker : number[] = [];
        let newmines : Array<number[]> = [];

        for(let i = 0; i < mineCount; i++) {
            let r : number; 
            let c : number;
            
            do {
                r = Math.floor(Math.random() * mapSize[0]);
                c = Math.floor(Math.random() * mapSize[1]);
                
            // 검사
            } while( dupChecker.includes(r * 1000 + c) );
            
            dupChecker.push(r * 1000 + c);
            newmines.push([r, c]);
        }

        setMines(newmines);
        return newmines;
    }

    const makeMap = function(mineInput : Array<number[]>) {
        let newmap : Array<Array<TileType>> = [];
        
        for(let r = 0; r < mapSize[0]; r++) {
            let maprow : Array<TileType> = [];
            for(let c = 0; c < mapSize[1]; c++) {
                const temptile : TileType = {
                    state : 'hidden',
                    value : 0,
                }   
                maprow.push(temptile);
            }
            newmap.push(maprow);
        }
        
        const drdc8 : Array<number[]> = 
            [[-1,  0], [ 1,  0], [ 0, -1], [ 0,  1], 
             [-1, -1], [-1,  1], [ 1, -1], [ 1,  1]];

        // 지뢰 심으면서 지뢰 주변 숫자 늘리기.
        for(const mine of mineInput) {
            newmap[mine[0]][mine[1]].value = -1;
            
            for(const d of drdc8) {
                const nr : number = d[0] + mine[0];
                const nc : number = d[1] + mine[1];
                
                if(newmap[nr] && newmap[nr][nc]) {
                    if( nr < 0 || nr >= mapSize[0] || 
                        nc < 0 || nc >= mapSize[1] || 
                        newmap[nr][nc].value == -1) continue;

                    newmap[nr][nc].value += 1;
                }
            }
        }
        setMap(newmap);
    }
    // init 초기화
    useEffect(() => {
        const tmpMines : Array<number[]> = maketMines();
        makeMap(tmpMines);
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
                            idf={rowidx * 1000 + colidx}
                            tile={tileval}
                            onClick={clickTile}
                            rightClick={rightClick}
                            size={[40, 40]}
                        ></Tile>
                    ))}
                </div>
            ))}
        </div>
    )
}