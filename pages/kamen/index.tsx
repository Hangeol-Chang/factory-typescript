import Image from "@/components/common/image";
import Background from "@/components/kamen/background";
import Game from "@/components/kamen/game";


export default function Kamen() {
    return (
        <>
            <Background className={`absolute`}/>
            <Game className={`z-10 absolute`} />
            <div style={{
                height : 720
            }}>
            </div>
        </>
    )
}