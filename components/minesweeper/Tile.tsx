import { useState } from "react"


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
    'check' : {
        bgColor : '',
        color : '',
    },
    'open' : {
        bgColor : '#EEEEEE',
        color : '',
    },
    'success-outline' : {
        bgColor : '',
        color : '',
    }
}


export default function Tile(
    props : { 
        className : string, 
        tile : TileType, 
        onClick : (tile : TileType) => void,
        style : string
    }) {
    const { className, tile, onClick, style } = props;
    const [btStyle, SetBtStyle] = useState(ButtonStyles[style != null ? style : 'primary']);


    return (
        <button
            className={`
                w-20
                h-20
                m-1
                
                ${className}
            `}
            style={{
                backgroundColor : btStyle.bgColor,
            }}
            onClick={() => onClick(tile)}
        >
            {tile.value}
        </button>
    )
}