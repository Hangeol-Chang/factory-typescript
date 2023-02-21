import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <div className={`m-2 rounded bg-blue-200`}>
                main page
            </div>
        </>
    )
}
