import { atom } from "recoil";

type StageType = {
    size : number // tile 하나당 사이즈,
    title : string,
    explain : string,
    map : Array<Array<number>>
}

// 결국 json으로 변경해야 함.
const stageState = atom<StageType> ({
    key : 'StageState',
    default : {
        size : 20,
        title : '미로탈출 테스트1',
        explain : '왼쪽 위의 뚫린 곳에서 시작해서, 오른쪽 아래로 내려갑니다.',
        map : [
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],    
    ]
    }
})

const codeState = atom<string> ({
    key : 'codeState',
    default : ''
})

export {
    stageState,
    codeState
}