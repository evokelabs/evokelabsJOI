import { tileFill } from './SVG/fills/tileFill'

const IconSmall = () => {
  return (
    <svg width='74' height='74' viewBox='0 0 74 74' fill='none'>
      <path
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill='#151A2B'
      />
      <path
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill='url(#pattern1)'
        fill-opacity='0.3'
      />
      <path
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        stroke='#F75049'
        stroke-opacity='0.6'
        stroke-width='2'
      />
      <defs>
        <pattern id='pattern1' patternContentUnits='objectBoundingBox' width='0.0457143' height='0.0457143'>
          <use xlinkHref='#gridOverlay' transform='scale(0.0114286)' />
        </pattern>
        <image id='gridOverlay' width='4' height='4' xlinkHref={tileFill} />
      </defs>
    </svg>
  )
}

export default IconSmall
