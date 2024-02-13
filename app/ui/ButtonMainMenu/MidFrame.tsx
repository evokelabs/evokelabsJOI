import RedBlur from "../libs/RedBlur"

const MidFrame = () => {
  return (
    <svg width='354' height='106' viewBox='0 0 354 106' fill='none'>
      <RedBlur />
      <g filter='url(#filter0_d_817_1881) url(#dropshadow1) url(#dropshadow2)'>
        <path
          d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z'
          fill='#0E0E17'
          fill-opacity='0.85'
          shape-rendering='crispEdges'
        />
        <path
          d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z'
          fill='#DE5456'
          fill-opacity='0.1'
          shape-rendering='crispEdges'
        />
        <path
          d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z'
          fill='url(#pattern0)'
          fill-opacity='0.1'
          shape-rendering='crispEdges'
        />
        <path
          d='M2.00098 3H1.00098V4V98V99H2.00098H331.001H331.412L331.704 98.7109L344.704 85.8507L345.001 85.5572V85.1398V20V19H344.001H97.4152L81.7081 3.29289L81.4152 3H81.001H2.00098Z'
          stroke='#F75049'
          stroke-opacity='0.6'
          stroke-width='2'
          shape-rendering='crispEdges'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_817_1881'
          x='0.000976562'
          y='0'
          width='354'
          height='106'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='4' dy='2' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_817_1881' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_817_1881' result='shape' />
        </filter>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='0.00935673' height='0.0340426'>
          <use xlinkHref='#image0_817_1881' transform='scale(0.00233918 0.00851064)' />
        </pattern>
        <image
          id='image0_817_1881'
          width='4'
          height='4'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWFjMGVmZTAtMWIzZi0zMDQ4LTg4MTMtYjQ2NDg5ODUwZTBmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2NDU1MDk1QzQ0MTExRUVCM0FBODNGOERGMUJFNjA3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NDU1MDk0QzQ0MTExRUVCM0FBODNGOERGMUJFNjA3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4xIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmVhYzBlZmUwLTFiM2YtMzA0OC04ODEzLWI0NjQ4OTg1MGUwZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplYWMwZWZlMC0xYjNmLTMwNDgtODgxMy1iNDY0ODk4NTBlMGYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7JH2pwAAAAG0lEQVR42mJgYGD4D8VgwMSABhiRZbGqAAgwAJpUAwPFBYxOAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  )
}

export default MidFrame
