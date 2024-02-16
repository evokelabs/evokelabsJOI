import React from 'react'

const ParagraphHighlight = ({ paragraph, BGColor }: { paragraph: string; BGColor: string }) => {
  return (
    <div className={'block my-2 leading-none'}>
      <div className='font-semibold font-rajdhani text-[1.375rem] text-black  w-auto inline-block'>
        <span className={`${BGColor === '#F75049' ? 'bg-red' : 'bg-teal'} px-4 `} dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  )
}

export default ParagraphHighlight
