import Head from 'next/head'
import type { Metadata } from 'next'
import Evokelabs3D from '@/app/3d/EvokeLabs3D'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '@/app/globals.css'

const metadata: Metadata = {
  title: 'EVOKE LABS || Evolving Digital Media',
  description: 'Welcome to Evoke Labs: the online hub of Adrian Pikios, Sydney-based Creative Technologist.',
}

export default function RootLayout() {
  const router = useRouter()

  useEffect(() => {
    ReactGA.initialize('G-14ZQLDYXHW')
  }, [])

  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta
          name='description'
          content={String(metadata.description)}
        />
        <meta
          name='keywords'
          content='Evoke Labs, Creative Technologist, Adrian Pikios, Freelance'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          property='og:title'
          content={String(metadata.title)}
        />
        <meta
          property='og:description'
          content={String(metadata.description)}
        />
        <meta
          property='og:url'
          content='https://www.evokelabs.com/'
        />
        <meta
          property='og:image'
          content='https://www.evokelabs.com/meta-cover-image.jpg'
        />
        <meta
          name='twitter:card'
          content='summary'
        />
        <meta
          name='twitter:title'
          content={String(metadata.title)}
        />
        <meta
          name='twitter:description'
          content={String(metadata.description)}
        />
        <meta
          name='twitter:image'
          content='https://www.evokelabs.com/meta-cover-image.jpg'
        />
        <link
          rel='canonical'
          href='https://www.evokelabs.com/'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href='/favicon.svg'
        />
      </Head>
      <Evokelabs3D router={router} />
    </>
  )
}
