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
      <Evokelabs3D router={router} />
    </>
  )
}
