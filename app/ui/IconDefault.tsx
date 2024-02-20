import RedCRTBlur from './libs/RedCRTBlur'
import { BLUE_DARK, RED } from '../libs/UIConstants'
import { BLUE_TILE_PATTERN } from './libs/TitleFillsPatterns'

const IconDefault = () => {
  return (
    <svg width='153' height='144' viewBox='0 0 160 144' fill='none'>
      <path d='M0 0H144V129L129 144H0V0Z' fill={BLUE_DARK} />
      <path d='M0 0H144V129L129 144H0V0Z' fill='url(#blueTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 0H144V129L129 144H0V0ZM128 142H2V2H142V128L128 142Z'
          fill={RED}
          fillOpacity='0.6'
        />
      </g>
      {BLUE_TILE_PATTERN}
    </svg>
  )
}

export default IconDefault
