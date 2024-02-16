import React from 'react'

const HeadingFullWidth = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div
      className={`${BGColor === '#F75049' ? 'bg-red' : 'bg-teal'} font-semibold font-rajdhani text-[2.25rem] text-black w-full block py-1`}
    >
      <span className={'px-4'}>{heading}</span>
    </div>
  )
}

const HeadingSpan = ({ heading, BGColor }: { heading: string; BGColor: string }) => {
  return (
    <div className={`font-semibold font-rajdhani text-[2.25rem] text-black w-auto inline-block`}>
      <span className={`${BGColor === '#F75049' ? 'bg-red' : 'bg-teal'}  px-4`}>{heading}</span>
    </div>
  )
}

const HeadingHighlight = ({ heading, fullWidth = true, BGColor }: { heading: string; fullWidth: boolean; BGColor: string }) => {
  return (
    <div className={' my-3 leading-none'}>
      {fullWidth ? <HeadingFullWidth heading={heading} BGColor={BGColor} /> : <HeadingSpan heading={heading} BGColor={BGColor} />}
    </div>
  )
}

export default HeadingHighlight
