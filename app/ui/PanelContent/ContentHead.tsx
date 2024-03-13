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
      <div className='mt-1 flex flex-row w-full '>
        <div className='flex flex-row items-center w-fit'>
          {icon ? icon : null}
          {heading ? (
            <div className='relative w-fit block'>
              <h2
                className='font-rajdhani font-semibold text-red-blur text-[1.5rem] 2xl:text-[2.25rem] 
        leading-none uppercase inline w-full'
              >
                {heading}
              </h2>
            </div>
          ) : null}
        </div>
        {button ? <div className='relative sm:ml-auto uppercase block mt-1 ml-auto pr-1'>{button}</div> : null}
      </div>
      {hr ? <HR /> : <div className='my-0 2xl:my-2'></div>}
    </>
  )
}

const ContentHead = ({ icon, heading, button, hr = true, children }: ContentHeadProps) => {
  return <>{children ? children : <DefaultHeaderContent heading={heading} button={button} icon={icon} hr={hr} />}</>
}

export default ContentHead
