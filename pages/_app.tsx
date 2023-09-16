import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'


export default function App({ Component, pageProps }: AppProps) {
return (
    <>
        <RecoilRoot>
            <Head>
                <title>Factory</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <div className={'container mx-auto'}>
                <Component {...pageProps} /> 
            </div>
            
            <Footer />
        </RecoilRoot>
    </>
)}