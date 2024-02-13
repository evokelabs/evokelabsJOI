import LeftFrame from './ButtonMainMenu/LeftFrame'
import MidFrame from './ButtonMainMenu/MidFrame'
import IconSmall from './IconSmall'

const ButtonMainMenu = () => {
  return (
    <div className='relative'>
      <div className='flex items-center flex-row'>
        {/* <div className='absolute inset-0 z-0'> */}
        <LeftFrame />
        {/* </div> */}
        {/* <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'> */}
        <MidFrame />
        {/* </div> */}
      </div>
      <div className='absolute flex items-center flex-row gap-32 top-3.5 left-5'>
        <IconSmall />
        CORPO GUIDE
      </div>
    </div>
  )
}

export default ButtonMainMenu
