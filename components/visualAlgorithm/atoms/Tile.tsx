import { useEffect, useState } from "react"

type TileProps = {
    state : number,
    size : number
}

// key를 number타입으로 국한하기 위해 필요.
type tileStyleType = {
    [key : number] : {
        name : string,
        bgColor : string,
        color : string,    
    }
}

const tileStyle: tileStyleType = {
    0 : {
        name : 'empty',
        bgColor : '#FFFFFF',
        color : '#042940'
    },
    1 : {
        name : 'wall',
        bgColor : '#042940', // 남색
        color : '#CCCCCC',
    },
    2 : {
        name : 'visited',
        bgColor : '#D6D58E', // 탁한 살구색
        color : '#042940'
    },
    3 : {
        name : 'now',
        bgColor : '#DBF227', // 연두?
        color : '#042940'
        
    }
}

export default function Tile({state, size} : TileProps) {
    const [tileState, setTileState] = useState(tileStyle[state]);
    useEffect(() => {
        setTileState(tileStyle[state]);
    }, [state])

    return (
        <div className={`text-xs`}
            style={{
                width : size,
                height : size,

                // tailwindcss에 가변스타일 제대로 적용 안돼서, 여기서 처리함.
                backgroundColor : tileState.bgColor,
                color : tileState.color,
            }}
        >
        </div>
    )
}