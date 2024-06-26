import { RED, TEAL } from '../libs/UIConstants'

const fontSizes = {
  sm: 'text-[12px] lg:text-[18px] 2xl:text-[23px]',
  base: 'text-base  lg:text-lg',
  lg: 'text-[18px] leading-5 lg:pb-1  lg:text-2xl/7',
  xl: 'text-xl lg:text-2xl',
  '2xl': 'text-2xl lg:text-3xl'
  // Add more sizes as needed
}

const ParagraphHighlight = ({
  paragraph,
  BGColor,
  fontSize = 'lg'
}: {
  paragraph: string
  BGColor: string
  fontSize?: keyof typeof fontSizes
}) => {
  const fontSizeClass = fontSizes[fontSize]

  return (
    <div>
      <div
        className={`font-medium  font-rajdhani text-black w-fit inline-block px-2 2xl:px-3 2xl:pt-1 ${fontSizeClass} ${
          BGColor === RED ? 'bg-red shadow-red-blur' : BGColor === TEAL ? 'bg-teal shadow-teal-blur' : 'bg-orange shadow-orange-blur'
        }`}
      >
        <span dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  )
}

export default ParagraphHighlight
