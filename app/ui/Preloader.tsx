import React, { useEffect, useRef, useState } from 'react'
import { LoadingManager } from 'three'
import { SoundAudioLevelControls } from '../sections/data/types'
import { useDracoLoader } from '../libs/useDracoLoader'
import { useGPU } from '../3d/lib/useGPU'
import { TEAL } from '../libs/UIConstants'
import TealCRTBlur from './libs/TealCRTBlur'

const TOTAL_BYTES_SIZE_JOI = 4909672
const TOTAL_BYTES_SIZE_MAP = 3763556

const EvokelabsLogo = () => {
  return (
    <svg width='650' height='69' viewBox='0 0 639 69'>
      <TealCRTBlur />
      <g filter='url(#TealCRTBlur1) url(#TealCRTBlur2)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M573.351 54.5775L586.626 43.3627L587.924 44.7785C592.52 49.7927 597.45 52.3319 603.923 52.3319C606.403 52.3319 608.369 51.7482 609.651 50.8881C610.889 50.0574 611.462 49.0092 611.462 47.8238C611.462 47.3276 611.375 46.9792 611.213 46.6708C611.042 46.3453 610.721 45.9395 610.072 45.4353C608.714 44.379 606.306 43.1751 602.104 41.4761L602.1 41.4746C597.992 39.8043 593.873 37.7756 590.774 34.8603C587.6 31.8752 585.519 27.9777 585.519 22.7723C585.519 16.7807 587.886 11.6425 591.632 7.89623C596.63 2.89904 604.223 0.178345 612.303 0.178345C623.522 0.178345 631.461 4.03919 637.121 10.083L638.444 11.4957L626.265 23.6742L624.853 22.3687C620.347 18.2028 616.619 16.2138 611.233 16.2138C606.025 16.2138 604.14 18.9827 604.14 20.5435C604.14 21.0989 604.241 21.4536 604.406 21.7479C604.584 22.064 604.919 22.4564 605.61 22.9509C607.067 23.9927 609.573 25.1334 613.865 26.8953C618.202 28.6573 622.246 30.7152 625.209 33.641C628.253 36.6471 630.083 40.4984 630.083 45.595C630.083 51.8724 627.613 56.9168 623.881 60.6494C618.696 65.8339 611.096 68.3673 603.299 68.3673C590.819 68.3673 580.886 64.2811 574.528 56.0934L573.351 54.5775ZM613.106 28.7454C604.636 25.2685 602.14 23.8421 602.14 20.5435C602.14 17.4232 605.439 14.2138 611.233 14.2138C617.296 14.2138 621.486 16.5316 626.21 20.8997C626.211 20.8999 626.21 20.8996 626.21 20.8997L635.661 11.4501C635.661 11.4499 635.661 11.4503 635.661 11.4501C635.213 10.9715 634.748 10.5067 634.268 10.0576C634.261 10.0506 634.253 10.0436 634.246 10.0366C629.095 5.22808 622.075 2.17834 612.303 2.17834C604.636 2.17834 597.593 4.76373 593.047 9.31045C589.659 12.6982 587.519 17.3341 587.519 22.7723C587.519 31.9549 594.74 36.3233 602.853 39.6219C611.233 43.0096 613.462 44.7927 613.462 47.8238C613.462 51.7465 609.45 54.3319 603.923 54.3319C596.791 54.3319 591.353 51.4792 586.45 46.1304C586.45 46.1302 586.45 46.1305 586.45 46.1304L576.108 54.8668C581.992 62.4446 591.264 66.3673 603.299 66.3673C610.699 66.3673 617.741 63.9602 622.466 59.2352C625.854 55.8474 628.083 51.3007 628.083 45.595C628.083 36.5016 621.664 32.2223 613.106 28.7454Z'
          fill={TEAL}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M507.1 67.4757L524.935 1.06982H550.718C558.363 1.06982 564.146 2.87529 568.057 6.03941C572.012 9.2394 573.847 13.6667 573.847 18.4039C573.847 23.0074 572.35 26.9048 569.655 29.8949C567.933 31.8051 565.769 33.2954 563.292 34.3714C564.458 35.2575 565.505 36.2774 566.385 37.4565C568.199 39.8886 569.211 42.8784 569.211 46.4865C569.211 52.6955 566.523 58.0393 561.467 61.7695C556.47 65.4557 549.298 67.4757 540.376 67.4757H507.1ZM561.015 35.2176C560.223 34.7069 559.373 34.2454 558.474 33.827C559.444 33.6114 560.375 33.3437 561.263 33.025C567.713 30.7075 571.847 25.6924 571.847 18.4039C571.847 10.0236 565.428 3.06982 550.718 3.06982H526.469L509.708 65.4757H540.376C557.672 65.4757 567.211 57.6304 567.211 46.4865C567.211 41.1834 564.777 37.6449 561.015 35.2176ZM528.893 51.4403H542.427C545.597 51.4403 547.935 50.7361 549.42 49.6885C550.838 48.6892 551.571 47.3273 551.571 45.595C551.571 44.3802 551.122 43.535 550.245 42.9166C549.273 42.2313 547.6 41.711 545.012 41.711H531.483L528.893 51.4403ZM542.427 53.4403C549.292 53.4403 553.571 50.4092 553.571 45.595C553.571 41.9398 550.629 39.711 545.012 39.711H529.946L526.291 53.4403H542.427ZM535.661 26.2996H546.884C550.235 26.2996 552.594 25.7171 554.055 24.7709C555.382 23.9117 556.118 22.6673 556.118 20.7218C556.118 19.7226 555.751 18.9421 554.905 18.3374C553.97 17.6696 552.279 17.1053 549.47 17.1053H538.084L535.661 26.2996ZM536.543 15.1053H549.47C555.532 15.1053 558.118 17.5123 558.118 20.7218C558.118 25.8926 553.927 28.2996 546.884 28.2996H533.066L536.543 15.1053Z'
          fill={TEAL}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M427.109 67.4757L473.478 0.624023H489.429L499.955 67.4757H481.79L479.829 53.4789H456.242L446.792 67.4757H427.109ZM455.179 51.4789H481.568L483.529 65.4757H497.615L487.719 2.62402H474.525L430.93 65.4757H445.729L455.179 51.4789ZM479.963 39.3544L477.11 18.7604L463.381 39.3544H479.963ZM467.118 37.3544H477.667L475.852 24.2532L467.118 37.3544Z'
          fill={TEAL}
        />
        <path
          d='M374.209 67.4757L392.044 1.06982H409.913L396.54 50.9946H427.663L423.19 67.4757H374.209ZM393.934 52.9946L407.307 3.06982H393.578L376.817 65.4757H421.66L425.048 52.9946H393.934Z'
          fill={TEAL}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M279.277 67.4757L297.112 1.06982H347.883L343.504 17.2836H310.525L308.2 26.0322H337.195L332.8 42.0676H303.832L301.347 51.262H334.867L330.488 67.4757H279.277ZM298.735 53.262L302.301 40.0676H331.275L334.573 28.0322H305.599L308.987 15.2836H341.973L345.272 3.06982H298.645L281.885 65.4757H328.957L332.255 53.262H298.735Z'
          fill={TEAL}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M210.045 67.4757L227.88 1.06982H245.749L239.413 24.7335L265.825 1.06982H290.53L257.126 29.7716L272.412 67.4757H252.99L242.985 40.7695L232.701 49.564L227.919 67.4757H210.045ZM230.929 48.4478L243.856 37.3931L254.376 65.4757H269.443L254.733 29.1912L285.133 3.06982H266.59L235.744 30.7067L243.143 3.06982H229.414L212.653 65.4757H226.383L230.929 48.4478Z'
          fill={TEAL}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M198.581 8.5155C203.969 13.8668 206.984 21.2998 206.984 29.6369C206.984 39.7232 202.749 49.7664 195.432 57.0833C188.479 64.0367 178.884 68.5456 167.451 68.5456C158.371 68.5456 150.716 65.3845 145.325 60.0301C139.938 54.6788 136.922 47.2458 136.922 38.9086C136.922 28.8223 141.157 18.7792 148.474 11.4622C155.427 4.5089 165.022 0 176.455 0C185.535 0 193.191 3.16103 198.581 8.5155ZM169.056 51.8861C174.247 51.8861 178.749 49.6552 182.084 46.3204C186.256 42.1488 188.719 35.9712 188.719 30.5284C188.719 26.2919 187.441 22.8595 185.184 20.4994C182.941 18.1538 179.533 16.6595 174.85 16.6595C169.659 16.6595 165.157 18.8904 161.822 22.2251C157.651 26.3967 155.187 32.5743 155.187 38.0171C155.187 42.2537 156.465 45.6861 158.722 48.0462C160.965 50.3917 164.373 51.8861 169.056 51.8861ZM204.984 29.6369C204.984 13.9463 193.661 2 176.455 2C165.579 2 156.485 6.27926 149.888 12.8765C142.934 19.8303 138.922 29.3695 138.922 38.9086C138.922 54.5993 150.245 66.5456 167.451 66.5456C178.327 66.5456 187.421 62.2663 194.018 55.6691C200.972 48.7153 204.984 39.1761 204.984 29.6369ZM183.498 47.7346C179.843 51.3898 174.85 53.8861 169.056 53.8861C158.803 53.8861 153.187 47.2889 153.187 38.0171C153.187 32.044 155.861 25.3576 160.408 20.8109C164.063 17.1557 169.056 14.6595 174.85 14.6595C185.103 14.6595 190.719 21.2567 190.719 30.5284C190.719 36.5016 188.045 43.1879 183.498 47.7346Z'
          fill={TEAL}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M82.7831 67.9215L74.1541 1.06982H92.9517L96.8405 40.6064L121.956 1.06982H142.211L97.7378 67.9215H82.7831ZM95.418 46.5757L91.1388 3.06982H76.4288L84.5416 65.9215H96.6662L138.478 3.06982H123.055L95.418 46.5757Z'
          fill={TEAL}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 67.4757L17.8347 1.06982H68.6064L64.2275 17.2836H31.248L28.9231 26.0322H57.9184L53.5235 42.0676H24.5549L22.0699 51.262H55.5903L51.2114 67.4757H0ZM19.4576 53.262L23.0237 40.0676H51.9978L55.2964 28.0322H26.3223L29.71 15.2836H62.696L65.9946 3.06982H19.3685L2.60802 65.4757H49.6799L52.9785 53.262H19.4576Z'
          fill={TEAL}
        />
      </g>
    </svg>
  )
}

const EvolvingDigitalMediaLogo = () => {
  return (
    <svg width='660' height='22' viewBox='0 0 639 22'>
      <TealCRTBlur />
      <g filter='url(#TealCRTBlur1) url(#TealCRTBlur2)'>
        <path d='M281.27 11.87H284.24L283.73 8.35999L281.27 11.87Z' fill={TEAL} />
        <path
          d='M379.8 7.79004H378.6L376.78 14.2H378.17C379.66 14.2 381.02 13.76 381.91 12.91C382.63 12.23 383.03 11.28 383.03 10.25C383.03 9.52004 382.79 8.96004 382.37 8.56004C381.87 8.09004 381.06 7.79004 379.79 7.79004H379.8Z'
          fill={TEAL}
        />
        <path d='M414.5 11.87H417.47L416.96 8.35999L414.5 11.87Z' fill={TEAL} />
        <path
          d='M192.71 7.79004H191.51L189.69 14.2H191.08C192.57 14.2 193.93 13.76 194.82 12.91C195.54 12.23 195.94 11.28 195.94 10.25C195.94 9.52004 195.7 8.96004 195.28 8.56004C194.78 8.09004 193.97 7.79004 192.7 7.79004H192.71Z'
          fill={TEAL}
        />
        <path
          d='M61.7501 7.66003C60.7101 7.66003 59.8101 8.09003 59.1601 8.71003C58.3401 9.48003 57.8601 10.62 57.8601 11.64C57.8601 13.22 58.8701 14.34 60.7101 14.34C61.7501 14.34 62.6501 13.91 63.3001 13.29C64.1201 12.52 64.6001 11.38 64.6001 10.36C64.6001 8.78003 63.5901 7.66003 61.7501 7.66003Z'
          fill={TEAL}
        />
        <path
          d='M0 0V22H639V0H0ZM24.98 7.76H19.06L18.45 9.93H23.65L23.06 11.98H17.86L17.22 14.23H23.24L22.65 16.31H14.2L17.21 5.67H25.58L24.99 7.75L24.98 7.76ZM39.4 16.39H37.22L35.76 5.68H38.4L39.17 13.09L44.13 5.68H46.9L39.4 16.39ZM65.19 14.64C64.01 15.76 62.37 16.49 60.42 16.49C57.33 16.49 55.3 14.45 55.3 11.78C55.3 10.15 56.02 8.53 57.27 7.34C58.45 6.22 60.09 5.49 62.04 5.49C65.13 5.49 67.16 7.53 67.16 10.2C67.16 11.83 66.44 13.45 65.19 14.64ZM84.9 16.31H76.85L79.86 5.67H82.32L79.92 14.18H85.5L84.89 16.31H84.9ZM99.66 16.39H97.48L96.02 5.68H98.66L99.43 13.09L104.39 5.68H107.16L99.66 16.39ZM117.49 16.31H115.03L118.04 5.67H120.5L117.49 16.31ZM139.3 16.31H137.2L133.81 9.34L131.84 16.31H129.41L132.42 5.67H134.69L137.95 12.43L139.87 5.67H142.3L139.29 16.31H139.3ZM157.4 14.35C158.26 14.35 158.9 14.15 159.4 13.94L159.93 12.21H157.45L158.03 10.19H162.89L161.31 15.49C160.21 16.08 158.93 16.49 157.25 16.49C154.69 16.49 151.99 15.05 151.99 11.87C151.99 10.21 152.73 8.62 153.97 7.43C155.22 6.24 156.96 5.49 158.98 5.49C161.35 5.49 162.77 6.36 163.56 7.33L161.74 8.86C161.08 8.18 160.2 7.63 158.8 7.63C157.65 7.63 156.61 8.09 155.86 8.8C155.08 9.54 154.56 10.64 154.56 11.79C154.56 13.45 155.84 14.34 157.42 14.34L157.4 14.35ZM196.67 14.35C195.33 15.63 193.39 16.31 190.8 16.31H186.64L189.65 5.67H192.91C195.09 5.67 196.45 6.23 197.29 7.04C198.12 7.83 198.51 8.86 198.51 10.15C198.51 11.75 197.87 13.2 196.67 14.34V14.35ZM210.77 16.31H208.31L211.32 5.67H213.78L210.77 16.31ZM228.98 14.35C229.84 14.35 230.48 14.15 230.98 13.94L231.51 12.21H229.03L229.61 10.19H234.47L232.89 15.49C231.79 16.08 230.51 16.49 228.83 16.49C226.27 16.49 223.57 15.05 223.57 11.87C223.57 10.21 224.31 8.62 225.55 7.43C226.8 6.24 228.54 5.49 230.56 5.49C232.93 5.49 234.35 6.36 235.14 7.33L233.32 8.86C232.66 8.18 231.78 7.63 230.38 7.63C229.23 7.63 228.19 8.09 227.44 8.8C226.66 9.54 226.14 10.64 226.14 11.79C226.14 13.45 227.42 14.34 229 14.34L228.98 14.35ZM246.87 16.31H244.41L247.42 5.67H249.88L246.87 16.31ZM269.41 7.83H266L263.6 16.31H261.14L263.54 7.83H260.13L260.74 5.67H270.02L269.41 7.83ZM284.88 16.31L284.53 13.92H279.79L278.09 16.31H275.43L283.25 5.6H285.62L287.4 16.31H284.87H284.88ZM305.95 16.31H297.9L300.91 5.67H303.37L300.97 14.18H306.55L305.94 16.31H305.95ZM342.15 16.31H339.65L341.6 9.37L337.22 13.91H337.16L335.37 9.41L333.42 16.31H330.96L333.97 5.67H336.53L338.15 10.17L342.33 5.67H345.18L342.17 16.31H342.15ZM364.75 7.76H358.83L358.22 9.93H363.42L362.83 11.98H357.63L356.99 14.23H363.01L362.42 16.31H353.97L356.98 5.67H365.35L364.76 7.75L364.75 7.76ZM383.76 14.35C382.42 15.63 380.48 16.31 377.89 16.31H373.73L376.74 5.67H380C382.18 5.67 383.54 6.23 384.38 7.04C385.21 7.83 385.6 8.86 385.6 10.15C385.6 11.75 384.96 13.2 383.76 14.34V14.35ZM397.86 16.31H395.4L398.41 5.67H400.87L397.86 16.31ZM418.12 16.31L417.77 13.92H413.03L411.33 16.31H408.67L416.49 5.6H418.86L420.64 16.31H418.11H418.12ZM451.34 10.05C452.88 10.64 454.03 11.37 454.03 12.92C454.03 13.89 453.63 14.67 453.02 15.24C452.17 16.05 450.91 16.46 449.58 16.46C447.42 16.46 445.76 15.79 444.7 14.5L446.56 13.01C447.44 13.92 448.42 14.41 449.7 14.41C450.69 14.41 451.41 13.97 451.41 13.3C451.41 12.78 451.01 12.48 449.51 11.9C448.05 11.34 446.76 10.59 446.76 9.03C446.76 8.1 447.14 7.31 447.75 6.74C448.57 5.97 449.83 5.52 451.21 5.52C453.13 5.52 454.46 6.14 455.4 7.1L453.7 8.71C452.85 7.97 452.1 7.57 451.01 7.57C449.92 7.57 449.38 8.12 449.38 8.65C449.38 9.21 449.83 9.46 451.35 10.05H451.34ZM466.92 16.31H464.46L467.47 5.67H469.93L466.92 16.31ZM488.73 16.31H486.63L483.24 9.34L481.27 16.31H478.84L481.85 5.67H484.12L487.38 12.43L489.3 5.67H491.73L488.72 16.31H488.73ZM506.72 14.33C507.81 14.33 508.51 13.92 509.34 13.28L510.94 14.86C509.87 15.8 508.57 16.49 506.7 16.49C503.64 16.49 501.42 14.7 501.42 11.86C501.42 10.17 502.17 8.58 503.4 7.41C504.63 6.24 506.34 5.5 508.23 5.5C510.37 5.5 511.81 6.37 512.71 7.76L510.68 9.11C510.02 8.23 509.27 7.65 507.93 7.65C506.95 7.65 506.03 8.06 505.31 8.74C504.51 9.5 503.98 10.58 503.98 11.76C503.98 13.29 505.12 14.33 506.72 14.33ZM532.06 7.75H526.14L525.53 9.92H530.73L530.14 11.97H524.94L524.3 14.22H530.32L529.73 16.3H521.28L524.29 5.66H532.66L532.07 7.74L532.06 7.75ZM562.01 12.03L558.55 14.28H563.25L562.67 16.3H554.27L554.81 14.39L560.47 10.68C561.56 9.97 562.1 9.39 562.1 8.7C562.1 8.01 561.56 7.61 560.69 7.61C559.71 7.61 558.9 8.13 558.02 8.93L556.52 7.44C557.61 6.27 559.03 5.51 560.81 5.51C563.13 5.51 564.63 6.73 564.63 8.44C564.63 9.75 563.99 10.7 561.99 12.03H562.01ZM582.96 14.93C581.97 15.87 580.66 16.48 579.07 16.48C576.45 16.48 574.7 14.73 574.7 12.06C574.7 10.25 575.44 8.34 576.81 7.03C577.8 6.09 579.11 5.48 580.7 5.48C583.32 5.48 585.07 7.23 585.07 9.9C585.07 11.71 584.33 13.62 582.96 14.93ZM603.77 14.93C602.78 15.87 601.47 16.48 599.88 16.48C597.26 16.48 595.51 14.73 595.51 12.06C595.51 10.25 596.25 8.34 597.62 7.03C598.61 6.09 599.92 5.48 601.51 5.48C604.13 5.48 605.88 7.23 605.88 9.9C605.88 11.71 605.14 13.62 603.77 14.93ZM624.98 7.42L621.36 10.03C622.77 10.35 623.74 11.12 623.74 12.67C623.74 13.64 623.34 14.49 622.64 15.16C621.79 15.97 620.51 16.47 619.04 16.47C616.94 16.47 615.63 15.65 614.9 14.45L616.72 13.17C617.31 13.93 617.98 14.37 619.15 14.37C620.32 14.37 621.26 13.66 621.26 12.88C621.26 12.06 620.43 11.62 619.07 11.62H618.38L618.28 10.16L621.58 7.65H617.34L617.92 5.64H625.49L624.98 7.4V7.42Z'
          fill={TEAL}
        />
        <path
          d='M580.49 7.60999C579.8 7.60999 579.19 7.90999 578.7 8.37999C577.76 9.27999 577.21 10.8 577.21 12.09C577.21 13.59 578.01 14.38 579.24 14.38C579.93 14.38 580.54 14.08 581.03 13.61C581.97 12.71 582.52 11.19 582.52 9.89998C582.52 8.39998 581.72 7.60999 580.49 7.60999Z'
          fill={TEAL}
        />
        <path
          d='M601.3 7.60999C600.61 7.60999 600 7.90999 599.51 8.37999C598.57 9.27999 598.02 10.8 598.02 12.09C598.02 13.59 598.82 14.38 600.05 14.38C600.74 14.38 601.35 14.08 601.84 13.61C602.78 12.71 603.33 11.19 603.33 9.89998C603.33 8.39998 602.53 7.60999 601.3 7.60999Z'
          fill={TEAL}
        />
      </g>
    </svg>
  )
}

const EvokelabsFrame = () => {
  return (
    <svg width='660' height='51' viewBox='0 0 639 51' fill='none'>
      <TealCRTBlur />
      <g filter='url(#TealCRTBlur1) url(#TealCRTBlur2)'>
        <path d='M0 0V51H639V0H0ZM637 49H524V28H522V49H117V28H115V49H2V15H637V49ZM2 13V2H637V13H2Z' fill={TEAL} />
      </g>
    </svg>
  )
}

const PreloaderBar = ({ progress, modelName }: { progress: number; modelName: string }) => (
  <div className='relative '>
    <div className='w-[39.75em] absolute bottom-4 left-[1em]'>
      <div className='relative h-auto w-full py-[4px] px-0 flex justify-center items-center justify-items-center bottom-1.5'>
        <div
          className='relative h-[3px] w-full bg-teal origin-left teal-blur shadow-teal-blur'
          style={{
            transform: `scaleX(${progress / 100})`,
            transformOrigin: 'left',
            transition: 'transform 0.25s ease-out'
          }}
        />
      </div>
      <div className='relative top-1.5'>
        <p className='text-teal-blur font-rajdhani font-semibold text-center uppercase'>LOADING {modelName}</p>
      </div>
    </div>
  </div>
)

const Preloader = ({
  setIsPreLoaderFinished,
  soundAudioLevelControls
}: {
  setIsPreLoaderFinished: (value: boolean) => void
  soundAudioLevelControls: SoundAudioLevelControls
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentModelName, setCurrentModelName] = useState('')

  const manager = new LoadingManager()
  const loader = useDracoLoader(manager)

  // GPU Hook
  const { lowGPU } = useGPU()

  const loadModel = async (modelUrl: string, totalBytes: number, modelName: string) => {
    setCurrentModelName(modelName)
    const response = await fetch(modelUrl)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    if (!response.body) {
      throw new Error('Response body is missing')
    }

    const reader = response.body.getReader()
    let bytesReceived = 0
    const chunks = []

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(value)
      bytesReceived += value.length
      const progress = (bytesReceived / totalBytes) * 100
      setProgress(progress)
    }

    const arrayBuffer = new Uint8Array(bytesReceived)
    let position = 0
    for (const chunk of chunks) {
      arrayBuffer.set(chunk, position)
      position += chunk.length
    }

    // Now you can use the GLTFLoader to parse the model data
    const blob = new Blob([arrayBuffer.buffer])
    const blobUrl = URL.createObjectURL(blob)
    loader.load(blobUrl, gltf => {
      // Handle the loaded model here
    })
  }

  const isModelLoading = useRef(false)

  const lowGPURef = useRef(lowGPU)
  lowGPURef.current = lowGPU

  const loadModels = async () => {
    isModelLoading.current = true
    await loadModel('/glb/JOI.glb', TOTAL_BYTES_SIZE_JOI, 'JOI MODEL')
    setProgress(0) // Reset progress
    const secondModelUrl = lowGPURef.current ? '/glb/EvokeLabsMap-LowPoly.glb' : '/glb/EvokeLabsMap.glb'
    await loadModel(secondModelUrl, TOTAL_BYTES_SIZE_MAP, 'MAP MODEL')
    isModelLoading.current = false
  }

  useEffect(() => {
    if (lowGPU === null || isModelLoading.current) return // Don't run the effect if lowGPU is null or the models are already being loaded

    loadModels().then(() => setIsLoading(false)) // Set isLoading to false after both models have loaded
  }, [lowGPU])

  const handleEnter = () => {
    soundAudioLevelControls.setMuteAll(false)
    soundAudioLevelControls.setMuteMusic(false)
    soundAudioLevelControls.setMuteRain(false)
    soundAudioLevelControls.setMuteSFX(false)
    soundAudioLevelControls.setMuteJOI(false)
    soundAudioLevelControls.setMuteRain(false)
    setIsPreLoaderFinished(true)
  }

  const TIMER = 2500
  const TYPE_ON_SPEED = 80

  const itemEntries = [
    'CLICK HERE, HANDSOME!',
    'WHAT A DAY, HMM?',
    'YOU LOOK LONELY. I CAN FIX THAT!',
    'YOU LOOK LIKE A GOOD JOE!',
    'LET US GO THEN YOU AND I',
    'WHEN THE EVENING IS SPREAD OUT AGAINST THE SKY',
    'LIKE A PATIENT ETHERISED UPON A TABLE',
    'LET US GO THROUGH CERTAIN HALF-DESERTED STREETS',
    'THE MUTTERING RETREATS',
    'OF RESTLESS NIGHTS IN ONE-NIGHT CHEAP HOTELS',
    'AND SAWDUST RESTAURANTS WITH OYSTER-SHELLS',
    'STREETS THAT FOLLOW LIKE A TEDIOUS ARGUMENT',
    'OF INSIDIOUS INTENT',
    'TO LEAD YOU TO AN OVERWHELMING QUESTION',
    'OH DO NOT ASK WHAT IS IT',
    'LET US GO AND MAKE OUR VISIT'
  ] // Replace with actual item entries

  const [currentMessage, setCurrentMessage] = useState(itemEntries[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevMessageRef = useRef(currentMessage)

  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const animateMessage = async () => {
      let animatedMessage = ''

      setIsAnimating(true) // Start animation

      // Typing animation
      for (let i = 0; i < itemEntries[currentIndex].length; i++) {
        await new Promise(resolve => setTimeout(resolve, TYPE_ON_SPEED))
        animatedMessage += itemEntries[currentIndex][i]
        setCurrentMessage(animatedMessage)
      }

      setIsAnimating(false) // End animation

      // Wait for TIMER milliseconds before starting the next message
      await new Promise(resolve => setTimeout(resolve, TIMER))

      // Update the current index
      setCurrentIndex(currentIndex => (currentIndex + 1) % itemEntries.length)
    }

    animateMessage()
  }, [currentIndex])

  useEffect(() => {
    // Update the ref to the current message after animating
    prevMessageRef.current = itemEntries[currentIndex]
  }, [currentIndex]) // Include currentIndex in the dependency array

  return (
    <>
      <div className='w-full h-full absolute top-0 left-0 z-[10000000000000000] pointer-events-none flex justify-center items-center group'>
        <div
          className={`flex flex-col last:items-center justify-center space-y-0.5 relative scale-[50%] sm:scale-[70%] md:scale-100 cursor-pointer pointer-events-auto w-fit h-fit ${
            !isLoading ? 'cursor-pointer' : 'cursor-pointer'
          }`}
          onClick={!isLoading ? handleEnter : undefined}
          onTouchEnd={!isLoading ? handleEnter : undefined}
        >
          <EvokelabsLogo />
          <EvolvingDigitalMediaLogo />
          <div className='relative bottom-0 '>
            {isLoading && <EvokelabsFrame />}
            {isLoading && <PreloaderBar progress={progress} modelName={currentModelName} />}
            {!isLoading && (
              <div className='flex w-full flex-row px-2.5 space-x-0.5' onClick={handleEnter} onTouchEnd={handleEnter}>
                <div className='w-10 border-teal border-2 group-hover:bg-teal group-hover:text-black group-hover:text-black-blur text-teal-blur font-semibold font-orbitron flex justify-center items-center'>
                  <span className='text-[14px]  absolute animate-ping'>▶</span>
                  <span className='text-[14px] absolute'>▶</span>
                </div>
                <button className='border-teal border-2 shadow-teal-blur w-[597px] h-[51px] font-semibold font-rajdhani text-teal-blur text-5xl group-hover:bg-teal group-hover:text-black group-hover:text-black-blur duration-200 ease-out origin-left overflow-hidden relative '>
                  <div className='pt-[1px] absolute w-auto right-2 top-0 ' style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                    {currentMessage} <span className='text-[30px] bottom-1 relative'>❤</span>
                  </div>
                </button>
              </div>
            )}
          </div>
          <div className='absolute '>
            <div className='relative w-auto h-auto md:block left-[22.75em] top-[2.15em]'>
              <div className={`absolute -right-3 -top-5 text-2xl transition-opacity duration-500`} style={{ opacity: isAnimating ? 1 : 0 }}>
                💬
              </div>
              <img src='/images/JOI.png' alt='JOI' width={'84px'} height={'75px'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preloader
