import Head from 'next/head'
import type { Metadata } from 'next'
import Evokelabs3D from '@/app/3d/EvokeLabs3D'

import '@/app/globals.css'

import { useRouter } from 'next/router'

const metadata: Metadata = {
  title: 'EVOKE LABS || Freelance Creative Technologist',
  description: 'Welcome to Evoke Labs: the online hub of Adrian Pikios, a Sydney-based freelance creative technologist.'
}

export default function RootLayout() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={String(metadata.description)} />
        <meta name='keywords' content='Evoke Labs, Creative Technologist, Adrian Pikios, Freelance' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={String(metadata.title)} />
        <meta property='og:description' content={String(metadata.description)} />
        <meta property='og:url' content='https://evokelabs.com/' />
        <meta property='og:image' content='https://evokelabs.com/meta-cover-image.jpg' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={String(metadata.title)} />
        <meta name='twitter:description' content={String(metadata.description)} />
        <meta name='twitter:image' content='https://evokelabs.com/meta-cover-image.jpg' />
        <link rel='canonical' href='https://evokelabs.com/' />
        <link rel='icon' type='image/svg+xml' href='favicon.svg' />
        <link rel='alternate icon' href='favicon.ico' />
      </Head>
      <Evokelabs3D router={router} />
    </>
  )
}
