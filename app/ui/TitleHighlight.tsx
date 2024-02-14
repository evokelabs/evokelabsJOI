import React from 'react'

const TitleHighlight = ({ title, BGCOLOR }: { title: string; BGCOLOR: string }) => {
  return (
    <div className={`bg-[${BGCOLOR}] font-semibold font-rajdhani text-[2.25rem] text-black px-4`}>
      {title}
      {BGCOLOR}
    </div>
  )
}

export default TitleHighlight
