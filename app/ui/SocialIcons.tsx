import React from 'react'
import ButtonSocial from './ButtonSocial'
import GithubSVG from './svg/button/GithubSVG'
import YouTubeSVG from './svg/button/YouTubeSVG'
import TwitterSVG from './svg/button/TwitterSVG'
import LinkedInSVG from './svg/button/LinkedInSVG'
import Link from 'next/link'

const SocialIcons = () => {
  return (
    <div className='absolute top-0 right-0 pt-5 flex flex-row z-[10000000000000000]'>
      <Link href='https://github.com/evokelabs' target='_blank'>
        <ButtonSocial SVGIcon={<GithubSVG />} />
      </Link>
      <Link href='https://www.youtube.com/evokelabs' target='_blank'>
        <ButtonSocial SVGIcon={<YouTubeSVG />} />
      </Link>
      <Link href='https://twitter.com/evokelabs' target='_blank'>
        <ButtonSocial SVGIcon={<TwitterSVG />} />
      </Link>
      <Link href='https://www.linkedin.com/in/adrianpikios' target='_blank'>
        <ButtonSocial SVGIcon={<LinkedInSVG />} />
      </Link>
    </div>
  )
}

export default SocialIcons
