const ParagraphHighlight = ({ paragraph, BGColor, fontSize = '24px' }: { paragraph: string; BGColor: string; fontSize?: string }) => {
  return (
    <div className={'block leading-none '}>
      <div
        className={`font-medium font-rajdhani text-[${fontSize}] text-black w-auto inline-block px-2 py-1 ${
          BGColor === 'RED' ? 'bg-red shadow-red-blur' : 'bg-teal shadow-teal-blur'
        }`}
      >
        <span dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  )
}

export default ParagraphHighlight
