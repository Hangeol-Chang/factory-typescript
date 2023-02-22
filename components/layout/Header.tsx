
import Image from "next/image";
import { useRecoilState } from "recoil"
import { prefixState } from '../states/states';

export default function Header() {
    const [prefix, setPrefix] = useRecoilState<string>(prefixState);

    const myloader = `/public/icon.png?w=60&q=75`
    
    return (
        <header className="shadow-md mb-2">
            <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
                <div
                    className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0"
                >
                    <Image alt="logo" src='/icon.png'  width="64" height="64" className="w-8 h-8 -mr-1" />
                    <span className="ml-3 text-xl text-indigo-500">FACTORY</span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div className="mr-5 hover:text-gray-400">
                        
                    </div>
                    <div className="mr-5 hover:text-gray-400">
                        m2
                    </div>
                    <div className="mr-5 hover:text-gray-400">
                        m3
                    </div>
                </nav>
                </div>
        </header>
    )
}