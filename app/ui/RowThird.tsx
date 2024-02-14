import React from 'react'

const RowThird = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='relative my-2'>
      <svg width='546' height='172' viewBox='0 0 546 172' fill='none'>
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#0E0E17' fill-opacity='0.85' />
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#DE5456' fill-opacity='0.1' />
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='url(#RowThirdPattern)' fill-opacity='0.1' />
        <path
          d='M2 1H1V2V170V171H2H528.986H529.402L529.695 170.705L544.709 155.614L545 155.322V154.909V2V1H544H2Z'
          stroke='#F75049'
          stroke-opacity='0.6'
          stroke-width='2'
        />
        <path d='M16 16H156V142L142 156H16V16Z' fill='#151A2B' />
        <path d='M16 16H156V142L142 156H16V16Z' fill='url(#pattern1)' fill-opacity='0.3' />
        <path
          d='M16 15H15V16V156V157H16H142H142.414L142.707 156.707L156.707 142.707L157 142.414V142V16V15H156H16Z'
          stroke='#F75049'
          stroke-opacity='0.6'
          stroke-width='2'
        />
        <mask id='mask0_836_760' x='16' y='16' width='140' height='140'>
          <path d='M16 16H156V142L142 156H16V16Z' fill='#151A2B' />
          <path d='M16 16H156V142L142 156H16V16Z' fill='url(#pattern2)' fill-opacity='0.3' />
        </mask>
        <g mask='url(#mask0_836_760)'></g>
        <defs>
          <pattern id='RowThirdPattern' patternContentUnits='objectBoundingBox' width='0.00590406' height='0.0190476'>
            <use xlinkHref='#RowThirdImage' transform='scale(0.00147601 0.0047619)' />
          </pattern>
          <pattern id='pattern1' patternContentUnits='objectBoundingBox' width='0.0228571' height='0.0228571'>
            <use xlinkHref='#RowThirdImage' transform='scale(0.00571429)' />
          </pattern>
          <pattern id='pattern2' patternContentUnits='objectBoundingBox' width='0.0228571' height='0.0228571'>
            <use xlinkHref='#RowThirdImage' transform='scale(0.00571429)' />
          </pattern>
          <image
            id='RowThirdImage'
            width='4'
            height='4'
            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWFjMGVmZTAtMWIzZi0zMDQ4LTg4MTMtYjQ2NDg5ODUwZTBmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2NDU1MDk1QzQ0MTExRUVCM0FBODNGOERGMUJFNjA3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NDU1MDk0QzQ0MTExRUVCM0FBODNGOERGMUJFNjA3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4xIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmVhYzBlZmUwLTFiM2YtMzA0OC04ODEzLWI0NjQ4OTg1MGUwZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplYWMwZWZlMC0xYjNmLTMwNDgtODgxMy1iNDY0ODk4NTBlMGYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7JH2pwAAAAG0lEQVR42mJgYGD4D8VgwMSABhiRZbGqAAgwAJpUAwPFBYxOAAAAAElFTkSuQmCC'
          />
        </defs>
      </svg>

      <div className={'absolute ml-40 px-4 pt-3 top-0'}>
        <h2 className='text-teal font-rajdhani font-semibold text-3xl leading-none'>{title}</h2>
        <p className='text-red font-rajdhani text-[1.1875rem] leading-7  font-medium'>{text}</p>
      </div>
    </div>
  )
}

export default RowThird
