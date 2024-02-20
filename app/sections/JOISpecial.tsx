import HR from '../ui/HR'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'
import VideoFrame from '../ui/VideoFrame'

const JOISpecial = () => {
  return (
    <PanelBackground heading='JOI Special'>
      <div className='flex flex-row my-1 gap-6'>
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
      <HR />
      <VideoFrame videoURL='./videos/JOI-Introduction.mp4' />
    </PanelBackground>
  )
}

export default JOISpecial
