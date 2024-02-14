import React from 'react'

const TitleHighlight = ({ title, BGCOLOR }: { title: string; BGCOLOR: string }) => {
  console.log('BGCOLOR', BGCOLOR)
  return (
    <div className={`${BGCOLOR === '#F75049' ? 'bg-red' : 'bg-teal'} font-semibold font-rajdhani text-[2.25rem] text-black px-4 my-1`}>
      {title}
    </div>
  )
}

export default TitleHighlight
