import ButtonDefault from '../ButtonDefault'
import HR from '../HR'
import IconSmall from '../IconSmall'

const ContentHead = () => {
  return (
    <>
      <div className='flex flex-row items-center gap-1 '>
        <IconSmall />
        <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none '>RESUME</h2>
        <div className='relative ml-auto left-4'>
          <ButtonDefault />
        </div>
      </div>
      <HR />
    </>
  )
}

export default ContentHead
