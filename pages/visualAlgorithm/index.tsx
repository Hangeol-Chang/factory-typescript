import { useEffect, useState } from "react"

export default function visualAlgorithm() {
    const [code, setCode] = useState('');
    const code2 = `
        import js
        from pyodide.ffi import create_proxy, to_js
        
        fruits = [
            {"name": "🍊", "count": 21},
            {"name": "🍇", "count": 13},
            {"name": "🍏", "count": 8},
            {"name": "🍌", "count": 5},
            {"name": "🍐", "count": 3},
            {"name": "🍋", "count": 2},
            {"name": "🍎", "count": 1},
            {"name": "🍉", "count": 1},
        ]

        print(fruits)
        print("뭐임?")
        `
    
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
            className={`
            `}
        >
            <script defer src="https://pyscript.net/latest/pyscript.js"></script>
            
            <div className={`flex gap-2 bg-blue-100`}>
                <textarea value={code} onChange={e => setCode(e.target.value)}></textarea>

                <div
                    dangerouslySetInnerHTML={{
                        __html: `
                        <py-script>
                        ${code2}
                        </py-script>`,
                    }}
                />
            </div>

            <div dangerouslySetInnerHTML={{__html: `<py-terminal />`}} />
        </div>
    )
}   