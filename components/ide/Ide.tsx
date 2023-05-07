import { codeState } from "@/states/visualAlgorithm/states"
import { KeyboardEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil"

export default function Ide() {
    const [code, setCode] = useRecoilState(codeState);
    const [lineChange, setLineChange] = useState(0);
    // 현재 커서의 line number
    const [nowCursor, setNowCursor] = useState(0);
    const [rows, setRows] = useState([1]);

    useEffect(() => {
        const lineCount = code.split('\n').length
        let lines : number[] = []
        for (let i = 1 ; i <= lineCount; i++) {
            lines.push(i)
        }
        setRows(lines)
    }, [code])


    const handleKeyEvent = function(e : KeyboardEvent) {
        console.log(e.key);
        
        if(e.key === "Tab") {
            e.preventDefault();
            setCode(code + "\t");
        }
        else if (e.key === "Enter") {
            // Tab 수에 맞게 엔터시 들여쓰기 해주는 코드 작성.
        }
    }
    // 두 개에 동시에 스크롤이 적용되도록 해야함.
    return (
        <div className={`bg-blue-100 flex gap-1 h-full`}>
            <div className={`flex flex-col w-8 text-center bg-green-200 text-gray-400`}>
                {
                    rows.map( v => {
                        return <span>{ ("00" + v).slice(-2) }</span>
                    })
                }
            </div>
            <div>
                <textarea value={code} 
                    onChange={(e) => setCode(e.target.value)}

                    onKeyDown={(e) => handleKeyEvent(e)}
                    className={
                        `h-full px-2`
                    }
                    style={{
                        resize : 'none',
                    }}
                >
                    
                </textarea>
                this is code State
            </div>
        </div>
    )
}