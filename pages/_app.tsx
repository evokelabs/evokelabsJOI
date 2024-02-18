import Head from 'next/head'
import type { Metadata } from 'next'
import Evokelabs3D from '@/app/3d/EvokeLabs3D'

import '@/app/globals.css'

import { useRouter } from 'next/router'
import Link from 'next/link'
import MainMenu from '@/app/sections/MainMenu'

export const metadata: Metadata = {
  title: 'EVOKE LABS | Creative Technologist',
  description: 'Welcome to Evoke Labs: the portfolio and business hub of Adrian Pikios, a Sydney-based freelance creative technologist.'
}

export default function RootLayout() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={String(metadata.description)} />
      </Head>
      <Evokelabs3D />
      {/* <div className='absolute top-0 left-0 px-4 space-x-4 text-red-blur'>
        <Link href='/services'>CORPO GUIDE</Link>
        <Link href='/portfolio'>PAST GIGS</Link>
        <Link href='/history'>BACKSTORY</Link>
        <Link href='/resume'>DOSSIER</Link>
        <Link href='/joi'>JOI SPECIAL</Link>
        <Link href='/availabilities'>FIX A BOOKING</Link>
      </div> */}
      {/* {router.pathname === '/' && (
        <>
          <h1>home</h1>
        </>
      )}
      {router.pathname === '/services' && (
        <>
          <h1>services</h1>
        </>
      )}
      {router.pathname === '/portfolio' && (
        <>
          <h1>portfolio</h1>
        </>
      )}
      {router.pathname === '/history' && (
        <>
          <h1>history</h1>
        </>
      )}
      {router.pathname === '/resume' && (
        <>
          <h1>resume</h1>
        </>
      )}
      {router.pathname === '/joi' && (
        <>
          <h1>joi</h1>
        </>
      )}
      {router.pathname === '/availabilities' && (
        <>
          <h1>availabilities</h1>
        </>
      )} */}
    </>
  )
}
