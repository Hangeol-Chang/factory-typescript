import { atom } from "recoil";

declare global {
    /*
    *** TileType description
        state :
            - 0 : hidden
            - 1 : open
            - 2 : check

        value :
            - 0 : none(bug State)
            - 1 ~ n : number
            - -1 : mine
    */
   export class TileType {
       state : number;
       value : number;
   }
}


const mapState = atom<Array<Array<TileType>>> ({
    key : 'mapState',
    default : []
})

const mapSizeState = atom<Array<number>> ({
    key : 'mapSizeState',
    default : [10, 10]
})

export {
    mapState,
    mapSizeState,
}