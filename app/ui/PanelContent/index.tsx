import { useEffect, useRef } from 'react'
import PanelHeader from './PanelHeader'
import { BottomFooter, BottomLeftCornerSVG, TopLeftCornerSVG } from './UIElements'

import gsap from 'gsap'

interface PanelContentProps {
  headerTitle: string
  children: React.ReactNode
  contentHead?: React.ReactNode
}

const Index = ({ headerTitle, children, contentHead }: PanelContentProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { opacity: 0.0 }, { opacity: 1, duration: 1.25, ease: 'expo.out' })
    }
  }, [])

  return (
    <div ref={ref} className='relative mb-2'>
      <div className='relative flex flex-row h-full w-full'>
        <div className='w-auto h-auto grid grid-rows-[min-content,auto,min-content] '>
          <div className='pt-4'>
            <TopLeftCornerSVG />
          </div>
          <div className='w-[0.6875rem] bg-grid-red border-red border-2 border-r-0 border-opacity-60 justify-self-end border-t-0 border-b-0 red'></div>
          <div className='justify-self-end '>
            <BottomLeftCornerSVG />
          </div>
        </div>

        <div className='w-full h-full'>
          <PanelHeader headerTitle={headerTitle} />
          <div className='bg-grid-blue pl-3 pr-0 pt-2.5 border-red border-x-2 border-opacity-60  shadow-red-blur'>
            {contentHead}
            <div className={'min-h-[10rem] max-h-[46rem] 2xl:max-h-[49rem] overflow-y-auto overflow-x-hidden red-scrollbar mr-2 pr-2 '}>
              {children}
            </div>
          </div>
          <BottomFooter />
        </div>
      </div>
    </div>
  )
}

export default Index
