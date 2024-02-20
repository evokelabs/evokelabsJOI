import HR from '../HR'

interface ContentHeadProps {
  icon?: React.ReactNode
  heading?: string
  button?: React.ReactNode
}

const ContentHead = ({ icon, heading, button }: ContentHeadProps) => {
  return (
    <>
      <div className='flex flex-row items-center gap-1 '>
        {icon ? icon : null}
        {heading ? <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none '>{heading}</h2> : null}
        {button ? <div className='relative ml-auto left-4'>{button}</div> : null}
      </div>
      <HR />
    </>
  )
}

export default ContentHead
