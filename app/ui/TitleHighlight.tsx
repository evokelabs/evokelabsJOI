import React from 'react'

const HeadingTitle = ({ title, BGColor }: { title: string; BGColor: string }) => {
  return (
    <div
      className={`${BGColor === '#F75049' ? 'bg-red' : 'bg-teal'} font-semibold font-rajdhani text-[2.25rem] text-black w-full block py-1`}
    >
      <span className={'px-4'}>{title}</span>
    </div>
  )
}

const SpanTitle = ({ title, BGColor }: { title: string; BGColor: string }) => {
  return (
    <div className={`font-semibold font-rajdhani text-[2.25rem] text-black w-auto inline-block`}>
      <span className={`${BGColor === '#F75049' ? 'bg-red' : 'bg-teal'}  px-4`}>{title}</span>
    </div>
  )
}

const TitleHighlight = ({ title, fullWidth = true, BGColor }: { title: string; fullWidth: boolean; BGColor: string }) => {
  return (
    <div className={' my-3 leading-none'}>
      {fullWidth ? <HeadingTitle title={title} BGColor={BGColor} /> : <SpanTitle title={title} BGColor={BGColor} />}
    </div>
  )
}

export default TitleHighlight
