import type { Metadata } from 'next'
import Evokelabs3D from '@/app/3d/EvokeLabs3D'

import './../app/globals.css'
import Head from 'next/head'

import { useRouter } from 'next/router'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EVOKE LABS | Creative Technologist',
  description: 'Welcome to Evoke Labs: the portfolio and business hub of Adrian Pikios, a Sydney-based freelance creative technologist.'
}

export default function RootLayout() {
  const router = useRouter()

  const h1Styles = `
  h1 {
    color: red;
    font-size: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`

  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={String(metadata.description)} />
      </Head>
      <Evokelabs3D />
      <div className='red absolute top-0 left-0 px-4 space-x-4 text-red-500'>
        <Link href='/services'>CORPO GUIDE</Link>
        <Link href='/portfolio'>PAST GIGS</Link>
        <Link href='/history'>BACKSTORY</Link>
        <Link href='/resume'>DOSSIER</Link>
        <Link href='/joi'>JOI SPECIAL</Link>
        <Link href='/availabilities'>FIX A BOOKING</Link>
      </div>
      {router.pathname === '/services' && (
        <>
          <h1>services</h1>
          <style jsx>{h1Styles}</style>
        </>
      )}
      {router.pathname === '/portfolio' && (
        <>
          <h1>portfolio</h1>
          <style jsx>{h1Styles}</style>
        </>
      )}
      {router.pathname === '/history' && (
        <>
          <h1>history</h1>
          <style jsx>{h1Styles}</style>
        </>
      )}
      {router.pathname === '/resume' && (
        <>
          <h1>resume</h1>
          <style jsx>{h1Styles}</style>
        </>
      )}
      {router.pathname === '/joi' && (
        <>
          <h1>joi</h1>
          <style jsx>{h1Styles}</style>
        </>
      )}
      {router.pathname === '/availabilities' && (
        <>
          <h1>availabilities</h1>
          <style jsx>{h1Styles}</style>
        </>
      )}
    </>
  )
}
