import RedBlur from './libs/RedBlur'
import { TileFill } from './libs/TileFill'

const IconDefault = () => {
  return (
    <svg width='160' height='144' viewBox='-8 0 160 144' fill='none'>
      <RedBlur />
      <g filter='url(#dropshadow1) url(#dropshadow2)'>
        <path d='M2 2H142V128L128 142H2V2Z' fill='#151A2B' />
        <path d='M2 2H142V128L128 142H2V2Z' fill='url(#pattern0)' fill-opacity='0.3' />
        <path
          d='M2 1H1V2V142V143H2H128H128.414L128.707 142.707L142.707 128.707L143 128.414V128V2V1H142H2Z'
          stroke='#F75049'
          stroke-opacity='0.6'
          stroke-width='2'
        />
      </g>
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='0.0228571' height='0.0228571'>
          <use xlinkHref='#gridOverlay' transform='scale(0.006)' />
        </pattern>
        <image id='gridOverlay' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default IconDefault
