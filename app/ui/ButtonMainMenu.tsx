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
      <div className='absolute flex items-center flex-row top-3.5  font-orbitron place-content-between w-full pl-5 pr-7'>
        <IconSmall />
        <div className='top-1.5 relative'>CORPO GUIDE</div>
      </div>
    </div>
  )
}

export default ButtonMainMenu
