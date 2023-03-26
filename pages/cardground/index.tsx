import GameBoard from "@/components/cardground/GameBoard";
import Myhand from "@/components/cardground/Myhand";

export default function cardground() {
    return (
        <div 
            className={`
                grid
                flex
                flex-col

                bg-gray-100
                justify-center
                justify-items-center
            `}
        >
            cardground
            <GameBoard />
            <Myhand />
        </div>
    )
}