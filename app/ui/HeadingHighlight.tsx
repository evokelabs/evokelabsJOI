const HeadingFullWidth = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div
      className={`${
        BGColor === '#F75049' ? 'bg-red' : 'bg-teal'
      } font-semibold font-rajdhani text-[2.25rem] text-black w-full block uppercase`}
    >
      <span className={'px-3 block h-[35px] leading-[1.05]'}>{heading}</span>
    </div>
  )
}

const HeadingSpan = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div className={`font-semibold font-rajdhani text-[2.25rem] text-black w-auto inline-block uppercase h-0`}>
      <span
        className={`${BGColor === 'RED' ? 'bg-red shadow-red-blur' : 'bg-teal shadow-teal-blur'} px-3 inline-block h-[38px] leading-[1.1] `}
      >
        {heading}
      </span>
    </div>
  )
}

const HeadingHighlight = ({ heading, fullWidth = true, BGColor }: { heading: string; fullWidth: boolean; BGColor: string }) => {
  return <>{fullWidth ? <HeadingFullWidth heading={heading} BGColor={BGColor} /> : <HeadingSpan heading={heading} BGColor={BGColor} />}</>
}

export default HeadingHighlight
