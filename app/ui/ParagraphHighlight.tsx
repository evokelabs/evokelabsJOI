const ParagraphHighlight = ({ paragraph, BGColor }: { paragraph: string; BGColor: string }) => {
  return (
    <div className={'block my-2 leading-none'}>
      <div
        className={`font-medium font-rajdhani text-[24px] text-black  w-auto inline-block px-3 py-2 ${
          BGColor === '#F75049' ? 'bg-red' : 'bg-teal'
        }`}
      >
        <span dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  )
}

export default ParagraphHighlight
