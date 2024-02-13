import RedBlur from './libs/RedBlur'
import { TileFill } from './libs/TileFill'

const IconSocial = () => {
  return (
    <svg width='66' height='47' viewBox='-8 0 66 47' fill='none'>
      <RedBlur />
      <g filter='url(#dropshadow1) url(#dropshadow2)'>
        <path d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill='#0E0E17' fill-opacity='0.85' />
        <path d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill='#DE5456' fill-opacity='0.1' />
        <path d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill='url(#pattern2)' fill-opacity='0.1' />
        <path
          d='M2 46H1V45V2V1H2H45H46V2V34.08V34.4876L45.7151 34.7791L35.0393 45.6991L34.7451 46H34.3242H2Z'
          stroke='#F75049'
          stroke-opacity='0.6'
          stroke-width='2'
        />
      </g>
      <defs>
        <pattern id='pattern2' patternContentUnits='objectBoundingBox' width='0.0744186' height='0.0744186'>
          <use xlinkHref='#gridOverlay' transform='scale(0.0186047)' />
        </pattern>
        <image id='gridOverlay' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default IconSocial
