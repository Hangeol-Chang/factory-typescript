import { codeState } from "@/states/visualAlgorithm/states"
import { KeyboardEvent, useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil"
import Button from "../common/Button";

export default function Ide() {
    const [code, setCode] = useRecoilState(codeState);
    const [lineChange, setLineChange] = useState(0);
    // 현재 커서의 line number
    const [nowCursor, setNowCursor] = useState(0);
    const [rows, setRows] = useState([1]);
    const [cursorLine, setCursorLine] = useState(1);
    const [codeSplited, setCodeSplited] = useState<string[]>([]);

    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setCodeSplited(code.split('\n'));

        const lineCount = codeSplited.length
        codeSplited[lineCount-1]
        let lines : number[] = []
        for (let i = 1 ; i <= lineCount; i++) {
            lines.push(i)
        }
        setRows(lines)


    }, [code])

    const handleClickEvent = function() {
        // const ele = e.target;
        if(inputRef.current) {
            let cursorLoc = inputRef.current.selectionStart;
            // codeSplited에서 line별로 저거 저장.
            let charCount = -1;
            let line = 0;
            console.log("cursorLoc", cursorLoc);
            while(charCount < cursorLoc) {
                // console.log(codeSplited[line].length)
                charCount += codeSplited[line++].length + 1;
            }
            setCursorLine(line);
        }
    }

    useEffect(() => {
        console.log(cursorLine);
    }, [cursorLine])

    const handleKeyEvent = function(e : KeyboardEvent) {
        console.log(e.key);
        
        // Tab 엘리멘트 변경 방지
        if(e.key === "Tab") {
            e.preventDefault();
            
            // lineLoc 전까지 더함.
            let loc = 0;
            console.log("line : ", cursorLine);
            for (let i = 0; i < cursorLine - 1; i++ ) {
                loc += codeSplited[i].length + 1;
            }
            console.log(loc)
            setCode(code.substring(0, loc) + '\t' + code.substring(loc));

            // 커서가 마지막으로 움직이는 거 막아야되는데, 잘 안됨.
            if(inputRef.current)
                inputRef.current.selectionEnd = loc;
        }
        else if (e.key === "Enter") {

            // 이거에서 탭 수 계산하면 됨.
            let nowLineString = codeSplited[cursorLine - 1];
            handleClickEvent();
            // Tab 수에 맞게 엔터시 들여쓰기 해주는 코드 작성.
        }
        else if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
            // 이 상태에서 handleClick을 호출할 때, inputRef가 최신화되어있지 않는 이슈가 있음.
            handleClickEvent();
        }
        else {
            
        }
    }
    // 두 개에 동시에 스크롤이 적용되도록 해야함.
    return (
        <div className={`bg-blue-100 flex gap-1 h-full items-start`}>
            <div className={`flex flex-col w-8 text-center bg-green-200 text-gray-400`}>
                {
                    rows.map( v => {
                        return <span key={v} >{ ("00" + v).slice(-2) }</span>
                    })
                }
            </div>
            <textarea value={code} ref={inputRef}
                onChange={(e) => setCode(e.target.value)}
                onClick={(e) => handleClickEvent()}

                onKeyDown={(e) => handleKeyEvent(e)}
                className={
                    `h-full px-2`
                }
                style={{
                    resize : 'none',
                }}
            >
                
            </textarea>
            <Button color="primary" value="run code" className={""} onClick={() => {}}/>
            this is code State
        </div>
    )
}