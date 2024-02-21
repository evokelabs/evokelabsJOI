import { RED, TEAL } from '../libs/UIConstants'

const ParagraphHighlight = ({ paragraph, BGColor, fontSize = '24px' }: { paragraph: string; BGColor: string; fontSize?: string }) => {
  return (
    <div className={'block leading-none '}>
      <div
        style={{ fontSize }}
        className={`font-medium font-rajdhani text-black w-auto inline-block px-2 py-1 ${
          BGColor === RED ? 'bg-red shadow-red-blur' : BGColor === TEAL ? 'bg-teal shadow-teal-blur' : 'bg-orange shadow-orange-blur'
        }`}
      >
        <span dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  )
}

export default ParagraphHighlight
