import { stageState } from "@/states/visualAlgorithm/states";
import { useRecoilValue } from "recoil"
import { useState } from "react";
import Tile from "./atoms/Tile";
import Button from "../common/Button";

export default function VisualView() {
    const [view, setView] = useState('problem');
    const stage = useRecoilValue(stageState);
    const [size, setSize] = useState(20);

    return (
        <div>
            <Button onClick={() => setView('problem')} value={`problem`}/>
            <Button onClick={() => setView('board')} value={`board`}/>

            <div>
                Stage 1
            </div>
            <div>
                Linked with  pro. baekjoon @@@@
            </div>

            <hr />
            
            {
                stage.map.map( row => (
                    <div className={`flex gap-1 m-1`}>
                        {
                            row.map( ele => (
                                <Tile size={size} state={ele} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}