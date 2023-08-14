import { atom } from "recoil";

declare global {
    /*
    *** TileType description
        state :
            - hidden
            - open
            - check
            - hoevr

        value :
            - 0 : none(bug State)
            - 1 ~ n : number
            - -1 : mine
    */
   export type TileType = {
        state : string;
        value : number;
   }
}


const mapState = atom<Array<Array<TileType>>> ({
    key : 'mapState',
    default : []
})

const mapSizeState = atom<Array<number>> ({
    key : 'mapSizeState',
    default : [13, 13]
})

export {
    mapState,
    mapSizeState,
}