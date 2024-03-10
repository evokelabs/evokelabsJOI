import { RED, TEAL } from '../libs/UIConstants'

const HeadingFullWidth = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div
      className={`${
        BGColor === RED ? 'bg-red' : BGColor === TEAL ? 'bg-teal' : 'bg-orange'
      } font-semibold font-rajdhani text-[2.25rem] text-black w-full block uppercase`}
    >
      <span className={'px-3 block h-[2.1875rem] leading-[1.05]'}>{heading}</span>
    </div>
  )
}

const HeadingSpan = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div className={`font-semibold font-rajdhani text-[2.25rem] text-black w-auto inline-block uppercase h-0`}>
      <span
        className={`${
          BGColor === RED ? 'bg-red shadow-red-blur' : BGColor === TEAL ? 'bg-teal shadow-teal-blur' : 'bg-orange shadow-orange-blur'
        } px-3 inline-block h-[2.375rem] leading-[1.1] `}
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
