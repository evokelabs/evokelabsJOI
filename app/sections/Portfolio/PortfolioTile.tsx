import React from 'react'

interface PortfolioTileProps {
  heading: string
  subHeading: string
  technology: string[]
  desc: string
  video: string
  thumb: string
  link: string
  mainVideo: string
}

const PortfolioTile: React.FC<PortfolioTileProps> = ({ heading, subHeading, technology, thumb, video }) => {
  return (
    <>
      <div className={'h-full relative flex items-end overflow-hidden'}>
        <div className='absolute top-0 w-full h-full'>
          <video className='w-full h-full object-cover' loop autoPlay muted poster={thumb} src={video} />
        </div>
        <div className='relative pl-1 pb-1 '>
          <div>
            <h2 className='uppercase text-teal-blur text-[32px] font-semibold leading-7 px-2 pt-0.5 inline-block bg-opacity-85 bg-black'>
              {heading}
            </h2>
          </div>
          <div>
            <h3 className='uppercase text-red-blur text-[19px] font-medium leading-tight  px-2 pt-0.5 inline-block bg-opacity-85 bg-black '>
              {subHeading}
            </h3>
          </div>
        </div>
      </div>
      <div className='w-fit pt-0.5 pointer-events-none'>
        <ul className=' flex gap-3 text-black uppercase font-semibold text-[16px] mt-4 -ml-2.5 '>
          {technology.map((tech, index) => (
            <li key={index} className='bg-red shadow-red-blur px-2'>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PortfolioTile