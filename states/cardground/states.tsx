import { atom } from "recoil";

class Tile {
    color : string;

    constructor() {
        this.color = "gray"
    }
}



const boardSizeState = atom<[number, number]>({
    key : 'mapsizeState',
    default : [4, 4]
})

const boardState = atom<number[][]> ({
    key : 'boardState',
    default : [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
})

export {
    boardSizeState,
    boardState,
}