import React from 'react'

const TitleHighlight = ({ title, BGCOLOR }: { title: string; BGCOLOR: string }) => {
  console.log('BGCOLOR', BGCOLOR)
  return (
    <div className={'block my-3 leading-none'}>
      <div className={`font-semibold font-rajdhani text-[2.25rem] text-black w-auto inline-block`}>
        <span className={`${BGCOLOR === '#F75049' ? 'bg-red' : 'bg-teal'}  px-4`}>{title}</span>
      </div>
    </div>
  )
}

export default TitleHighlight
