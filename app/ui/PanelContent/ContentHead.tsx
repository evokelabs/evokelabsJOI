import HR from '../HR'

interface ContentHeadProps {
  icon?: React.ReactNode
  heading?: string
  button?: React.ReactNode
  hr?: boolean
  children?: React.ReactNode
}

const DefaultHeaderContent = ({
  heading,
  button,
  icon,
  hr
}: {
  heading?: string
  button: React.ReactNode
  icon?: React.ReactNode
  hr?: boolean
}) => {
  return (
    <>
      <div className='mt-1 flex flex-row items-center gap-3 '>
        {icon ? icon : null}
        {heading ? <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none uppercase'>{heading}</h2> : null}
        {button ? <div className='relative ml-auto uppercase'>{button}</div> : null}
      </div>
      {hr ? <HR /> : <div className='my-2'></div>}
    </>
  )
}

const ContentHead = ({ icon, heading, button, hr = true, children }: ContentHeadProps) => {
  return <>{children ? children : <DefaultHeaderContent heading={heading} button={button} icon={icon} hr={hr} />}</>
}

export default ContentHead
