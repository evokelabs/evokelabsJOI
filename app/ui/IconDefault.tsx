import RedCRTBlur from './libs/RedCRTBlur'
import { BLUE_DARK, RED } from '../libs/UIConstants'
import { BLUE_TILE_PATTERN } from './libs/TitleFillsPatterns'

const IconDefault = () => {
  return (
    <svg width='160' height='144' viewBox='0 0 160 144' fill='none'>
      <path d='M2 2H142V128L128 142H2V2Z' fill={BLUE_DARK} />
      <path d='M2 2H142V128L128 142H2V2Z' fill='url(#blueTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          d='M2 1H1V2V142V143H2H128H128.414L128.707 142.707L142.707 128.707L143 128.414V128V2V1H142H2Z'
          stroke={RED}
          strokeOpacity='0.6'
          strokeWidth='2'
        />
      </g>
      {BLUE_TILE_PATTERN}
    </svg>
  )
}

export default IconDefault
