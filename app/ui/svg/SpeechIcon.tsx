import { RED, TEAL, WHITE } from '@/app/libs/UIConstants'
import TealCRTBlur from '../libs/TealCRTBlur'

const SpeechIcon = () => {
  return (
    <svg width='36' height='22' viewBox='0 0 25 22'>
      <TealCRTBlur />
      <g filter='url(#TealCRTBlur1) url(#TealCRTBlur2)'>
        <path
          d='M0.670898 4.26667C0.670898 1.91025 2.58115 0 4.93757 0H20.4042C22.7606 0 24.6709 1.91025 24.6709 4.26667V12.8C24.6709 15.1564 22.7606 17.0667 20.4042 17.0667H10.5376L4.40423 21.0667L6.2709 17.0667H4.93757C2.58115 17.0667 0.670898 15.1564 0.670898 12.8V4.26667Z'
          fill={TEAL}
        />
        <circle cx='7.60488' cy='8.53335' r='1.6' fill='black' />
        <circle cx='12.9369' cy='8.53335' r='1.6' fill='black' />
        <circle cx='18.2719' cy='8.53335' r='1.6' fill='black' />
      </g>
    </svg>
  )
}

export default SpeechIcon
