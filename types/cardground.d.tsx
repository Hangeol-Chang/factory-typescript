
// 손에 들고 있을 때, 
declare global {
    export class Card {
        id : number;
        img : string;
        type : string;
        

        // declare global 안에서 정의하면 문제생기네?
        // constructor(id: number, img : string, type : string) {
        //     this.id = id;
        //     this.img = img;
        //     this.type = type;
        // }
    }  
    export interface Event {
        x: number;
        y: number;
    }
    // export class ToyCard extends Card {
        
    // }

    // export class MagicCard extends Card {

    // }
}

export {}