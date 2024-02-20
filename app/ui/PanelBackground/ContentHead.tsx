import HR from '../HR'

interface ContentHeadProps {
  icon?: React.ReactNode
  heading?: string
  button?: React.ReactNode
  hr?: boolean
}

const ContentHead = ({ icon, heading, button, hr = true }: ContentHeadProps) => {
  return (
    <>
      <div className='mt-1 flex flex-row items-center gap-3 '>
        {icon ? icon : null}
        {heading ? <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none '>{heading}</h2> : null}
        {button ? <div className='relative ml-auto left-4'>{button}</div> : null}
      </div>
      {hr ? <HR /> : <div className='my-2'></div>}
    </>
  )
}

export default ContentHead
