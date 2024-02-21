import HR from '../ui/HR'
import PanelContent from '../ui/PanelContent'
import IconSmall from '../ui/IconSmall'
import VideoFrame from '../ui/VideoFrame'

const ContentHead = () => {
  return (
    <>
      <div className='flex flex-row my-1 gap-6'>
        <div className='w-[70px]'>
          <IconSmall />
        </div>
        <div className='flex flex-col pr-4'>
          <h2 className='text-teal-blur font-semibold leading-tight text-[1.55rem] '>INTRODUCING JOI: A DIGITAL LOVE STORY</h2>
          <p className='text-[1.4rem] text-red-blur leading-5 font-medium'>
            AN EVOKE LABS ORIGINAL SHORT USING THE LATEST IN 3D ANIMATION, 2D MOTION, TRADITIONAL FILM TECHNIQUES, ARTIFICIAL INTELLIGENCE,
            VR / AR AND MACHINIMA TO BRING JOI TO LIFE
          </p>
        </div>
      </div>
      <HR />
    </>
  )
}

const JOISpecial = () => {
  return (
    <PanelContent headerTitle='JOI Special' contentHead={<ContentHead />}>
      <VideoFrame videoURL='./videos/JOI-Introduction.mp4' />
    </PanelContent>
  )
}

export default JOISpecial
