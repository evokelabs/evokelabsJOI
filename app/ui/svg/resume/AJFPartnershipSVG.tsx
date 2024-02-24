import { RED } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const AJFPartnershipSVG = () => {
  return (
    <svg width='140' height='140' viewBox='0 0 140 140' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          d='M54.6522 52.3492C54.6522 48.4284 54.6476 44.5031 54.6522 40.5824C54.6568 37.964 54.7345 35.341 54.6659 32.7226C54.6476 32.021 54.2363 31.3102 53.9255 30.6453C53.8432 30.471 53.4593 30.3793 53.2079 30.3564C51.9008 30.228 50.5845 30.1638 49.2819 30.0079C48.8797 29.9574 48.4455 29.7557 48.1255 29.4943C47.7279 29.1733 47.6776 28.6597 47.8467 28.1736C48.0067 27.7013 48.3678 27.4307 48.866 27.3665C49.0808 27.339 49.3047 27.3298 49.5195 27.3298C51.3112 27.3298 53.1028 27.3298 54.8944 27.3298C58.6422 27.3207 62.39 27.2977 66.1333 27.2932C67.4176 27.2932 68.0483 28.1507 67.6507 29.3154C67.5136 29.7144 67.2439 29.9483 66.8234 30.0216C65.0318 30.3334 64.9495 30.3839 64.6296 32.1769C64.529 32.7501 64.5473 33.3462 64.5519 33.9286C64.5839 38.8077 64.689 43.6823 64.6387 48.5614C64.5839 53.8762 64.3828 59.1864 64.2594 64.5012C64.2228 66.1704 64.2457 67.8395 64.2137 69.5087C64.0903 75.9378 61.284 80.8032 55.74 84.0452C53.9072 85.1183 52.047 86.1226 49.8395 86.2189C48.0707 86.2968 46.3385 86.0996 44.6245 85.7053C42.4216 85.1963 40.3146 84.4304 38.3721 83.2703C34.6015 81.0141 32.8464 77.529 32.5539 73.2644C32.3574 70.435 33.308 67.8441 34.6974 65.4275C35.4561 64.1068 36.7222 63.3456 38.0705 62.7311C38.2853 62.6348 38.5184 62.566 38.7149 62.4376C40.7076 61.1124 42.9198 60.9198 45.1959 61.2362C48.4318 61.681 50.5296 63.7675 51.3752 67.3351C51.5991 68.2752 51.6677 69.2519 51.7819 70.2149C52.0242 72.283 50.2325 75.3738 48.1438 75.8644C46.2334 76.3138 44.4692 76.1625 42.9792 74.7685C42.193 74.0348 42.0605 72.8241 42.577 71.8795C42.8878 71.3017 43.3905 71.0724 44.0304 71.0816C44.6474 71.0908 45.1136 71.3751 45.3147 71.9345C45.4792 72.3885 45.5432 72.8883 45.5798 73.379C45.6026 73.6954 45.694 73.8284 46.0094 73.8834C47.3851 74.1265 48.45 73.5212 48.9985 72.1501C49.8532 70.0086 49.2042 66.9132 47.5679 65.2945C45.8174 63.5611 43.4911 63.6024 41.5989 65.3449C39.9078 66.9041 39.14 68.8255 39.108 71.1137C39.0668 73.8422 39.4599 76.4468 41.3384 78.5562C42.1199 79.4321 43.0843 80.1658 44.0395 80.8628C45.0039 81.569 46.0825 81.5507 47.2252 81.17C50.3011 80.1429 51.951 77.795 53.0525 74.9427C54.1083 72.2097 54.4602 69.339 54.5471 66.4317C54.5974 64.8038 54.5562 63.1668 54.5562 61.5388C54.5562 58.4756 54.5562 55.4124 54.5562 52.3538C54.5928 52.3538 54.6294 52.3538 54.6659 52.3538L54.6522 52.3492Z'
          fill={RED}
        />
        <path
          d='M42.0559 50.3132C40.4837 51.2991 39.0623 52.3859 37.9151 53.7799C35.9041 56.2241 34.2998 58.9296 32.9469 61.7865C30.6297 66.661 28.3308 71.5447 26.0044 76.4193C25.7393 76.9788 25.4056 77.5153 25.0446 78.0197C23.2392 80.5372 20.602 81.1517 17.846 79.7302C15.8716 78.7121 15.0946 76.9925 15.0123 74.8739C14.9803 74.0348 14.9758 73.1864 15.4511 72.3335C15.5105 72.9617 15.5608 73.5074 15.6202 74.0485C15.6476 74.2824 15.6979 74.5208 15.7528 74.7501C16.4201 77.5382 18.2071 78.9231 21.082 78.9001C21.7447 78.8956 22.22 78.5287 22.6451 78.0977C24.5875 76.1442 25.8947 73.8697 26.4066 71.1091C27.2567 66.5189 28.2028 61.9424 29.126 57.3659C29.807 53.9954 31.1462 50.8313 32.2477 47.5939C32.7504 46.1219 33.3217 44.6728 33.8473 43.21C34.926 40.1972 36.4388 37.432 38.5458 35.0154C38.8475 34.6669 38.948 34.3321 38.8292 33.8644C38.6281 33.0665 38.4864 32.2503 38.3493 31.4386C38.2624 30.9158 37.9973 30.5994 37.4672 30.549C36.1783 30.4206 35.9772 29.5447 36.2377 28.247C36.3383 27.7563 36.745 27.4949 37.2204 27.394C37.522 27.3298 37.8374 27.2977 38.1436 27.2977C40.5568 27.2886 42.97 27.2977 45.3833 27.2977C45.4564 27.2977 45.5295 27.2977 45.6026 27.2977C47.0378 27.3344 47.4125 27.9627 46.9784 29.4805C46.9098 29.719 46.567 29.9116 46.3156 30.0491C45.9363 30.2509 45.6849 30.4068 45.7626 30.9571C46.6127 37.1523 48.0936 43.2283 49.3733 49.3364C49.7526 51.1477 50.2097 52.9361 50.6302 54.7383C50.7673 55.3207 51.0552 55.7196 51.6494 55.981C52.8286 56.4992 53.2765 57.8566 52.76 59.0488C52.5315 59.5808 52.1064 59.8376 51.5534 59.8467C48.8294 59.8926 46.11 59.9247 43.3859 59.9568C43.1848 59.9568 42.9837 59.9339 42.7872 59.9063C41.5715 59.7275 41.1647 59.1039 41.4755 57.907C41.6674 57.1779 42.1154 56.6276 42.7461 56.2516C43.0614 56.0636 43.1757 55.848 43.1117 55.4949C42.8329 53.9267 42.5633 52.3584 42.2799 50.7901C42.2525 50.6387 42.1428 50.5058 42.0514 50.3223L42.0559 50.3132ZM37.1244 49.4373C37.2615 49.4602 37.3072 49.4832 37.33 49.4694C38.5824 48.6486 39.8392 47.8415 41.0733 46.9931C41.2378 46.8831 41.3886 46.5713 41.3566 46.3832C41.1647 45.2139 40.9225 44.0583 40.6939 42.8936C40.6208 42.8752 40.5522 42.8569 40.4791 42.8431C39.0988 44.8929 37.9059 47.039 37.1244 49.4373Z'
          fill={RED}
        />
        <path
          d='M80.8 42.0819C81.8283 42.0819 82.8064 42.0819 83.7891 42.0819C84.3193 42.0819 84.854 42.036 85.3796 42.0911C87.2215 42.2745 88.7755 41.5821 90.1055 40.4265C91.6549 39.0875 93.0992 37.6292 94.58 36.2168C94.6714 36.1297 94.7171 36.0013 94.7857 35.8913C94.8405 35.9188 94.9 35.9463 94.9548 35.9738V51.5054C94.7491 51.2165 94.5663 50.9643 94.3926 50.7075C93.09 48.7403 91.367 47.2224 89.2828 46.1631C88.5927 45.8146 87.7563 45.645 86.9747 45.6129C85.0962 45.5349 83.2086 45.5899 81.3256 45.5853C81.1473 45.5853 80.9645 45.5853 80.736 45.5853C80.7223 45.81 80.6949 45.9843 80.6994 46.1585C80.7634 48.9787 80.832 51.8035 80.9097 54.6237C80.9325 55.4353 81.2022 55.7334 81.9837 55.9122C82.1071 55.9398 82.2351 55.9719 82.3585 55.9902C83.6657 56.1828 84.397 57.2834 84.0725 58.5673C83.9491 59.0488 83.4783 59.3836 82.7882 59.4065C81.9837 59.434 81.1793 59.4249 80.3749 59.4203C77.1207 59.4111 73.8666 59.3973 70.6169 59.3836C69.6937 59.379 69.1361 58.9617 68.9167 58.1317C68.7019 57.3109 68.9853 56.6001 69.7348 56.1736C69.9176 56.0682 70.1416 56.0269 70.3518 55.9764C71.2339 55.7701 71.5173 55.4537 71.5904 54.5549C71.9104 50.547 71.9104 46.5392 71.723 42.5221C71.5585 38.9728 71.4853 35.4144 71.3299 31.8651C71.3162 31.5395 71.0786 31.1222 70.8089 30.9296C70.457 30.6728 69.9816 30.5719 69.5474 30.4573C68.7019 30.2371 68.2723 29.7006 68.2997 28.8294C68.3271 28.0131 68.7979 27.5041 69.6663 27.3895C69.9359 27.3528 70.2147 27.339 70.4844 27.339C76.6454 27.3253 82.8019 27.3482 88.9629 27.2702C90.7774 27.2473 92.5964 26.9767 94.4018 26.7199C95.1742 26.6099 95.9146 26.2385 96.6367 26V35.4419C96.3305 35.2722 96.1523 35.1942 96.0014 35.0842C95.3022 34.5889 94.5846 34.1074 93.9127 33.5755C91.3898 31.5807 88.4967 30.8654 85.3385 31.0442C84.301 31.1038 83.2635 31.1956 82.2214 31.2231C81.7278 31.2368 81.4718 31.4157 81.4261 31.9063C81.3073 33.1078 81.1428 34.3092 81.0696 35.5152C80.9462 37.4917 80.8823 39.4681 80.7908 41.4445C80.7817 41.6233 80.7908 41.8022 80.7908 42.0819H80.8Z'
          fill={RED}
        />
        <path
          d='M108.04 74.0027C108.639 75.2224 109.27 76.3597 109.768 77.552C110.782 79.964 111.692 82.4173 112.711 84.8294C113.301 86.2234 114.183 87.4386 115.307 88.4704C116.061 89.1674 116.925 89.626 117.94 89.6856C118.936 89.7406 119.951 89.7636 120.938 89.6581C121.98 89.5435 122.894 89.0941 123.406 87.9293C123.566 88.7089 123.26 89.1904 122.849 89.6122C121.624 90.887 120.102 91.5932 118.379 91.873C115.042 92.4141 112.405 91.0796 110.17 88.7318C108.291 86.7554 106.902 84.4717 105.979 81.8992C105.216 79.776 104.928 77.5611 104.717 75.3325C104.681 74.9335 104.64 74.5346 104.599 74.1035C103.579 73.9797 102.588 73.833 101.838 72.9801C101.838 73.778 101.824 74.4796 101.838 75.1858C101.911 77.9142 101.998 80.6473 102.071 83.3757C102.085 83.9352 102.217 84.3754 102.711 84.7377C103.351 85.2008 103.506 85.8061 103.273 86.4252C103.077 86.948 102.711 87.2736 102.121 87.269C99.9641 87.2552 97.8068 87.2552 95.6495 87.2185C95.3022 87.2139 94.9182 87.1039 94.612 86.9296C93.9813 86.5719 93.8396 85.6915 94.3424 85.1733C94.6486 84.8569 95.0599 84.5588 95.4713 84.4488C96.0563 84.2929 96.262 83.9398 96.2574 83.4262C96.2482 80.5877 96.2254 77.7491 96.1843 74.906C96.1477 72.4665 96.0837 70.0315 96.0289 67.5919C96.0014 66.4547 95.9649 65.322 95.9329 64.1848C95.91 63.396 95.6632 63.1163 94.8588 63.0292C94.3652 62.9787 93.9813 62.7861 93.7619 62.3276C93.346 61.4563 93.6842 60.6905 94.6212 60.4658C94.9868 60.3787 95.3799 60.3557 95.7638 60.3557C99.4202 60.3466 103.077 60.3787 106.733 60.342C108.968 60.3191 110.563 61.3921 111.655 63.1988C112.72 64.9597 113.104 66.9683 112.99 69.0135C112.839 71.6686 111.139 73.4478 108.493 73.9247C108.351 73.9522 108.209 73.9751 108.031 74.0072L108.04 74.0027ZM106.212 71.0312C106.326 70.8707 106.395 70.7881 106.445 70.6964C106.541 70.5176 106.637 70.3433 106.71 70.1553C107.332 68.4815 107.236 66.7802 106.87 65.0744C106.696 64.249 106.171 63.7308 105.44 63.3869C104.37 62.8824 103.237 62.7724 102.076 62.8182C101.683 62.832 101.66 63.0796 101.66 63.3777C101.66 65.1523 101.651 66.9316 101.646 68.7062C101.646 68.9676 101.646 69.229 101.646 69.4904C101.856 69.3666 101.952 69.2382 102.048 69.1098C102.665 68.3164 102.994 68.2477 103.858 68.7521C104.8 69.3069 105.609 70.004 106.212 71.0312ZM103.995 72.3197C104.416 72.3335 104.571 72.1501 104.439 71.774C104.324 71.453 104.205 71.1091 103.991 70.8615C103.79 70.623 103.46 70.49 103.186 70.3112C102.994 70.646 102.738 70.9624 102.642 71.3246C102.597 71.5081 102.793 71.852 102.981 71.9712C103.278 72.1592 103.652 72.2143 103.995 72.3243V72.3197Z'
          fill={RED}
        />
        <path
          d='M70.9049 99.1458C70.073 98.9899 69.2549 98.779 68.6928 97.9811C68.6516 98.0819 68.6059 98.137 68.6105 98.1966C68.6562 101.255 68.7065 104.318 68.7567 107.377C68.7613 107.73 68.871 107.973 69.2778 108.102C70.0273 108.34 70.393 108.977 70.3061 109.716C70.2284 110.372 69.7303 110.858 68.9213 110.871C67.1159 110.903 65.306 110.89 63.4961 110.839C62.7237 110.816 62.3215 110.431 62.1935 109.803C62.0701 109.207 62.3398 108.647 62.9294 108.276C63.0071 108.225 63.0848 108.161 63.1716 108.147C64.0766 108.001 64.1588 107.34 64.1497 106.607C64.104 103.97 64.0583 101.329 64.0126 98.6918C63.9669 96.1468 63.9212 93.5972 63.8709 91.0521C63.8663 90.777 63.8572 90.5019 63.8298 90.2313C63.7688 89.5618 63.4032 89.1842 62.7328 89.0986C62.1387 89.0253 61.7319 88.6492 61.6451 88.099C61.5582 87.5395 61.7913 87.0122 62.3352 86.7966C62.7694 86.627 63.2493 86.5077 63.7109 86.5032C66.5629 86.4756 69.4149 86.5398 72.2623 86.4756C74.9178 86.4206 76.3895 87.9476 77.3813 90.1442C78.1902 91.9372 78.2954 93.831 77.9114 95.7433C77.7103 96.7429 77.1482 97.5271 76.2615 98.0315C75.5988 98.4075 74.904 98.7285 74.255 99.0633C75.0229 101.255 75.7862 103.461 76.5768 105.657C77.0339 106.932 77.4498 108.225 78.0303 109.445C78.8758 111.215 80.183 112.563 82.1666 113.008C84.5844 113.554 86.6776 112.967 88.3002 111.009C88.3413 111.036 88.3779 111.059 88.419 111.087C88.0945 111.555 87.8203 112.073 87.4318 112.485C84.7672 115.306 80.6263 115.783 77.3036 113.769C75.5074 112.678 74.1865 111.174 73.4324 109.276C72.564 107.093 71.8784 104.823 71.2614 102.553C70.9734 101.494 71.0191 100.338 70.9049 99.155V99.1458ZM68.6242 94.9178C69.4286 94.2575 70.2193 94.5372 70.8912 94.8995C71.5493 95.2572 72.0841 95.8533 72.7056 96.3715C73.5649 94.2071 73.6106 92.0747 72.4726 89.9837C72.3811 89.814 72.2349 89.6443 72.0703 89.548C70.9917 88.929 69.8217 88.9657 68.6288 89.0253V94.9178H68.6242ZM70.9049 97.7701C70.7998 97.3345 70.7495 96.8759 70.5667 96.4816C70.4798 96.2981 70.1279 96.1285 69.9131 96.1422C69.7348 96.156 69.4972 96.4311 69.4332 96.6375C69.1864 97.4354 69.808 97.9398 70.9049 97.7701Z'
          fill={RED}
        />
        <path
          d='M41.64 88.1632V90.4239C43.6967 88.5667 45.9089 88.3283 48.3221 89.4242C49.0077 89.7361 49.451 90.2175 49.7572 90.9192C50.685 93.0469 50.5479 95.1838 49.8349 97.307C49.4007 98.6001 48.8797 99.8795 48.2535 101.09C46.9601 103.598 45.4747 105.997 43.7881 108.262C43.5185 108.62 43.3265 109.037 43.098 109.418C44.1035 109.734 45.0405 110.005 45.9637 110.321C47.4491 110.825 48.898 111.477 50.4108 111.857C52.8789 112.476 55.3561 112.371 57.6642 111.174C59.0079 110.477 60.2693 109.624 61.6313 108.799C61.5308 109 61.4622 109.188 61.348 109.34C58.9668 112.605 55.6257 113.912 51.7362 113.852C50.5753 113.834 49.3961 113.334 48.2672 112.939C46.6538 112.375 45.0268 111.917 43.3265 111.779C42.7872 111.738 42.2342 111.825 41.6903 111.857C41.4389 111.871 41.1875 111.899 40.8356 111.931C40.9133 111.669 40.9499 111.486 41.0276 111.312C43.0386 106.808 44.1492 102.053 44.8576 97.2015C45.0268 96.0276 44.9171 94.794 44.8028 93.5972C44.7388 92.9277 44.4097 92.2398 43.6328 92.0931C42.8695 91.9463 42.353 92.4737 41.96 93.0286C41.7314 93.345 41.5623 93.7898 41.5623 94.1796C41.5989 98.5772 41.6766 102.979 41.7451 107.377C41.7451 107.542 41.7451 107.703 41.7451 107.895C41.6263 107.914 41.5212 107.95 41.4206 107.95C39.501 107.95 37.5814 107.95 35.6618 107.95C35.1316 107.95 34.6883 107.771 34.4141 107.299C34.0073 106.598 34.3729 105.942 35.3007 105.662C36.288 105.364 36.2971 105.364 36.2743 104.318C36.1691 99.9208 36.0503 95.5231 35.9543 91.1255C35.9452 90.7036 35.8218 90.5523 35.3922 90.5248C34.702 90.4789 34.3409 90.1442 34.2175 89.5664C34.0941 88.9932 34.3227 88.5438 34.8803 88.3512C35.1728 88.2503 35.4836 88.1815 35.7898 88.1769C37.7094 88.1632 39.629 88.1678 41.6446 88.1678L41.64 88.1632Z'
          fill={RED}
        />
        <path
          d='M78.3868 101.819C78.7204 102.507 79.0586 103.19 79.3877 103.878C79.9133 104.988 80.6583 105.919 81.5861 106.726C82.587 107.597 83.7708 107.804 85.0185 107.707C85.8321 107.643 86.4765 107.171 86.993 106.533C88.7664 104.346 88.9812 101.379 87.5003 98.9899C87.217 98.5313 86.8422 98.0957 86.4217 97.7655C85.0551 96.6925 83.6611 95.6516 82.2534 94.6335C79.182 92.4187 78.5513 89.2546 79.6619 85.9529C80.4481 83.6188 82.2625 82.3486 84.6483 81.9083C86.6365 81.5415 88.6384 81.4727 90.6494 81.7433C90.7408 81.757 90.8322 81.7616 90.9191 81.7799C92.1439 82.0276 92.2536 82.1514 92.2079 83.3895C92.1485 85.0908 92.0662 86.7966 91.9885 88.4979C91.9885 88.5988 91.9383 88.6951 91.9063 88.8189C91.2207 87.9797 90.5991 87.1497 89.9044 86.3794C89.0909 85.476 88.0579 84.8844 86.897 84.5497C86.0652 84.3112 85.4985 84.5359 84.9866 85.2375C83.6246 87.0947 83.9765 89.383 85.8824 90.6578C87.0067 91.4052 88.1676 92.1114 89.3697 92.7259C91.4035 93.7623 92.4959 95.459 93.0489 97.5959C93.8305 100.632 93.6522 103.594 92.2948 106.432C92.0251 107.001 91.6229 107.528 91.1841 107.982C88.8806 110.381 85.9966 111.238 82.7607 110.958C81.7689 110.871 80.8 110.582 79.8219 110.367C79.4928 110.294 79.3191 110.096 79.2734 109.716C78.9764 107.336 78.6519 104.956 78.3365 102.58C78.3045 102.333 78.2862 102.081 78.2588 101.833C78.3045 101.824 78.3502 101.819 78.3959 101.81L78.3868 101.819Z'
          fill={RED}
        />
        <path
          d='M89.0406 73.1818C87.8888 73.7917 86.8422 74.4154 86.0789 75.3692C84.8814 76.8687 83.7617 78.4278 82.6236 79.9732C81.513 81.4773 80.4709 83.0868 78.8438 84.059C74.9406 86.3885 70.9597 86.7966 66.8874 84.3525C65.1232 83.2932 64.2045 81.7662 63.8617 79.8173C63.6287 78.5012 64.593 76.7907 65.6671 76.5156C65.8042 76.4789 65.9505 76.4789 66.1196 76.4606C65.8865 76.7816 65.6534 77.0521 65.4751 77.3594C64.2685 79.4137 65.4523 81.5323 67.0611 82.7888C68.2403 83.7105 69.6708 83.9673 71.1288 84.0728C74.0585 84.2837 76.2889 83.096 77.9343 80.6885C79.4243 78.5058 80.3932 76.0845 81.3439 73.6404C82.6419 70.3112 84.2736 67.1746 86.6502 64.4691C86.7782 64.3223 86.8376 64.0426 86.8102 63.8454C86.7553 63.4877 86.6594 63.1163 86.4811 62.8091C86.3531 62.5844 86.088 62.378 85.8412 62.3001C85.2745 62.1166 84.95 61.7819 84.9728 61.2637C85.0003 60.7226 85.3156 60.4199 85.9784 60.4062C87.4775 60.3741 88.9766 60.3512 90.4711 60.3695C91.3624 60.3787 91.76 60.9381 91.4447 61.6948C91.3624 61.8919 91.1293 62.0754 90.9236 62.1671C90.6768 62.2771 90.5031 62.3643 90.5763 62.6761C91.3578 66.1566 92.0982 69.6509 92.9346 73.1176C93.218 74.3007 93.7253 75.4334 94.1641 76.5798C94.2372 76.7724 94.452 76.9283 94.6212 77.0705C94.8268 77.2447 95.1513 77.3456 95.261 77.5611C95.4301 77.8959 95.5672 78.3086 95.5353 78.6709C95.4941 79.1065 95.0691 79.2716 94.6623 79.2716C92.9849 79.2808 91.303 79.2991 89.6256 79.2349C88.8212 79.2028 88.5653 78.5241 89.0497 77.8592C89.2188 77.6253 89.4336 77.4052 89.6759 77.2539C89.9912 77.0521 90.0644 76.8412 89.9592 76.4835C89.6393 75.4196 89.3559 74.342 89.0314 73.1818H89.0406ZM88.5744 71.3063C88.4281 70.6643 88.2727 69.9994 88.0945 69.229C86.9519 70.2699 86.3074 71.5264 85.5442 72.8654C86.6411 72.3014 87.5963 71.8107 88.5744 71.3063Z'
          fill={RED}
        />
        <path
          d='M97.9302 89.2454V97.7564C98.1678 97.5638 98.3552 97.4124 98.5472 97.2611C99.8589 96.2202 101.244 95.3948 102.999 95.381C104.361 95.3718 105.334 95.9863 105.901 97.1694C106.907 99.2605 107.057 101.462 106.253 103.631C105.805 104.832 105.142 105.983 104.429 107.056C103.364 108.656 102.172 110.165 101.034 111.715C100.974 111.798 100.933 111.894 100.855 112.032C101.55 112.091 102.213 112.077 102.843 112.21C104.201 112.495 105.535 112.866 106.888 113.173C108.662 113.572 110.38 113.421 111.989 112.531C112.441 112.279 112.839 111.926 113.301 111.655C112.766 112.806 112.012 113.751 110.769 114.178C109.146 114.732 107.469 114.829 105.791 114.494C104.416 114.219 103.058 113.847 101.687 113.549C100.677 113.329 99.6578 113.297 98.6569 113.655C98.5929 113.678 98.5152 113.655 98.3232 113.655C98.5152 113.27 98.6797 112.939 98.8443 112.614C99.7264 110.871 100.736 109.179 101.468 107.372C102.45 104.942 102.446 102.356 102.071 99.7878C101.888 98.5176 100.659 97.9077 99.571 98.7194C99.1185 99.0587 98.6569 99.3934 98.2547 99.7878C98.0719 99.9667 97.9256 100.283 97.9302 100.535C97.9805 102.897 98.0764 105.258 98.1404 107.625C98.1496 108.014 98.369 108.17 98.666 108.308C99.1916 108.551 99.507 108.936 99.5024 109.546C99.4979 110.151 99.2054 110.573 98.6066 110.587C96.9293 110.628 95.2473 110.615 93.5654 110.587C93.1449 110.582 92.7792 110.362 92.665 109.913C92.5462 109.445 92.6238 108.996 92.9758 108.638C93.09 108.523 93.2317 108.395 93.3825 108.368C94.2784 108.198 94.3012 107.524 94.2921 106.831C94.2327 101.883 94.1687 96.9355 94.1138 91.9876C94.1138 91.5795 93.9767 91.3961 93.5517 91.3548C93.0672 91.3043 92.7015 90.8366 92.6558 90.3184C92.6101 89.7727 92.9529 89.5251 93.3917 89.3646C93.5791 89.2958 93.7847 89.25 93.9813 89.25C95.2793 89.2408 96.5773 89.2454 97.9302 89.2454Z'
          fill={RED}
        />
        <path
          d='M74.1271 72.4802C74.2276 74.8235 74.3099 77.1484 74.447 79.4688C74.4607 79.6889 74.7624 79.9273 74.9818 80.0924C75.5759 80.5372 75.713 80.8399 75.5485 81.491C75.4342 81.9404 75.1554 82.1835 74.6892 82.1881C72.861 82.1881 71.0328 82.2064 69.2047 82.1743C68.2586 82.156 67.7787 81.5231 68.1123 80.739C68.2448 80.4272 68.5374 80.1108 68.839 79.964C69.4926 79.6476 69.6343 79.1386 69.6251 78.4874C69.5749 74.9106 69.5429 71.3384 69.5017 67.7616C69.488 66.5326 69.4743 65.3037 69.4606 64.0747C69.4515 63.1851 69.3235 63.02 68.4825 62.7907C67.9843 62.6577 67.5958 62.1579 67.6004 61.6581C67.6004 61.1766 67.9112 60.8556 68.5099 60.7226C68.6013 60.7043 68.6882 60.6676 68.7796 60.6722C71.9378 60.6859 75.1143 60.4108 78.2497 60.9152C81.0239 61.36 82.258 62.6669 82.7516 65.4871C82.8933 66.285 82.8704 67.1242 82.8293 67.9404C82.7013 70.247 79.959 72.5765 77.3858 72.4894C76.3483 72.4527 75.3063 72.4848 74.1271 72.4848V72.4802ZM74.1088 66.3584C74.1088 66.3584 74.1408 66.3584 74.1591 66.3584C74.1591 67.569 74.1728 68.775 74.1499 69.9856C74.1408 70.4075 74.3282 70.6001 74.7121 70.6368C75.1646 70.6781 75.6216 70.7285 76.0741 70.7331C77.6783 70.7423 78.5376 69.8847 78.5193 68.2568C78.5056 66.6977 78.0668 65.2303 77.4681 63.7996C77.1847 63.1255 76.682 62.699 75.9964 62.511C75.5759 62.3964 75.1371 62.3597 74.703 62.2909C74.2688 62.2175 74.0814 62.3597 74.0905 62.8458C74.1225 64.0151 74.0996 65.189 74.0996 66.3584H74.1088Z'
          fill={RED}
        />
        <path
          d='M20.7712 89.0436V82.2706C20.9905 82.3486 21.1277 82.3761 21.2419 82.4449C22.284 83.0456 23.4038 83.2703 24.6058 83.2565C27.6955 83.2152 30.7851 83.2198 33.8748 83.2061C34.8071 83.2061 35.7304 83.1465 36.5531 82.5274V87.7367C36.3702 87.5303 36.2514 87.4386 36.1874 87.3148C35.7852 86.549 35.0768 86.2326 34.2998 86.1776C33.3034 86.1042 32.2979 86.1592 31.1645 86.1592C31.1645 87.0351 31.1645 87.888 31.1645 88.741C31.1645 93.4367 31.1645 98.1324 31.1645 102.824C31.1645 103.571 31.2513 104.254 32.0054 104.708C32.4579 104.983 32.6224 105.511 32.5722 106.061C32.5082 106.795 32.0511 107.249 31.3199 107.253C29.5831 107.267 27.8463 107.276 26.1095 107.24C25.7484 107.23 25.3508 107.088 25.04 106.896C24.4778 106.542 24.3544 105.781 24.7566 105.254C24.9714 104.97 25.2548 104.672 25.5702 104.543C26.2146 104.277 26.3289 103.805 26.3152 103.195C26.2557 100.517 26.2055 97.8435 26.1643 95.1655C26.1278 92.7809 26.1003 90.401 26.0729 88.0164C26.0729 87.7413 26.0729 87.4661 26.0729 87.191C26.0592 86.0721 25.7576 85.8337 24.6881 86.2601C23.3718 86.7875 22.1469 87.4753 21.2602 88.6401C21.1505 88.7822 21.0317 88.9198 20.9128 89.062C20.8671 89.0528 20.8169 89.0482 20.7712 89.039V89.0436Z'
          fill={RED}
        />
        <path
          d='M61.7136 95.0875V102.791C61.5856 102.521 61.4851 102.324 61.3891 102.117C60.5436 100.251 59.0033 99.3613 56.9786 99.586C56.0599 99.6869 55.5023 100.329 54.9813 101.003C54.931 101.067 54.9127 101.177 54.9264 101.26C55.1915 102.819 55.3423 104.438 57.1751 105.084C58.9485 105.708 60.603 105.286 61.9376 103.809C62.3261 103.378 62.678 102.92 63.1807 102.512C62.9979 104.126 62.8151 105.745 62.6277 107.414C60.9001 106.57 59.1679 106.896 57.4493 107.024C54.8944 107.212 52.9428 106.272 51.7408 103.975C50.1823 100.994 49.8075 97.9169 51.2929 94.7894C52.1384 93.0148 53.6284 91.9097 55.4155 91.1989C56.4941 90.7724 57.6185 90.9604 58.7245 91.043C60.0728 91.1439 61.3845 91.0613 62.6917 90.3505V94.9591C62.454 94.7436 62.2804 94.6014 62.1204 94.4409C61.4028 93.7347 60.5664 93.2395 59.5929 92.9644C57.879 92.4783 56.3022 93.1203 55.4932 94.7161C55.2327 95.2297 55.1047 95.8166 54.9264 96.3715C54.7802 96.8301 54.9904 97.1281 55.3652 97.3803C56.7729 98.3342 58.9302 98.0361 60.1642 96.6925C60.6533 96.1606 61.1103 95.6057 61.5856 95.06C61.6268 95.0738 61.6679 95.0829 61.7136 95.0967V95.0875Z'
          fill={RED}
        />
        <path
          d='M118.379 103.19C118.379 104.511 118.379 105.772 118.379 107.029C118.379 107.304 118.415 107.579 118.415 107.849C118.406 108.45 118.374 109.014 119.055 109.386C119.288 109.514 119.43 110.064 119.384 110.385C119.325 110.798 118.872 110.83 118.488 110.825C117.245 110.825 116.002 110.825 114.763 110.825C114.178 110.825 113.858 110.569 113.79 110.078C113.712 109.523 114.009 109.253 114.507 109.175C114.91 109.11 114.873 108.822 114.873 108.556C114.882 106.946 114.887 105.332 114.873 103.722C114.859 101.888 114.832 100.058 114.795 98.2287C114.786 97.6417 114.745 97.0593 114.704 96.4724C114.672 96.0459 114.535 95.7066 114.027 95.6194C113.648 95.5552 113.415 95.2755 113.424 94.8766C113.429 94.4501 113.708 94.2208 114.096 94.1153C114.201 94.0878 114.311 94.0741 114.421 94.0741C116.464 94.0649 118.511 93.9778 120.55 94.0741C123.022 94.1841 124.27 95.2572 124.905 98.2378C125.225 99.7465 124.713 101.021 123.699 102.113C123.095 102.764 122.286 103.016 121.436 103.103C120.71 103.177 119.978 103.172 119.252 103.2C118.982 103.209 118.712 103.2 118.374 103.2L118.379 103.19ZM118.479 95.5507C118.452 95.6057 118.433 95.6194 118.433 95.6378C118.424 97.6325 118.415 99.6273 118.42 101.627C118.42 101.741 118.525 101.911 118.63 101.966C119.937 102.672 121.486 101.842 121.601 100.361C121.697 99.1779 121.546 98.0315 121.007 96.9447C120.486 95.8946 119.663 95.4131 118.479 95.5552V95.5507Z'
          fill={RED}
        />
        <path
          d='M109.503 91.6391C110.307 91.6391 111.111 91.6116 111.911 91.6483C112.611 91.6804 112.999 92.0059 113.077 92.515C113.154 93.0148 112.876 93.5467 112.263 93.7256C111.728 93.8815 111.623 94.2162 111.61 94.6519C111.532 97.0869 111.436 99.5218 111.395 101.957C111.367 103.718 111.413 105.479 111.418 107.235C111.418 107.735 111.495 108.125 112.026 108.4C112.382 108.588 112.684 108.991 112.862 109.372C113.196 110.069 112.775 110.775 112.012 110.784C110.389 110.807 108.762 110.784 107.135 110.715C106.308 110.679 105.919 109.743 106.395 109.019C106.523 108.826 106.696 108.606 106.897 108.533C107.533 108.303 107.578 107.831 107.565 107.262C107.487 103.048 107.423 98.834 107.355 94.6198C107.345 94.1337 107.131 93.8356 106.637 93.7347C106.093 93.6247 105.86 93.2257 105.81 92.7076C105.755 92.1573 106.075 91.8179 106.555 91.7079C107.012 91.6024 107.492 91.5932 107.962 91.5749C108.474 91.5566 108.986 91.5703 109.494 91.5703C109.494 91.5932 109.494 91.6162 109.494 91.6345L109.503 91.6391Z'
          fill={RED}
        />
      </g>
    </svg>
  )
}

export default AJFPartnershipSVG
