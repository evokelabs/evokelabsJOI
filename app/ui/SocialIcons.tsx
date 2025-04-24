import React from 'react'
import ButtonSocial from './ButtonSocial'
import GithubSVG from './svg/button/GithubSVG'
import YouTubeSVG from './svg/button/YouTubeSVG'
import LinkedInSVG from './svg/button/LinkedInSVG'
import Link from 'next/link'
import useSoundControl from '../libs/useSoundControl'
import { SoundAudioLevelControls } from '../sections/data/types'

const SocialIcons = ({ soundAudioLevelControls }: { soundAudioLevelControls: SoundAudioLevelControls }) => {
  const { setUserMutedAll, wasMuted } = useSoundControl(soundAudioLevelControls)

  const handleLinkClick = () => {
    setUserMutedAll(true)
  }

  return (
    <div className='absolute top-0 right-0 pt-3 2xl:pt-5 xl:pr-1 flex flex-row z-[10000000000000000] 2xl:scale-100 lg:scale-[70%] md:scale-65 scale-50 origin-top-right'>
      <Link
        href='https://github.com/evokelabs'
        target='_blank'
        onClick={handleLinkClick}>
        <ButtonSocial SVGIcon={(props) => <GithubSVG {...props} />} />
      </Link>
      <Link
        href='https://www.linkedin.com/in/adrianpikios'
        target='_blank'
        onClick={handleLinkClick}>
        <ButtonSocial SVGIcon={(props) => <LinkedInSVG {...props} />} />
      </Link>
      <Link
        href='https://www.youtube.com/evokelabs'
        target='_blank'
        onClick={handleLinkClick}>
        <ButtonSocial SVGIcon={(props) => <YouTubeSVG {...props} />} />
      </Link>
    </div>
  )
}

export default SocialIcons
