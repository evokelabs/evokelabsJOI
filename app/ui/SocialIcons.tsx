import React from 'react'
import ButtonSocial from './ButtonSocial'
import GithubSVG from './svg/button/GithubSVG'
import YouTubeSVG from './svg/button/YouTubeSVG'
import TwitterSVG from './svg/button/TwitterSVG'
import LinkedInSVG from './svg/button/LinkedInSVG'

const SocialIcons = () => {
  return (
    <div className='absolute top-0 right-0 pt-5  flex flex-row'>
      <ButtonSocial SVGIcon={<GithubSVG />} />
      <ButtonSocial SVGIcon={<YouTubeSVG />} />
      <ButtonSocial SVGIcon={<TwitterSVG />} />
      <ButtonSocial SVGIcon={<LinkedInSVG />} />
    </div>
  )
}

export default SocialIcons
