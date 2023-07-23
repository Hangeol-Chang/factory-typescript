import Help from "@/components/visualAlgorithm/Help";
import Ide from "@/components/visualAlgorithm/Ide";
import Terminal from "@/components/visualAlgorithm/Terminal";
import VisualView from "@/components/visualAlgorithm/VisualView";
import { useEffect, useState } from "react"

export default function VisualAlgorithm() {
    const [code, setCode] = useState('');
    
    const [testvar, setTestvar] = useState([1, 2, 3]);

    const testFunc = `
        const a = '이게 된다고?';
        console.log(a)
        console.log(testvar)

        setTestvar('이 안에 string이 들어갈 수 있다고?');
    `
    
    useEffect(() => {
        eval(testFunc);
        console.log("이게 된다고 진짜?");
    }, [])

    useEffect(() => {
        console.log(testvar);
    }, [testvar])

    return (
        <div 
            className={`w-full h-full flex`}
        >
            <div className={`flex-col gap-2 w-full`}>
                <div className={`flex gap-1 h-96 w-full mb-2`}>
                    <div className="bg-red-100 p-2 basis-2/3">
                        <VisualView />
                    </div>
                    <div className={`bg-yellow-100 p-2 basis-1/3`}>
                        <Ide />
                    </div>
                </div>

                <div className={`flex gap-1 h-40 w-full`}>
                    <div className="bg-blue-100 p-2 basis-2/3">
                        <Terminal />
                    </div>
                    <div className={`bg-purple-100 p-2 basis-1/3`}>
                        <Help />
                    </div>
                </div>
            </div>
        </div>
    )
}