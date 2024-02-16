import { TileFill, TileFill30 } from './TitleFillsPNGData'

export const BLUE_TILE_PATTERN = (
  <defs>
    <pattern id='blueTile' patternUnits='userSpaceOnUse' width='4' height='4'>
      <image xlinkHref={TileFill30} width='4' height='4' />
    </pattern>
  </defs>
)

export const RED_TILE_PATTERN = (
  <defs>
    <pattern id='redTile' patternUnits='userSpaceOnUse' width='4' height='4'>
      <image xlinkHref={TileFill} width='4' height='4' />
    </pattern>
  </defs>
)
