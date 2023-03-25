import { atom } from "recoil";

const boardSizeState = atom<[number, number]>({
    key : 'mapsizeState',
    default : [6, 6]
})

export {
    boardSizeState,
}