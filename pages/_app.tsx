import type { Metadata } from 'next'
import Evokelabs3D from '@/app/3d/EvokeLabs3D'

import './../app/globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'EVOKE LABS | Creative Technologist',
  description: 'Welcome to Evoke Labs: the portfolio and business hub of Adrian Pikios, a Sydney-based freelance creative technologist.'
}

export default function RootLayout() {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={String(metadata.description)} />
      </Head>
      <Evokelabs3D />
    </>
  )
}
