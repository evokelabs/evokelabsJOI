import React from 'react'

const HeadingFullWidth = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div
      className={`${
        BGColor === '#F75049' ? 'bg-red' : 'bg-teal'
      } font-semibold font-rajdhani text-[2.25rem] text-black w-full block pt-1 pb-0.5`}
    >
      <span className={'px-2'}>{heading}</span>
    </div>
  )
}

const HeadingSpan = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div className={`font-semibold font-rajdhani text-[2.25rem] text-black w-auto inline-block uppercase`}>
      <span className={`${BGColor === '#F75049' ? 'bg-red' : 'bg-teal'}  px-4`}>{heading}</span>
    </div>
  )
}

const HeadingHighlight = ({ heading, fullWidth = true, BGColor }: { heading: string; fullWidth: boolean; BGColor: string }) => {
  return (
    <div className={'mb-3 leading-none uppercase'}>
      {fullWidth ? <HeadingFullWidth heading={heading} BGColor={BGColor} /> : <HeadingSpan heading={heading} BGColor={BGColor} />}
    </div>
  )
}

export default HeadingHighlight
