const RedCRTBlur = () => (
  <defs>
    <filter id='RedCRTBlur1' x='-20%' y='-20%' width='140%' height='140%'>
      <feOffset dx='4' dy='0' in='SourceAlpha' result='offset1' />
      <feFlood floodColor='rgba(222,84,86,0.2)' result='color1' />
      <feComposite in2='offset1' in='color1' operator='in' result='shadow1' />
      <feMerge>
        <feMergeNode in='shadow1' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
    <filter id='RedCRTBlur2' x='-20%' y='-20%' width='140%' height='140%'>
      <feOffset dx='8' dy='0' in='SourceAlpha' result='offset2' />
      <feFlood floodColor='rgba(222,84,86,0.1)' result='color2' />
      <feComposite in2='offset2' in='color2' operator='in' result='shadow2' />
      <feMerge>
        <feMergeNode in='shadow2' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
  </defs>
)

export default RedCRTBlur
