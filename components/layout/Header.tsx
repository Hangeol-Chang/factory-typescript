
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil"
import { prefixState, relativePrefixState } from '../../states/states';

export default function Header() {
    const prefix = useRecoilValue<string>(prefixState);
    const relativePrefix = useRecoilValue<string>(relativePrefixState);

    return (
        <header className="shadow-md mb-2">
            <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
                <Link href={`${relativePrefix}`}>
                    <div className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
                        <Image alt="logo" src={`${prefix}/icon.png`}  width="64" height="64" className="w-8 h-8 -mr-1" />
                        <span className="ml-3 text-xl text-indigo-500">
                            FACTORY
                        </span>
                    </div>
                </Link>
                
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