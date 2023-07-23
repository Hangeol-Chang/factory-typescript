import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import { extend } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'


extend({ TextGeometry })

export default function Compass() {
    // 24 사이즈 배열
    const [comps, setComps] = useState(['N', '|', '|', '|', '|', '|', 'E', '|', '|', '|', '|', '|', 'S', '|', '|', '|', '|', '|', 'W', '|', '|', '|', '|', '|' ]);
    const [angle, setAngle] = useState(0);

    /*
        각각을 배치해놓고, 각각에 해당하는 헤딩값을 key로 넣어줌.
    */

    function part(val:string, idx:number) {
        const angleLoc = ( angle % 360 ) / 15;
        
        const fontProps = {
            fontSize : 1,
            letterSpacing : -0.1,
            'material-toneMapped' : false,
        }

        let loc = idx - angleLoc;
        if(loc > 12) loc -= 24;
        else if (loc < -12) loc += 24;

        /*
        loc은 -12 ~ 12 의 값을 가짐.
        이는 360 도를 전부 표현한 값.
        
        범위별 
            -6 ~ 6 | 전체 표시범위 180도            
            -3 ~ 3 | 90도, 기준범위. > x좌표 -6 ~ 6으로 두배 찢음.
            -6 ~ -3, 3 ~ 6 | 외곽. 천천히 작아지게 만들 것.
        */
        let realLoc = loc;
        if(Math.abs(loc) <= 3) { realLoc *= 2; }
        else {
            // 3 ~ 6범위,
            if(loc > 0) realLoc = (loc - 2) ** 0.5 + 5
            else realLoc = -1 * (-1 * loc - 2) ** 0.5 - 5;
        }
       
        return (
            Math.abs(loc) <= 6 ?
                <group key={idx * 2}>
                    <Text
                        {...fontProps}
                        position={[realLoc * 2, 0, 2]}
                    >{val}</Text>
                </group>
            : <></>
            // <mesh>
            //     <boxGeometry args={[0.1, 3, 0.1]} />
            //     <Text children={undefined}/>
            // </mesh>
        )
    }
    

    const fontProps = {
        fontSize : 1,
        letterSpacing : -0.1,
        'material-toneMapped' : false,
    }

    return (
        <>
            compass
            <hr></hr>
            <div className={`flex`}>
                <div className={`m-2 w-[50px]`}>{angle}</div>
                <input className={`w-[1000px]`} type='range' step={0.1} min={0} max={720} value={angle} onChange={(e) => setAngle(Number(e.target.value))}/>

            </div>
            <Canvas
                style={{
                    backgroundColor : '#aaaaaa'
                }}
            >
                <group>
                    <Text {...fontProps} position={[30,-3, 0]} >RE</Text>
                    <Text {...fontProps} position={[-30,-3, 0]} >LE</Text>
                    <Text {...fontProps} position={[0,2,1]} color={'blue'} >V</Text>
                </group>
                <group>
                </group>

                {
                    comps.map((val, idx) => part(val, idx))
                }

            </Canvas>
        </>
    )
}