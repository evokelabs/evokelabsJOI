import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'

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
      <div className='w-full bg-red-dark h-full border-2-red mt-3 p-2'>
        <video className='w-full h-full' autoPlay controls src='./videos/JOI-Introduction.mp4' />
      </div>
    </PanelBackground>
  )
}

export default JOISpecial
