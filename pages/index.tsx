import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { relativePrefixState } from '@/states/states'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const relativePrefix = useRecoilValue(relativePrefixState);

    return (
        <>
            <div 
                className={`
                    m-2 rounded flex-col flex bg-blue-200
                    `}>
                main page

                <Link 
                    href={`${relativePrefix}/cardground`}
                    className={` m-2 bg-blue-100 `}
                >
                    cardground
                </Link>
                <Link href={`${relativePrefix}/visualAlgorithm`}
                    className={` m-2 bg-blue-100`}
                >
                    visualAlgorithm
                </Link>
                <Link href={`${relativePrefix}/Ide`}
                    className={` m-2 bg-blue-100`}
                >
                    IDE
                </Link>
                <Link href={`${relativePrefix}/compass`}
                    className={` m-2 bg-blue-100`}
                >
                    compass test
                </Link>
            </div>
        </>
    )
}
