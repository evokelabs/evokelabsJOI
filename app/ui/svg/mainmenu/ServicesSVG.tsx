import { RED } from '@/app/libs/UIConstants'
import RedCRTBlur from '../../libs/RedCRTBlur'

const ServicesSVG = ({ primaryColor = RED }: { primaryColor?: string }) => {
  return (
    <div className='absolute '>
      <svg width='74' height='74' viewBox='-0.5 1 74 74'>
        <path
          d='M57.9884 67.2184C56.406 67.2184 54.9124 66.6712 53.6701 65.562L54.7645 64.2606C55.7553 65.1184 56.761 65.6064 58.0328 65.6064C59.1567 65.6064 59.8666 65.074 59.8666 64.305V64.2754C59.8666 63.536 59.4525 63.1367 57.53 62.693C55.3265 62.1606 54.0842 61.5099 54.0842 59.6022V59.5726C54.0842 57.7979 55.5631 56.5705 57.6187 56.5705C59.1272 56.5705 60.3251 57.0289 61.3751 57.8719L60.399 59.2472C59.4673 58.5522 58.5356 58.1824 57.5891 58.1824C56.5243 58.1824 55.9032 58.7296 55.9032 59.4099V59.4395C55.9032 60.2381 56.3765 60.593 58.3729 61.0663C60.5617 61.5986 61.6856 62.3824 61.6856 64.0979V64.1275C61.6856 66.0648 60.1624 67.2184 57.9884 67.2184Z'
          fill={primaryColor}
        />
        <path
          d='M40.1432 67.0705V56.7184H44.7868C45.9699 56.7184 46.9016 57.0437 47.4932 57.6353C47.9516 58.0937 48.1882 58.6557 48.1882 59.3508V59.3803C48.1882 60.6226 47.4784 61.2881 46.7094 61.6874C47.922 62.1015 48.765 62.7965 48.765 64.2015V64.231C48.765 66.0796 47.2418 67.0705 44.9347 67.0705H40.1432ZM46.3692 59.6761V59.6465C46.3692 58.8332 45.7185 58.3303 44.5502 58.3303H41.9326V61.081H44.4171C45.5854 61.081 46.3692 60.6226 46.3692 59.6761ZM46.946 64.0092C46.946 63.1367 46.2509 62.6191 44.8164 62.6191H41.9326V65.4585H44.9495C46.1918 65.4585 46.946 64.9705 46.946 64.0388V64.0092Z'
          fill={primaryColor}
        />
        <path
          d='M24.0229 67.0705L28.5778 56.6444H30.2637L34.8186 67.0705H32.8961L31.8461 64.5712H26.951L25.8863 67.0705H24.0229ZM27.6165 62.9592H31.1806L29.3912 58.8184L27.6165 62.9592Z'
          fill={primaryColor}
        />
        <path d='M12.2046 67.0705V56.7184H14.0236V65.4141H19.4659V67.0705H12.2046Z' fill={primaryColor} />
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M59.0257 14.1071C56.9224 11.9512 54.3722 10.8733 51.375 10.8733H20.7722C17.775 10.8733 15.1985 11.9512 13.0426 14.1071C10.9393 16.2104 9.8877 18.7606 9.8877 21.7578V41.7916C9.8877 44.7888 10.9393 47.3653 13.0426 49.5212C15.1985 51.6245 17.775 52.6761 20.7722 52.6761H62.2595V42.3437H22.9807C21.5084 42.3437 20.667 42.2648 20.4567 42.1071C20.299 41.8968 20.2201 41.0555 20.2201 39.5832V36.9803H62.2595V21.7578C62.2595 18.7606 61.1816 16.2104 59.0257 14.1071ZM60.2877 35.0085V21.7578C60.2877 19.295 59.4264 17.2527 57.6487 15.5185L57.6313 15.5015L57.6143 15.4841C55.8801 13.7065 53.8379 12.8451 51.375 12.8451H20.7722C18.308 12.8451 16.2302 13.7082 14.4369 15.5014C12.7066 17.2317 11.8595 19.2791 11.8595 21.7578V41.7916C11.8595 44.2634 12.7026 46.3411 14.4371 48.1268C16.2228 49.8613 18.3005 50.7043 20.7722 50.7043H60.2877V44.3155H22.9807C22.2209 44.3155 21.5719 44.2956 21.0614 44.2478C20.8086 44.2241 20.5457 44.1897 20.2999 44.1344C20.1229 44.0945 19.6801 43.9894 19.2736 43.6846L19.0483 43.5155L18.8792 43.2902C18.5744 42.8837 18.4693 42.4409 18.4295 42.2639C18.3741 42.0181 18.3397 41.7552 18.316 41.5024C18.2682 40.9919 18.2483 40.3429 18.2483 39.5832V35.0085H60.2877ZM18.2483 29.6451V23.9662C18.2483 23.2081 18.268 22.5624 18.3166 22.0608C18.3404 21.8145 18.3762 21.5478 18.4372 21.2967L18.4396 21.2867C18.4763 21.1353 18.6109 20.5784 19.0624 20.1269C19.4677 19.7216 19.945 19.5608 20.1662 19.4945C20.4433 19.4113 20.7334 19.3614 21.0009 19.328C21.5406 19.2605 22.2128 19.2339 22.9807 19.2339H49.1666C49.9323 19.2339 50.6024 19.2603 51.1344 19.3289C51.3958 19.3627 51.6929 19.4149 51.9784 19.5075C52.1515 19.5636 52.6118 19.7205 53.0071 20.1257C53.4123 20.5211 53.5692 20.9814 53.6253 21.1544C53.7179 21.4399 53.7701 21.737 53.8039 21.9984C53.8725 22.5305 53.899 23.2005 53.899 23.9662V29.6451H18.2483ZM51.6116 21.5212C51.4539 21.3108 50.6389 21.2057 49.1666 21.2057H22.9807C21.5084 21.2057 20.667 21.3108 20.4567 21.5212C20.299 21.6789 20.2201 22.4939 20.2201 23.9662V27.6733H51.9271V23.9662C51.9271 22.4939 51.822 21.6789 51.6116 21.5212Z'
            fill={primaryColor}
          />
        </g>
      </svg>
    </div>
  )
}

export default ServicesSVG
