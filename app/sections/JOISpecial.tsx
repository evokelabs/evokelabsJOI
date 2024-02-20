import { BLACK, RED, RED_BLACK, RED_DARK } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'
import RedCRTBlur from '../ui/libs/RedCRTBlur'

const JOISpecial = () => {
  return (
    <PanelBackground heading='JOI Special'>
      <div className='flex flex-row my-3 gap-4'>
        <div className='w-[70px]'>
          <IconSmall />
        </div>
        <div className='flex flex-col '>
          <h2 className='text-teal-blur font-semibold leading-tight text-[1.375rem]'>INTRODUCING JOI: A DIGITAL LOVE STORY</h2>
          <p className='text-[1.375rem] text-red-blur font-medium'>
            AN EVOKE LABS ORIGINAL SHORT USING THE LATEST IN 3D ANIMATION, 2D MOTION, TRADITIONAL FILM TECHNIQUES, ARTIFICIAL INTELLIGENCE,
            VR / AR AND MACHINIMA TO BRING JOI TO LIFE
          </p>
        </div>
      </div>
      <div className='w-full bg-grid-darkRed h-full border-red border-t-2 border-x-2 border-opacity-60 mt-3 p-2 pb-0 border-b-0 shadow-red-blur'>
        <video className='w-full h-full' controls src='./videos/JOI-Introduction.mp4' />
      </div>

      <div className='h-2 border-b-2 bg-grid-darkRed border-l-2 border-red border-opacity-60 mr-2 relative '>
        <div className='absolute -right-3.5'>
          <svg width='16' height='8' viewBox='0 0 16 8'>
            <RedCRTBlur />
            <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
              <path d='M0 0H10V1L3 8H0V0Z' fill={BLACK} fillOpacity='0.85' />
              <path d='M0 0H10V1L3 8H0V0Z' fill={RED_BLACK} fillOpacity='0.1' />
              <path d='M0 0H10V1L3 8H0V0Z' fill='url(#redTile)' />
              <path d='M10 1L3 8H0V6H2L7.92339 0H10V1Z' fill={RED} fillOpacity={0.6} />
            </g>
          </svg>
        </div>
      </div>
    </PanelBackground>
  )
}

export default JOISpecial
