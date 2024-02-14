import React from 'react'

const ParagraphHighlight = ({ text, BGCOLOR }: { text: string; BGCOLOR: string }) => {
  return (
    <div className={'block my-2 leading-none'}>
      <div className='font-semibold font-rajdhani text-[1.375rem] text-black  w-auto inline-block'>
        <span className={`${BGCOLOR === '#F75049' ? 'bg-red' : 'bg-teal'} px-4 `} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  )
}

export default ParagraphHighlight
