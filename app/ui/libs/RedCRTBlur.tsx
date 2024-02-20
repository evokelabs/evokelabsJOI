const RedCRTBlur = () => (
  <defs>
    <filter id='RedCRTBlur1' x='0%' y='0%' width='150%' height='150%'>
      <feOffset dx='4' dy='0' in='SourceAlpha' result='offset1' />
      <feFlood floodColor='rgba(222,84,86,0.2)' result='color1' />
      <feComposite in2='offset1' in='color1' operator='in' result='shadow1' />
      <feMerge>
        <feMergeNode in='shadow1' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
    <filter id='RedCRTBlur2' x='0%' y='0%' width='200%' height='200%'>
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
