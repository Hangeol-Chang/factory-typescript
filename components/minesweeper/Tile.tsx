import { useEffect, useState } from "react"


type ButtonStyle = {
    bgColor : string,
    color : string,
}

type ButtonStylePack = {
    [key : string] : ButtonStyle
}

const ButtonStyles: ButtonStylePack = {
    'hidden' : {
        bgColor : '#AAAAAA',
        color : '',
    },
    'open' : {
        bgColor : '#EEEEEE',
        color : '',
    },
    'check' : {
        bgColor : '',
        color : '',
    },
    'hover' : {
        bgColor : '#444444',
        color : '',
    }
}


export default function Tile(
    props : { 
        className : string,
        idf : number,
        tile : TileType, 
        onClick : (idf : number) => void,
        size : number[]
    }) {
    const { className, idf, tile, onClick, size } = props;

    const [style, setStyle] = useState(tile.state);
    const [btStyle, setBtStyle] = useState(ButtonStyles[style != null ? style : 'primary']);

    const hoverIn = function() {
        setStyle('hover');
    }
    const hoverOut = function() {
        setStyle(tile.state);
    }

    useEffect(() => {
        setBtStyle(ButtonStyles[style])
    }, [style])

    return (
        <button
            className={`
                m-1                
                ${className}
            `}
            style={{
                width : size[0],
                height : size[1],
                backgroundColor : btStyle.bgColor,
            }}
            onClick={() => onClick(idf)}

            onMouseEnter={() => hoverIn()}
            onMouseLeave={() => hoverOut()}
        >
            {
                tile.state == "open" 
                ? <>{tile.value}</>
                : <></>
            }
        </button>
    )
}