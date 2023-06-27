import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Youtube Player</title>
      </Head>
      <div>
        <h1>Youtube Player</h1>
      </div>
    </div>
    )
}
