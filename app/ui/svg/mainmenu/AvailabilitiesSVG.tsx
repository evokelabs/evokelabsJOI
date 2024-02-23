import { ORANGE, RED, TEAL } from '@/app/libs/UIConstants'
import React from 'react'

const AvailabilitiesSVG = ({ primaryColor }: { primaryColor: string }) => {
  return (
    <svg width='70' height='72' viewBox='-1 0 70 70' fill='none'>
      <g clipPath='url(#a)'>
        <path
          fill={primaryColor}
          d='m43.06.36.8.62V-.56h.07v1.74c.01.1.1.2.16.31.1-.1.26-.2.28-.32.03-.3 0-.6.1-.9.02.32.02.65.07.98.02.12.16.3.27.32.97.17 1.95.28 2.92.47.84.17 1.66.42 2.51.64v-1.2h.12v.73c-.03.44.21.67.57.82.57.25 1.14.5 1.7.77.1.05.16.23.24.35-.14 0-.3.02-.42-.02a43.7 43.7 0 0 1-1.93-.75c-.21-.09-.4-.25-.62-.39l-.13.17c-.1-.08-.18-.17-.28-.24-.13-.1-.25-.24-.4-.27-1.23-.22-2.47-.44-3.7-.63-.65-.1-1.3-.14-1.96-.2-.18 0-.37.04-.6.07l.06.32-11.82-.39.03.09.55-.32c-.23-.06-.46-.18-.68-.16-1.03.1-2.06.25-3.1.32-1.1.08-2.2.04-3.3.11-1.92.14-3.8.5-5.57 1.27a.58.58 0 0 1-.44.01c.1-.11.18-.29.3-.33.75-.25 1.5-.58 2.27-.7 2.46-.34 4.92-.63 7.38-.9.42-.05.53-.17.5-.56-.04-.33-.02-.67-.03-1.01-.02-.42.2-1-.7-.88.92-.14.67-.76.67-1.27l-.02-.73c0-.33-.04-.69.5-.58.07.02.19-.18.28-.28l-.01.01v2.17l1.33-.27c-.23.11-.45.25-.69.32-.39.11-.65.27-.59.75.03.17-.03.36-.06.55l.5.1c-.2.1-.52.16-.53.27-.07.4-.03.8 0 1.2 0 .04.18.1.28.1.58-.02 1.15-.06 1.73-.07.38 0 .46-.19.46-.53-.04-2.05-.05-4.1-.07-6.15-.01-.87.14-1.07.98-1.31.2-.06.4-.06.59-.14.14-.06.3-.17.37-.3.03-.06-.16-.23-.25-.34h4.29c-.42.12-.85.24-1.27.39-.13.04-.24.16-.36.25.13.06.27.2.4.19.74-.07 1.48-.18 2.22-.25.25-.02.5.04.76.07l.02.22c-.24.12-.47.26-.73.34-.37.12-.53.29-.51.72.05 1.32.05 2.65.04 3.97-.01.44.08.75.56.84.09.01.17.07.26.12-.04.03-.06.06-.08.06-.73 0-.77 0-.8.73-.05 1.47-.21 1.14 1.06 1.27 1.27.12 2.55.19 3.83.27.11 0 .23-.07.35-.1-.05-.13-.06-.29-.14-.39-.18-.22-.38-.4-.58-.6Zm-6.37.6c-.44.14-.96-.47-1.51 0h1.52ZM34.62.91l-.33-.45c-.06.53-.05.55.33.45Z'
        />
        <path
          fill={primaryColor}
          d='M42.17-7.74c.35.38.75.72 1.04 1.14.24.37.16.74-.32.95-.12.05-.25.25-.24.38 0 .55.06 1.1.1 1.65-.7.16-.82.06-.83-.63 0-.32-.06-.65-.05-.97.01-.23.1-.47.14-.66v-1.07l.45-.2-.62-.45.24-.14h.09ZM55.85-7.74c-.03.41-.09.83-.1 1.24V10.6c0 .25-.1.55.3.63.03.01.04.18.06.27l-.22.06c-.08-.3-.24-.58-.24-.87L55.64-7.3l-.03-.44h.24ZM43.95-7.74v4.79h-.08v-4.8h.08ZM33.5-7.74c-.45.09-.9.24-1.34.25-.43.02-.66.66-1.26.3l1.23-.55h1.37ZM40.63-7.74l.47.52c-.13.04-.3.15-.4.1-.35-.1-.67-.28-1-.44l.04-.18h.89ZM46.6 43.6c.03.67.09 1.34.1 2.02 0 .5-.04 1 .61 1.1-.46 1.15-.18 2.28-.15 3.4 0 .12.23.28.39.33.77.25.9.39.9 1.2l-.06 8.15c0 .33-.11.47-.45.44l-1.78-.09-.02.14c.08.02.17.07.26.07.47.04.95.04 1.43.1.2.02.38.18.58.22.16.04.34-.01.49.04l1.42.2v.05l-4.15-.23-.04.23c-.07.47.02.76.62.7.44-.04.9.06 1.33.1l-.37.06c1.05.14 1.95.25 2.84.38.17.02.36.06.5.16.07.05.1.24.08.36 0 .07-.12.15-.2.19-.12.05-.25.07-.5.13.47.2.86.4.7.9-.03.14-.16.32-.28.35-.63.16-1.27.27-1.9.4-.4.1-.47-.1-.42-.45.04-.23.04-.46-.03-.71l-.07.37c-.14.9-.13.95-1.06 1-1.73.11-3.47.17-5.2.23-.53.01-1.12-.57-1.22-1.1-.06-.27-.2-.53-.26-.7.14-.43.31-.83.37-1.24.05-.37.17-.49.53-.46.8.07 1.59.12 2.38.17h.4v-.15c-.15-.01-.31-.03-.48-.03-.78-.04-1.56-.06-2.34-.11-.15-.01-.28-.17-.42-.26.14-.09.28-.26.41-.26.7.04 1.4.12 2.1.18.2.02.4 0 .56 0 .13-.26-.54-.3-.05-.61L43 60.45v-.04h1.25l.02-.14c-.14-.04-.3-.1-.44-.1-.8-.03-1.62-.05-2.43-.06-.3 0-.43-.14-.43-.45l-.03-3.23c0-.3-.05-.59-.05-.88l.06-2.13-.03-.49-.4.37-.13-.13c.47-.39.92-.8 1.41-1.16.68-.5 1.4-.94 2.1-1.44.1-.08.19-.38.13-.5-1.9-3.5-2.66-7.33-3.3-11.2-.34-2.05-.79-4.09-1.07-6.14-.14-1.02-.03-2.07.07-3.15.1.23.21.45.26.69.12.6.26 1.19.29 1.8.04 1.12.75 1.99 1.1 2.99.38 1.09.72 2.2.93 3.32.14.75.02 1.55.03 2.32 0 .16.05.32.08.47l.2.02.32-1.56c.63.47.7.97.34 1.66-.14.26-.28.53-.36.81-.05.2 0 .4 0 .61l.52-.19v.03l.08.63c.14-.2.34-.37.4-.58.17-.63.49-1.15.91-1.62.06-.06.07-.17.1-.26.1-.2.22-.4.31-.6a.38.38 0 0 0 .01-.2l-.32-2.7a.65.65 0 0 1 .14-.41c.16-.21.04-1.15-.18-1.3-.24-.14-.57-1.29-.44-1.64.16-.4.05-.64-.29-.88-.14-.1-.24-.35-.27-.54l-.4-3.9a1.14 1.14 0 0 0-.24-.49c-.19-.26-.41-.5-.6-.76-.1-.12-.24-.34-.2-.42.4-.73-.34-1.24-.35-1.9-.01-.68-.16-1.36-.25-2.04l-.01-.08c-.1-1.18-.44-2.15-1.78-2.44-.4-.1-.8-.34-1.16-.56a3.8 3.8 0 0 1-1.52-1.47c-.23-.43-.59-.8-.9-1.2.52-.4.75-.98.67-1.74-.15.06-.25.1-.38.13.07-.77 0-1.93-.77-2.58.53.86.64 1.65.64 2.27l-.16.02c-.01-.07-.04-.14-.04-.2-.02-1-.24-.98-1.07-1.34-.3-.13-1.57-.13-2.09.83-.12.3-.15.62-.34.94-.05-.52-.33-1.57.56-2.52 0 0-.56.41-.78.95-.22.53 0 2 0 2l-.04.02c-.01-.08 0-.16-.04-.23s-.11-.15-.18-.16c-.05-.01-.15.06-.18.12-.16.32.05 1 .41 1.24l.06-.34.26.09.1-.14.22 1.15-.42-.54c-1.05.6-2.1 1.16-3.13 1.77-1.09.64-2.01 1.44-2.63 2.56-.1.18-.13.4-.16.62-.18 1.13-.34 2.26-.5 3.39l-.04.32.46-.06.14-1.55h.04c0 .41.05.83-.01 1.23-.04.25-.19.53-.37.72a6.35 6.35 0 0 0-1.9 4.28c-.03 1.1-.23 2.2-.36 3.31l-.44 3.3c-.06.48-.08.97-.1 1.46-.01.2 0 .4.05.6.08.31.35.59 0 .95-.08.1.05.5.18.7.57.82 1.17 1.63 1.77 2.44.27.36.37.09.44-.11l.57.02c-.05-.2-.06-.43-.16-.61-.39-.68-.87-1.34-.45-2.18.02-.06.07-.1.16-.22.05.27.08.48.14.68.02.07.12.12.18.19.06-.08.17-.15.18-.23.02-.2.02-.4 0-.6a11.6 11.6 0 0 1 .57-4.55c.1-.32-.05-.7.03-1.03.15-.61.43-1.19.57-1.8.11-.47.07-.97.12-1.46.01-.13.13-.24.2-.36.09-.14.28-.35.24-.4-.42-.57.16-.68.43-1.02 0 1.42.17 2.77-.04 4.07-.58 3.6-1.23 7.21-2.04 10.78-.46 2.01-1.26 3.95-1.93 5.92-.02.09-.16.14-.25.2-.08-.12-.23-.23-.24-.36-.14-1.2-.27-2.41-.36-3.62-.05-.67-.01-1.35-.13-2.04-.04.14-.1.28-.1.42 0 1.54-.01 3.08.03 4.62 0 .36.21.71.32 1.07.05.18.1.37.11.56.1.78.74 1.47 1.53 1.57.1.01.28-.18.3-.3.05-.26.02-.54.02-.91.75.4 1.4.72 2.02 1.09.09.05.14.34.08.46-.6 1.24-.05 2.47-.01 3.7 0 .12.07.26.04.36-.3.9-.32 1.8-.1 2.71 0 .05-.26.23-.4.23-1.14.06-2.29.08-3.43.12-.34.01-.68.03-1 .09-.4.06-.52-.12-.5-.47v-.76l-.04.11c-.03.8-.44 1.2-1.24 1.2-.26 0-.52-.06-.77-.03-.55.07-.7-.15-.7-.7.03-3.58.02-7.16.15-10.74.01.14-.02.33.06.42.16.18.39.3.59.45.08-.16.22-.32.22-.49.02-1.42.03-2.83.03-4.25.02-5.12.1-10.24.05-15.36-.03-3.3-.24-6.6-.36-9.89-.02-.56.01-1.13-.03-1.7-.2-2.75.09-5.5.09-8.25 0-.6-.32-.73-.73-.85-.06-.02-.3.26-.3.41-.05.76-.05 1.52-.06 2.27l-.05 10.53c0 .08 0 .16-.07.24v-17l-1.38.56c.95.42.57 1.1.58 1.7.05 2.87.13 5.75.15 8.63.02 4.48 0 8.96-.08 13.46-.07-.9-.21-1.8-.21-2.7 0-3.13.03-6.27.06-9.4l.09-5.14v-1.98h-.14l-.1.78h-.07V9.15h-.11l-.09.76a5.62 5.62 0 0 1-1.87-1.72c-.03-.04.03-.16 0-.2-.07-.16-.18-.3-.28-.44-.06-.08-.14-.14-.2-.21.08-.04.16-.09.24-.11l.56-.12c.27.37.53 1.02 1.28 1.15-.8-.8-.81-.95-.2-2.17l-.87.73c.06-.54.6-1.03 1.05-1.02.04 0 .1 0 .14-.04.96-.82 2.18-.99 3.34-1.22a63.18 63.18 0 0 1 15.57-1.21c2.14.1 4.27.37 6.4.56.07 0 .13.03.2.08-1.2-.02-2.38-.2-3.52-.04.09.4.16.66.2.94.01.05-.12.11-.19.17-.05-.07-.12-.13-.17-.21l-.07-.24-.2.12c-.37-.52-.98-.22-1.48-.47v.91h.6c-.67.04-.68.5-.67.99.02.93.02 1.86 0 2.8 0 .38.14.5.5.46.43-.05.86-.05 1.3-.1.68-.05.89-.27.9-.97.02-.51 0-1.02.11-1.55.04.08.1.15.1.23 0 .52.03 1.05-.02 1.58-.05.56-.36.84-.93.87-.5.01-1.02-.02-1.53 0-.14 0-.27.1-.4.17.12.04.25.13.37.13.75-.01 1.5-.06 2.26-.07.3 0 .42-.1.41-.4l-.06-3.6c0-.2.05-.38.08-.57l.17.01c.02.16.05.32.05.48l-.01 3.56c0 .39.1.55.51.58.95.06.96.08.94-.86l-.1-3.97c0-.1.01-.2.08-.29l.17 1.01.07-.03c-.03.17-.1.34-.1.5-.01 1.07-.01 2.14.02 3.2 0 .17.17.32.26.48.09-.15.24-.3.24-.45.03-1.2.02-2.4.12-3.6v4c0 .31-.15.4-.42.42-1.57.09-3.15.2-4.72.26-.36.01-.46.13-.4.45.02.15.05.29.06.44.11.96.11.96 1.1 1.08.38.05.78.07 1.15.2.18.05.3.3.43.47-.16.08-.32.2-.48.21-.6.03-1.21.03-1.82.03-.26 0-.43.05-.4.35l.2 2.9c0 .1-.08.2-.07.3.01.17.01.44.1.49.64.3.86.95 1.23 1.46l.16.22c.29-.04.48-.1.67-.1.36 0 .7-.4.7-.9l.07-4.9c0-.22.05-.45.08-.67h.18c.03.16.08.32.09.49l.05 7.94c0 .37.08.66.4.91.19.16.29.44.4.68.18.36.31.74.5 1.09.07.13.3.32.35.3.24-.12.5-.28.65-.49.08-.11-.01-.38-.09-.56-.02-.04-.27.04-.4.01-.15-.03-.4-.16-.4-.2.06-.23-.21-.68.22-.67.72 0 .74-.39.74-.93.01-3.48.06-6.95.08-10.42 0-.38.1-.55.48-.54.1 0 .2-.04.3-.07l-.05-.08c-.8.11-.73-.4-.7-.93.02-.84.01-1.68.01-2.51 0-.78 0-.78.54-1.23l-.55-.23.05-.1.55.2-.34-.25c.07-.05.14-.12.21-.15.08-.03.17 0 .24-.04.85-.33.94-.26.94.68l.01 3.69c0 .15.07.3.1.42-.06.15-.17.3-.17.46l.06 10.69c0 .13.03.26.05.46.14-.1.27-.15.3-.23.18-.54.49-1.09.5-1.64.05-1.66 0-3.32-.03-4.98 0-.23-.1-.46-.16-.74l.37-.05v.4c0 1.17-.03 2.33-.04 3.5 0 .72 0 1.44.07 2.2.45-.72.3-1.9 1.67-1.92-.12.16-.17.27-.26.33-.42.3-.57.7-.53 1.2.09 1.08-.52 1.77-1.31 2.36a.98.98 0 0 0-.36.44c-.12.4-.17.8-.25 1.21-.05.3-.05.58.37.59.08 0 .16.08.26.15-.07.05-.11.12-.14.1-.63-.15-.59.26-.58.67.04 2.62.06 5.24.12 7.86 0 .41.21.82.32 1.23l.15-.02v-3.25h.11l.11 2.32-.1-.19v10.57c0 .14-.07.29-.1.43v-1.86 1.85ZM22.74 26.99l.3-.01V12.13h.2c.02.12.06.25.05.37-.03.2-.12.4-.12.61.02 1.9.06 3.78.07 5.67.02 4.19.05 8.38.02 12.56 0 .78.26 1.23 1.1 1.5v-1.98c-.05-1.86-.14-3.73-.16-5.6-.03-2.32 0-4.64 0-6.97 0-.25.05-.5.08-.75l.2.01v7.27c.9-.19 1.06-.37 1.07-1.16 0-.27 0-.54.02-.8l.17-1.23.12.02v1.84c.1-.58.08-1.16.18-1.73.1-.55.3-1.08.47-1.61.02-.06.1-.09.14-.14l.5-.72c.27-.38.48-.82.82-1.1.32-.25.52-.5.5-.9l-.08-2.18c-.01-.33.03-.6.46-.6.09 0 .2-.16.24-.27.04-.1.03-.24.05-.48.23.44-.22.97.41 1.12l-.26.38.36.05.14 2.86.16.01c.08-.36.2-.72.21-1.08.04-1.08.05-2.16.07-3.24 0-.7 0-.7-.68-.66-.1 0-.18.1-.28.1l-.54-.03.04-.45.04-.56.72.4-.01-1.6c0-.1-.1-.22-.17-.34-.05.13-.13.25-.15.38-.04.28-.05.58-.07.87h-.2c-.02-.43-.06-.86-.07-1.3 0-.27-.12-.38-.4-.37-.22 0-.45-.02-.68-.04.2-.15.4-.26.6-.3.43-.07.55-.29.54-.72-.04-1.27-.04-2.54-.03-3.8 0-.35 0-.66-.33-.7.1-.2.2-.38.26-.59 0-.03-.27-.21-.4-.2-2.3.32-4.61.64-6.92.98-.11.02-.29.16-.3.25-.02.64 0 1.28 0 1.96l1.34-.3c.09.83.23 1.31.43 1.44-.53.83-.58.95-.57 2.06.01.6.11 1.22.13 1.83.05 1.5.1 3.01.11 4.52.02 1.41 0 2.83 0 4.1-.1.18-.22.28-.2.37.13.9-.21 1.81.24 2.75.29.6.05 1.43.04 2.16l.02.92Zm6.97-22.45.16-.19 1.11.39c-.18.15-.45.26-.45.38-.04 1.46-.05 2.91-.04 4.37 0 .1.1.27.18.3.98.3 1.47-.09 1.37-1.08v-.04l-.42-.32c-.08.1-.22.21-.24.33-.03.26 0 .53 0 .8h-.08l-.43-1.53c.25-.01.53-.02.8-.05.1-.01.28-.1.28-.13a.86.86 0 0 0-.15-.37c-.13-.2-.34-.35-.43-.56-.11-.28-.06-.53.36-.5.1 0 .29-.17.29-.26 0-.65-.02-1.3-.07-1.94-.01-.1-.22-.27-.34-.28a13.3 13.3 0 0 0-1.66-.01c-.12 0-.32.22-.33.35-.01.59.03 1.17.04 1.76 0 1.16 0 2.32.02 3.48 0 .15.2.3.3.45.1-.15.29-.3.29-.46.03-1.14.03-2.3 0-3.44 0-.53.31-1.19-.56-1.45Zm-8.74 1.72h-.01c0-.22.03-.44-.01-.65-.03-.17-.15-.33-.23-.5-.27.14-.75.02-.75.5 0 .96.02 1.92.1 2.88 0 .1.34.21.54.27.05.02.22-.13.22-.21.06-.77.1-1.53.14-2.3Zm11.05 3.97c-.32.12-.58.3-.82.28-.64-.05-.79.26-.71.81v.2c-.01 1.13.17 1.27 1.25.92.11-.03.26-.16.27-.25.02-.64 0-1.28 0-1.96Zm-8.45 34.45-.24.06v7.33l.13-1.64c.12-1.69.26-3.37.36-5.06.01-.22-.16-.46-.25-.69Zm22.87.24-.06.02-.06-1.06-.15.01v4.72c.6-1.29.37-2.6.33-4.04l-.06.35Zm-16.1-33.14h-.01c0-.28.02-.57-.02-.84-.01-.14-.15-.26-.23-.39-.12.12-.34.22-.35.35-.06.58-.08 1.16-.07 1.73 0 .1.24.26.38.27.08.01.26-.18.28-.3.04-.27.01-.54.01-.81Zm.25 1.37-.01.14c.07.01.15.03.23.03.53-.07.74.17.67.7-.02.17-.02.35-.02.52v1.1l.2.05c.12-.21.32-.4.34-.62.06-.48.04-.97.03-1.45 0-.1-.08-.24-.15-.26-.42-.08-.86-.14-1.29-.21ZM23 48h-.06v5.3h.07V48Zm27.94 14.63.02-.19-3.31-.52-.03.14 2.3.59-.45-.27 1.47.25ZM23 28.13h-.04v3.41H23v-3.41Zm21.08 33.36.01-.1-2.68-.16v.1l2.67.16Zm2.25-22.76-.08.01v2.9c.06-.09.08-.1.08-.13v-2.78ZM43.47 25.3l.19-.03-.17-.99-.13.02.1 1Zm-4.9-21.38V4h1.23v-.08h-1.23Zm-9.13 11.73-.12.01.03.3.09-.02v-.29Z'
        />
        <path
          fill={primaryColor}
          d='M51.13 45.81c.09-.1.13-.14.15-.18.03-.08.05-.15.15-.21-.1.32-.19.65-.27.98-.05.17-.1.36-.1.54-.01 4.32-.02 8.65-.01 12.97 0 .48-.12.67-.61.58-.44-.08-.88-.1-1.31-.2-.12-.03-.29-.23-.29-.35l.11-10.08c.03-2.64.04-5.27.05-7.9 0-.15 0-.3.12-.45v1.74h.14v-.5c-.02-2.29-.07-4.57-.06-6.85.03-4.12.1-8.23.14-12.35.02-3.87 0-7.75 0-11.63 0-.4.09-.7.52-.84.32-.11.44.02.53.28.2.54.46 1.07.6 1.63.1.39.07.8.08 1.21l-.02 1.62c0 .27-.1.58.28.7.02.01.01.2-.03.29-.09.21-.28.41-.29.62-.02 2.74-.03 5.48 0 8.22l.12 17.58v2.58ZM63.07 62.15c-1.87 0-3.7.05-5.54-.03-.6-.02-1.2-.36-1.79-.58-.08-.03-.16-.18-.16-.28v-8.49c.14.29.22.67.44.8.26.13.65 0 .96.06 1.34.28 2.67-.34 4.02-.03.2.05.45-.02.67-.05l.93-.15V48h.2v9.41h.16l.06-.45c-.01.47.13.95-.32 1.36-.56.5-.46 1.5.1 1.81-.1.06-.2.1-.23.13.12.23.26.42.3.64.03.11-.11.26-.18.39-.1-.1-.25-.16-.3-.28-.28-.52-1-.65-1.54-.15 1.03 0 1.73.45 2.22 1.29ZM59 55.65l.92-.2c.43-.08.64.09.62.54v1.07h.14c.03-.3.1-.62.09-.93-.02-.5.18-.68.67-.65.32.02.65-.03.98-.04-.59-.21-1.15-.4-1.73-.42-.4-.02-.82.16-1.22.29-.15.04-.27.19-.47.33ZM13.21 62.6c-.2.13-.46.2-.6.38-.23.26-.44.56-.53.88-.09.3-.15.52-.46.64-.26.1-.5.27-.72.43-1.1.83-1.2 1.93-.22 2.9.4.4.88.72 1.32 1.06l.51.37H.95l1.38-1.35c1.77-1.68 3.54-3.37 5.33-5.03.21-.2.55-.33.84-.34 1.36-.05 2.73-.04 4.09-.05h.6l.02.12ZM70.67 69.28h-11.4l.42-.31c.57-.5 1.22-.95 1.7-1.53.64-.76.46-1.67-.32-2.27a3.56 3.56 0 0 0-.57-.39c-.5-.25-.9-.48-1.02-1.16-.08-.44-.67-.8-.97-1.12h2.22c.78 0 1.57-.01 2.35.02.23 0 .51.1.68.26 2.25 2.08 4.48 4.17 6.72 6.27.05.04.08.1.19.23ZM37.27 59.16c-.07.94-.07.95-1.04.93-1.3-.03-1.16.17-1.17-1.17l-.02-4.57c0-.13-.02-.26-.04-.45-.23.57-.4.6-.77.22-.12-.12-.27-.2-.44-.34v3.13c0 .93.02 1.85 0 2.78 0 .13-.24.35-.38.36-.54.05-1.08.02-1.62.02-.36 0-.47-.17-.37-.48.63-1.96.79-3.95.72-6-.03-.8.2-1.6.33-2.4.01-.09.18-.23.28-.23 1.38-.02 2.77-.01 4.17-.01v2.48c0 .72-.12 1.46 0 2.16.2 1.23.56 2.44.86 3.65.03.13.1.24.15.37.04.1.11.27.08.3a.74.74 0 0 1-.42.18c-.08 0-.2-.15-.23-.25-.06-.22-.06-.46-.09-.68Z'
        />
        <path
          fill={primaryColor}
          d='M50.07 7.01c.15.27.31.53.5.83l.08-.64.51.74.13-.07c-.24-.73-.41-1.5-.74-2.18-.13-.26-.6-.35-1-.56l-.05 1.03-.07-.1c.03-.92.2-.74-.74-1-.9-.25-1.8-.56-2.7-.8-.42-.1-.86-.1-1.29-.14-.12-.02-.25-.04-.36-.18.7.1 1.4.12 2.08.29 1.68.4 3.36.8 4.98 1.36.53.18 1.03.55 1.61.7.38.11.39.86.11 1.4l.67-.43.1.07c-.26.3-.53.6-.77.9-.11.13-.26.3-.26.44a182.5 182.5 0 0 0-.07 4.16l-.03 8.34v6.32l.03 5.91c0 .16.11.32.17.48.02.06.05.13.05.19-.06.65-.16 1.3-.2 1.96-.02.6 0 1.19.04 1.78 0 .21.12.42.17.64.02.1.04.2.02.3-.07.36-.23.71-.23 1.07.01 4.37.05 8.75.07 13.12 0 .44.17.6.58.64.74.05 1.33-.46 1.33-1.18 0-.44 0-.89.05-1.34v.82l.15 7.86c.01.39-.07.55-.5.53-.6-.02-1.22.02-1.82.03-.33.01-.5-.14-.45-.46.08-.58.19-1.15.28-1.73.06-.3.16-.6.16-.9 0-3.37-.05-6.73-.05-10.1-.01-4.38.03-8.76 0-13.15-.04-4.17-.15-8.34-.23-12.58l-.29.85-.02-.39c.05-1.8.07-3.59.16-5.38.02-.44.33-.86.37-1.3.05-.76 0-1.53 0-2.3l-.04-4.04c0-.45-.48-.73-.9-.58-.5.19-1.02.33-1.53.5-.43.14-.61-.15-.64-.46-.05-.43.03-.88.05-1.37l.52.1Zm2.21-.31c-.08-.41-.88-1.02-1.37-1.04l.25.5.09-.12c.34.22.69.43 1.03.66ZM18.75 19.82c0 5.26-.05 10.51.01 15.76.06 5.24-.22 10.48.12 15.7l.2.02c.02-.18.06-.37.06-.55l-.12-10.81c-.03-2.13-.05-4.26-.06-6.4 0-.48.04-.97.06-1.45l.15-.01c.07 1.07.2 2.13.2 3.2-.05 7.97-.12 15.93-.19 23.9 0 .7-.36 1.02-1.07.97-.47-.04-.94-.07-1.43-.06.54.4 1.46.12 1.7 1.05-.43.1-.9.31-1.34.25-.3-.04-.67-.41-.79-.72a4.7 4.7 0 0 1-.23-1.54c-.02-1.3 0-2.6 0-3.89v-2.3l.65.27c.46-.5-.09-.9-.3-1.47l.42.39c.08-.56.48-.46.85-.5.62-.05.94-.44.94-1.14l.01-9.4c0-.68.02-1.35-.01-2.03-.08-1.46.12-2.91.09-4.38-.04-1.5-.03-3.02-.04-4.53l-.02-4.5V19.8l.14.01ZM8.21 62.22c.54-.55.92-1.05 1.66-1.02.43.02.86 0 1.3 0 .26 0 .32-.12.31-.38-.06-1.64-.11-3.28-.13-4.92 0-.2.22-.41.42-.73.21.4.5.6.14.88-.04.03.01.28.1.35.3.26.63.48.95.71l.24.26c-.03-.33 0-.57-.09-.75-.2-.42-.47-.82-.74-1.2-.07-.12-.23-.16-.35-.25-.14-.11-.49.12-.43-.29l-.67.06-.05-.18c-.67.34-1.33.13-1.98.07-.09-.01-.2-.26-.21-.4a12.5 12.5 0 0 1 .06-1.84v1.45c0 .27.07.36.38.33.74-.1 1.48-.18 2.22-.17.34.01.68.3 1.03.4.35.1.71.17 1.07.2.5.03 1 .04 1.49 0 .13 0 .33-.18.35-.3.08-.4.08-.8.18-1.2l.03.43c0 2.38 0 4.76-.02 7.14 0 1.05-.01 1.07-1.08 1.24-.47.07-.96.09-1.45.1l-4.12.01h-.6ZM20.53 61.8c.52-.07 1.04-.17 1.57-.2 1.78-.1 3.57-.17 5.36-.26l.48-.01c.27-.03.41.05.6.3.18.27.6.37.91.55l.02-.21c-.3.17-.6.33-.88.53-.03.02.15.32.21.46-.02.25-.08.5-.07.74.02.37-.78 1.4-1.13 1.39-2.9-.11-5.8-.15-8.6-1.02a1.25 1.25 0 0 1-.55-.31c.28-.08.55-.18.84-.24.32-.06.65-.05.96-.12.27-.06.72-.05.37-.56-.04-.06 0-.18.01-.35.68-.07 1.38-.12 2.06-.22.43-.06.85-.25 1.28-.3.29-.03.6.11.9.17l.03-.15-.34-.1 3.67-.24v-.12l-7.68.41-.02-.14Zm2.06 2.68h.06V63.2h-.06v1.28Zm.16-.46h.03v-.67h-.03v.67ZM37.64 61.93l.66 1.44c-.08.43-.17.95-.3 1.47-.02.11-.2.27-.32.27-1.93.05-3.87.08-5.81.09-.12 0-.27-.22-.36-.37-.05-.08.03-.24 0-.35a1.88 1.88 0 0 1 .4-1.77c.1-.13-.03-.46-.06-.78h5.8Z'
        />
        <path
          fill={primaryColor}
          d='M15.45 62.26c-.29.16-.48.22-.63.35-.12.1-.18.28-.29.4-.1.12-.22.24-.36.31-.12.07-.27.08-.42.18.5-.2.61.2.88.42.38.32.87.56 1.35.71 1.32.42 2.68.6 4.1.56 1.47-.03 2.95.2 4.43.3.86.06 1.72.09 2.58.16.12 0 .22.17.33.25.12.08.24.22.36.22h3.26c.13 0 .25 0 .38.12-.64.05-1.3.15-1.94.14-2.83-.05-5.66-.06-8.48-.23-1.74-.1-3.48-.42-5.2-.72A5.01 5.01 0 0 1 12.95 64c-.44-.45-.4-.71.14-1.05a4.49 4.49 0 0 1 2.36-.7ZM2.39 5.53C2.93 6.1 3.34 6.6 3.8 7c.24.2.6.39.9.4 1.51.03 3.02 0 4.53 0 .25 0 .5.1.74.14l-.03.16H4.26c.14.23.21.4.32.53l3.72 4.6c.05.06.03.2.02.3l-.14.98c-.38-.44-.72-.85-1.07-1.24-.17-.19-.38-.34-.54-.54-.1-.15-.12-.37-.23-.51-.24-.32-.52-.62-.8-.92-.3-.36-.6-.72-.94-1.05-.1-.1-.3-.08-.46-.13l-.92-.33.02-.17.5-.23c-.3-.32-.58-.67-.92-.96a1.16 1.16 0 0 1-.44-1.05c.03-.43 0-.85 0-1.45ZM1.27 66.94l-.18-30.82h.22v29.75c.34-.22.54-.33.72-.48a59.5 59.5 0 0 0 1.54-1.32c.52-.47.53-.47.99.02l-.2-.58c.26-.25.5-.5.96-.27.15.08.41-.08.77-.16l-4.68 3.94-.14-.08ZM10.97 55.8v3.76c0 .57-.21.7-.76.55a7.1 7.1 0 0 0-1.2-.2c-.27-.03-.43-.1-.43-.4v-3.84c.16.92.28 1.01 1.26 1.14.39.06.71-.27 1.13-1ZM67.83 52.42c-.57-.08-.67 0-.66.62v9.43c0 .17-.06.34-.1.51l-.14-.02-.03-.47v-9.6c0-.8 0-.77.8-.83.36-.02.7-.24 1.04-.36a.4.4 0 0 1 .24-.02c.15.06.28.13.41.21.1.06.24.16.23.21-.03.1-.13.2-.23.28-.04.04-.13.02-.2.03-.9.18-1.11.42-1.11 1.35l-.02 9.93c0 .15-.01.3-.12.46-.14-3.91-.17-7.82-.11-11.73ZM32.62 50.76c.17-.46.31-.9.51-1.3.06-.11.3-.19.44-.18 1.02.04 2.04.1 3.06.16l.4.04-.18-1.94.08-.01c.06.93.13 1.86.18 2.8 0 .08-.15.25-.24.26-1.37.09-2.74.16-4.11.23-.05 0-.1-.04-.14-.06ZM54.74 65.47l.34-.2v-.06l-3.4.44-.01-.1 3.12-.45c.22-.25.32-.42.47-.52.25-.17.55-.29.8-.47.39-.26.67-.6.48-1.08.25-.1.5-.16.7-.29.5-.3 1.19-.06 1.58.56.22.36.06.85-.5 1.05-1.18.42-2.39.75-3.58 1.11ZM38.72 66.13c.93-.05 1.9.04 2.8-.17 1.75-.4 3.54-.39 5.3-.52 1.35-.1 2.7-.01 4.05 0 .04 0 .09.03.14.05-.52.59-12.01 1.13-12.3.64ZM32.75 17.71c-.4.6-.76 1.22-1.2 1.78-.19.23-.54.34-.83.48-.92.44-1.85.86-2.76 1.31-.22.1-.39.3-.6.43 1.17-2.12 3.37-2.92 5.25-4.12l.14.12ZM15.95 24.28l.01-8.63c0-.14.15-.27.23-.4.08.13.2.27.2.4.02 2.63.01 5.26 0 7.9 0 .1-.17.2-.24.33l-.2.4ZM31.74 66.21l.32-.15-.1-.4h3.41c.81 0 1.62-.03 2.43-.02.11 0 .23.18.34.27-.1.12-.2.33-.3.33l-5.94.03c-.04 0-.07-.03-.16-.06ZM38.5 67.24h-7.67l-.04-.11c.18-.08.35-.23.53-.24 2.25-.06 4.5-.1 6.75-.13.17 0 .34.2.5.3l-.06.18ZM54.7 42.56V22.35l.17-.01c.02.27.06.55.06.82 0 .9-.02 1.78-.04 2.67l-.1 3.32v.6l.12-.32v13.15l-.22-.02ZM48.08 39.69v-5.4c0-1.78 0-3.55-.14-5.38.05-.15.2-.4.2-.66.02-1.66 0-3.32 0-4.98v-.55c.28.88.2 16.71-.06 16.97ZM19.84 60V35.98h.01l.24 24.03-.25-.01ZM34.39 59.35c-.1-.36-.24-.62-.25-.88-.02-1.05 0-2.1-.02-3.15 0-.65.01-.69.61-.54v4.32c0 .18.03.38 0 .56-.03.14-.1.3-.2.37-.07.04-.32-.1-.34-.17-.02-.14.06-.31.12-.46.03-.06.13-.08.08-.05ZM28.75 22.16l-.46-.25-.1.13-.21-.46 3.04-1.52-1.38 2.4-.1-.04.29-.79c-.03 0-.06-.02-.09-.04-.16.2-.31.43-.51.6-.1.09-.28.08-.43.12l-.05-.15Z'
        />
        <path
          fill={primaryColor}
          d='M11.8 10.18c-.7 0-1.42.01-2.14-.01-.13 0-.27-.17-.4-.25.12-.08.25-.23.38-.23 1.48-.02 2.96-.02 4.44-.01.11 0 .23.14.34.22-.12.09-.23.24-.36.25-.75.02-1.5.01-2.26.01v.02ZM32.37 22.76c-.78-1.02-.6-1.85.42-2l-.1-.68.46.12-.01.06c-.1 0-.2-.02-.25-.03l.77 2.6-.14.08c-.36-.3-.73-.58-1.2-.95l.05.8ZM37.47 20.74c-.34-.28-.55-.53-.45-1.08.08-.43-.25-.93-.4-1.4a1.34 1.34 0 0 1-.07-.45c.84.76.78 2.14 1.92 2.76 0-.23.02-.44.03-.64.36.17.46.44.44 1.2l-1.42-.35a.79.79 0 0 1-.05-.04ZM67.37 64.05c.92.82 1.77 1.53 2.55 2.3.2.18.22.54.33.82l-.16.08c-.9-.83-1.82-1.66-2.71-2.51-.1-.09-.01-.35-.01-.7ZM38.04 61.72h-.9l-5.13-.05c-.15 0-.3-.09-.44-.13.14-.07.27-.2.4-.2 1.75 0 3.49.01 5.23.04.29 0 .58.1.87.15l-.03.2ZM51.36 56.8l.2-16.25h.09l-.18 16.26h-.11ZM58.7 48.07l.08-.23h.09c0 .34.05.7-.03 1.01-.03.12-.39.15-.61.16.4-.86-.1-1.4-.43-2.04-.25-.5-.6-.84-.97-1.19-.18-.17-.45-.24-.67-.37-.07-.04-.16-.14-.14-.19.03-.11.1-.24.19-.3.1-.05.3-.07.35-.02.44.45.93.88 1.27 1.4.36.53.58 1.16.87 1.77ZM66.93 64.3l-2.47-2.24c.5-.08.9-.06 1.25.35.36.4.85.7 1.23 1.1.15.15.16.43.24.66l-.25.14ZM4.23 56.88c.56-.12 1.37-.29 2.17-.48.08-.02.19-.19.2-.29V54.9c.39.26.55.81.41 1.18-.06.16-.08.35-.05.52.08.5-.13.89-.62 1-.4.1-.79.16-1.19.22.53-.28 1.25-.12 1.7-.77l-1.7.34-.02-.07 1.41-.34-.02-.09H4.23ZM41.08 21.44l-1.36.12.14 1.26c-.27-.09-.8-1.86-.7-2.56l.3.12 1.6.86.02.2ZM54.6 61.53c-.76-.13-1.48-.25-2.2-.39-.1-.02-.16-.15-.24-.23.1-.07.18-.2.29-.21.56-.07 1.12-.12 1.68-.16.38-.03.56.33.46 1ZM4.04 55.46l.58-.12c.93-.23 1.1-.5.9-1.44-.03-.17-.06-.35-.14-.5-.69-1.31-.48-2.73-.51-4.12 0-.05.01-.1.04-.15.01-.03.06-.05.16-.11.03.2.06.35.06.51 0 .84-.02 1.68 0 2.51 0 .27.1.55.18.81.15.56.39 1.1.47 1.67.1.62-.23.92-.86.94h-.88ZM16.23 15.08c-.12-.28-.25-.46-.25-.63a7.35 7.35 0 0 1 .32-2.3c.03-.14.22-.31.35-.32.55-.04 1.1-.03 1.66-.02.09 0 .18.1.27.14-.1.06-.18.16-.28.16-.52.02-1.05.03-1.57.02-.3 0-.42.1-.41.4.03.69.06 1.37.07 2.05 0 .18-.1.35-.16.5ZM59.72 36.74l-.57.44.04-3.11a.7.7 0 0 1 .19-.45c.95-.9 2.1-.71 3.24-.44-.4-.02-.82 0-1.21-.07-.77-.13-1.31.28-1.88.67-.06.04-.13.13-.13.19-.01.7-.03 1.4 0 2.1 0 .18.16.36.32.67ZM25.23 29.2l1.16.82c-.23.12-.44.22-.64.34-.52.32-.52.52-.03.85l.16.12c-.13.14-.42.1-.84-.11l.43.53-.4.23c-.23-.55-.06-1 .14-1.46.07-.15.05-.34.06-.51 0-.23-.02-.46-.04-.8ZM47.06 12.5V9.7c0-.08-.04-.23-.08-.24-.75-.08-.27-.62-.31-.95l.08.67c.32-1.05 0-2.08-.07-3.12.66 2.1.42 4.28.56 6.43l-.18.02ZM29.7-4.1c-.15 0-.32 0-.47-.04-.08-.03-.2-.14-.2-.22 0-.4-.03-.8.04-1.17.05-.26.24-.5.37-.74l.26.07v2.11ZM20.33 66.45l7.6.5v.13c-2.5-.03-4.98-.25-7.6-.63ZM16.12 45.1c.28-.36.54-.74.85-1.07.45-.47.34-1.02.29-1.56 0-.1-.19-.16-.29-.25l-.27-.25c.05-.05.11-.14.17-.14.13 0 .32 0 .4.08.46.48.45 1.6.02 2.13-.17.21-.25.48-.42.68-.18.2-.41.35-.62.52l-.13-.14ZM8.83 14.52c-.1-.17-.18-.35-.31-.61l.39-.38c.71.43.82 1.36.6 2.07-.28-.24-.57-.46-.82-.7-.04-.04.06-.22.1-.34l.6.89.14-.1-.7-.83ZM69.1 49.83v1.25c-.02.1-.13.21-.2.32-.05-.1-.16-.2-.16-.3 0-.86.02-1.72.05-2.58 0-.1.1-.2.16-.3.05.1.13.21.13.32.02.43.01.86.01 1.29h.01Z'
        />
        <path
          fill={primaryColor}
          d='m37.47 20.74.05.04c.28.18.53.4.83.53.44.19.58.45.38.9-.1.19-.18.38-.22.49l-.25-.77-.15.04-.1.97v.01c.07-.5 0-.95-.32-1.38-.15-.22-.15-.55-.22-.83ZM.42 62.4H.38v-7.73h.04v7.73ZM15.9 45.06v-9.85h.06v9.86l-.06-.01ZM42.48 67l7.88-.49v.13l-7.86.48-.02-.11ZM10.06 32.15c.24.24.46.5.73.72.14.12.35.2.53.2.95.02 1.91-.02 2.86.03.44.02.86.2 1.27.4-1.36-.54-2.76-.15-4.14-.23-.43-.03-.74-.17-.97-.53-.11-.18-.26-.34-.4-.5l.12-.1ZM6.63 60.51c.92-.42.32-1.32.57-2.04l-.7.19c.05-.2.07-.35.12-.5l.2-.47c.15.14.43.27.44.42.04.87.02 1.75.02 2.59l-.65-.19ZM31.4 20.33l-.08.73.63-.14c-.1.3-.99.8-1.22.7-.05-.01-.1-.08-.13-.14-.23-.44.25-1.16.8-1.15ZM34.58 22.3l2.1-1.93c-.03.31-.76.61-.05 1.14l-2 .85-.05-.06ZM3.24 32.12h4.33v.12H3.22l.02-.12ZM57.35 9.97c.14-.09.28-.25.43-.25.66-.03 1.32-.03 1.98 0 .14 0 .27.12.4.18l-.04.17h-2.67l-.1-.1ZM28.4 60.23l-7.78.52c.14-.22 6.46-.68 7.77-.52ZM58.48 11.83h4.75v.1H58.5l-.02-.1ZM56.58 17.97h1.79c.07 0 .2.15.2.23 0 .08-.13.22-.2.22-.49.02-.97.03-1.45-.01-.1 0-.2-.24-.34-.44ZM6.55 61.91c-.51-.3-.52-.3-.17-.84.08-.12.2-.21.29-.32.04.15.11.3.1.44 0 .4-.03.81-.08 1.21 0 .1-.15.24-.2.23-.1-.01-.22-.12-.26-.22-.02-.06.07-.18.12-.26.06-.09.13-.16.2-.24ZM35.7 22.13c.49-.23.96-.47 1.46-.65.1-.04.3.11.42.22.03.02-.04.25-.11.28-.55.27-1.13.36-1.77.15ZM37.86 61.15h-6.17v-.1h6.16v.1ZM11.02 40.6v-7h.11l.04.6.13.94c0 .06.04.14.02.2-.46 1.28-.13 2.61-.21 3.92-.03.45.03.9.06 1.34h-.15ZM13.62 41.43c-.03.51-.2 1.15-.06 1.7.13.54.58 1 .88 1.47-.2 0-1.15-.9-1.26-1.25-.19-.62.09-1.61.44-1.92ZM55.7 29.09c0-.57-.08-1.14.04-1.68.05-.25.47-.46.76-.6.28-.15.61-.18.97-.17l-.24.18c-.06.04-.12.06-.19.09-.8.33-1.2.92-1.2 1.78l-.02.4h-.12ZM65.77 45.42c-.1.15-.22.28-.27.44-.17.51-.58.3-.91.33 0-.17-.05-.45.01-.49.36-.17.75-.3 1.12-.43l.05.15ZM38.14 60.39h-6.52v-.1h6.53v.1ZM14.14 47.8l-.3 1.81c-.02-.01-.13-.06-.13-.12-.06-.46-.16-.93-.14-1.4.02-.34.25-.41.57-.3ZM43.07.35c-.15-.05-.32-.07-.44-.15-.6-.46-1.2-.94-1.9-1.5 1.13.24 1.68 1.01 2.33 1.66ZM57.1 17.2v-5.32h1.06l.02.09c-.18.01-.37.06-.55.05-.32-.02-.42.11-.41.42l.04 4.38v.4l-.16-.01ZM8.56 61.54c0-.33-.03-.53 0-.72.04-.16.13-.31.2-.47.2.1.41.19.56.33.04.05-.1.32-.2.45-.12.13-.3.22-.56.41ZM51.33 20.48v-2.76l.1.34.06-.12v2.54h-.16ZM59.32 18.57l-.55-.4c.23-.1.46-.28.7-.3.13 0 .27.26.42.4l-.57.3ZM28.15 65.36l-.15-.13.01-.15 3 .21-.02.06h-2.85ZM64.28 53.2c0-.39-.02-.77 0-1.15 0-.1.15-.18.24-.27.07.1.18.18.2.28.04.3.05.58-.3.75-.1.04-.1.26-.15.4l.01-.01ZM64.05 45.37H64v-4.8h.05v4.8ZM51.63 53.81v6.46h-.06v-6.45h.06ZM25.5 28.41l.53-.85.08.18 1.16-.3-1.67 1.05-.1-.08ZM32.89 49.3l.74-4.21.1.01-.73 4.2h-.11ZM2.67 43.58v2.22c-.3-.32-.26-1.98 0-2.22ZM62.9 29.98V23.9h.05v6.08h-.05ZM43.42 36.94c.08-.08.1-.11.12-.11.46.06.7-.34.96-.58.14-.14.02-.56.02-.82l.39 1.23-1.5.28ZM64.09 30.98V37h-.05v-6.03h.05ZM15.47 20.77v-6.03h.03v6.03h-.03ZM58.8 50.38c.05.42.64.6.17.93-.13.1-.49.09-.57-.01-.35-.45.29-.48.4-.92ZM2.41 12.81h2.92v.06H2.4v-.06ZM51.48 28.6v5.47h-.07V28.6h.07ZM52.09 28.58v4.48h-.05v-4.48h.05ZM15.51 51.77c-.95-.18-1.67-1.12-1.5-1.85.12.86.77 1.32 1.5 1.85ZM7.14 37.67v3.22h-.07v-3.22h.07ZM64.05 46.5v2.82H64V46.5h.05ZM18.68 14.46v4.92h-.06v-4.92h.06ZM12.54 11.94h2.64v.03h-2.64v-.03Z'
        />
        <path
          fill={primaryColor}
          d='M38.01 22.94c.11.74-.16 1.8-.67 2.6l.67-2.59ZM19.1 60.34l.38.42c-.17.1-.33.23-.52.3-.04.01-.23-.18-.21-.22.05-.14.17-.26.34-.5ZM36.64 43.11l-.62-3.28.08-.02.66 3.27-.12.03ZM58.64 37.81l.11.72-.85.04.6-.83.14.07ZM53.05 8.52c.4-.11.74-.22 1.09-.29.09-.02.26.04.3.1.04.09 0 .25-.05.33-.03.04-.2-.02-.3-.03l-1.04-.11ZM64.17 62.67l2.3 2.15-.07.09-2.32-2.16.09-.08ZM32.9 18.9l-.12-.15-.88 1.45-.14-.09.86-1.4c.03-.05.17-.1.2-.07.07.05.1.15.14.23l-.06.04ZM25.66 35.52c-.41.11-.69-.2-.7-.59-.03-.64.63-.09.8-.44-.18.24-.37.46-.5.71-.02.03.27.22.4.32ZM8.43 9.28c-.02-.37-.04-.74-.04-1.11 0-.08.1-.15.16-.23.05.08.16.17.15.24-.02.37-.07.74-.11 1.1h-.16ZM2.2 5.2V.82h.03v4.36l-.04.02ZM16.69 46.46l-.05-.36 1.56.3v.06H16.7ZM30.91-6.37c-.27 0-.55.02-.82 0-.07-.01-.19-.17-.17-.2.04-.1.16-.25.22-.23.27.07.53.18.8.28l-.03.15ZM60.46 19.74c-.4-.33-.73-.8-1.19-.96-.44-.17-1-.04-1.51-.04 1.03-.01 2.18-.36 2.71.99l-.01.01ZM52.23 64.02l-.8.05.01-.43.8.16-.01.22ZM25 33.03v.26l.66-.09.02.12-.92.32-.03.22-.09-.02.2-.89.16.07ZM54.74 16.8h-.08v-2.93h.08v2.93ZM53.06 66.11l2.92-.55.01.09-2.91.55-.02-.09ZM54.74 65.46l-3.05.5-.02-.13 3.07-.36ZM47.69 23.27c-.04-.03-.11-.05-.12-.09l-.07-.72h.2c.06.26.1.52.14.78l-.15.03ZM62.9 53.58v2.49h-.04v-2.5l.05.01ZM6.97 59.78c-.57.65-1.22.67-1.91.78l1.9-.78ZM49.18 10.41c.27-.12.54-.25.81-.35.04-.02.16.05.17.1.01.06-.03.18-.07.2l-.85.22-.06-.17ZM44.16 34.13c0-.53-.17-.72-.97-1.05l.07-.13c.33.2.69.37.97.61.08.07-.04.38-.07.57ZM39.69 65l1.63-.15.02.19-1.64.12-.01-.15ZM15.24 20.13c-.4-.25-.8-.5-1.17-.77-.13-.09-.2-.26-.2-.47l1.42 1.2-.05.04ZM56.03 9.81h.98c-.21.18-.32.33-.42.33-.2 0-.4-.09-.6-.14 0-.06.03-.13.04-.19ZM60.41 10.2c-.05-.68.33-.5.58-.5.06 0 .13.13.2.2l-.78.3ZM66 49.3v-3.55h.02v3.55H66ZM65.12 61.77l-.49-.77c.11 0 .23-.02.33 0 .34.09.35.31.16.77ZM58.05 41.35l.1-.36c.13.05.32.06.37.15.09.14.08.34.11.51-.08-.01-.18 0-.24-.04-.12-.08-.23-.18-.34-.27ZM69.08 17.85v.86c-.01.05-.16.11-.23.1-.06 0-.18-.13-.17-.16.1-.28.22-.55.33-.82l.07.02ZM8.72 38.98h.1v1.3h-.1v-1.3ZM31.05 21.97l.4-.3.4.98-.8-.68ZM55 36.8v3.1h-.02v-3.1h.03ZM51.6 14.88c-.1-.23-.22-.47-.29-.73-.02-.1.09-.24.14-.36.06.1.18.2.18.31.02.27-.02.54-.03.78Z'
        />
        <path
          fill={primaryColor}
          d='m25 33.03-.16-.08c0-.28.05-.47.43-.43.2.02.42-.14.6-.21l-.87.72ZM25.8 39.53l-1 .09-.02-.16 1-.15.02.22ZM10.42 42.99c-.2.1-.32.23-.4.2-.12-.04-.2-.18-.31-.28.08-.08.19-.26.24-.24.14.04.26.17.47.32ZM67.22 51.61V48.6h.02v3.01l-.02.01ZM53.53 13.45c-.41.03-.35-.28-.35-.51 0-.08.1-.15.15-.23.07.07.18.12.19.2.03.16 0 .34 0 .54ZM3.73 66.11l-1.65 1.57-.07-.08 1.68-1.53.04.04ZM10.98 12h-1.5v-.05h1.5V12ZM50.99 10.8v1.1h-.06l-.12-1.09.18-.01ZM24.33 36.98v-1.12h.1v1.15l-.1-.03ZM2.3 32.43v2.74h-.02v-2.74h.02ZM37.29 53.35v1.75c-.1-.58-.4-1.14 0-1.75ZM38.98 22.18c-.01-.06-.04-.12-.03-.18.02-.2.06-.38.1-.57.06.03.19.06.19.08l-.1.7c-.05-.02-.1-.02-.16-.03ZM68.23 22.98v.03h-2.7v-.03h2.7ZM52.27 13.78l-.35.46c-.05-.08-.17-.19-.15-.22.08-.15.2-.27.3-.4l.2.16ZM64.74 56.02c-.3.02-.64.12-.85-.45l.89.3-.04.15ZM31.02-2.19l.37-.3v1.82l-.16-1.3c-.02-.08-.14-.14-.2-.22ZM15.57 6.65V9.2h-.02V6.65h.02ZM11.4 43.37c-.15.12-.25.26-.34.26-.1 0-.2-.13-.3-.2.1-.1.18-.24.3-.29.05-.02.18.12.33.23ZM55.73 25.36v-2.5 2.5ZM38.4 61.14l.27-.45.43.83-.7-.38ZM50.93 65.98l-1.61.11v-.06l1.6-.16v.11ZM16.65 50.76c-.12.1-.24.22-.26.2a.63.63 0 0 1-.23-.27c-.01-.05.11-.14.17-.21l.32.28ZM36.41 44.75l.34 1.85-.09.01-.33-1.84.08-.02ZM8.68 49.27v-2.18h.02v2.18h-.02ZM28.65 56.45l.86 1.06-.08.06-.87-1.05.1-.07ZM6.81 58.87v.58l-.49-.27.5-.31ZM52.2 25.21v2.13h-.05v-2.13h.05ZM46.76 34.93v2.13h-.05v-2.13h.05ZM64.6 56.97c-.19.02-.38.05-.57.05-.02 0-.05-.1-.07-.15l.6-.12.04.22ZM43.56 30.6c-.07.26.05.7-.46.5l.46-.5ZM.74 68.96l.8-.75.06.05-.74.8-.12-.1ZM16 47.6c-.06-.19-.14-.3-.11-.38.04-.1.17-.2.27-.23.06-.02.15.1.23.17l-.4.44ZM10.94 42.46l-.07-.47.27-.02.03.46-.23.03ZM62.94 31.29v1.91h-.01v-1.91ZM35.65 18.94l.47-.77.13.07-.45.79-.15-.1ZM67.39 45.27l.54.52-.11.12-.55-.5.12-.14ZM37.3 52.87l-.27-1.11.1-.03c.1.37.18.74.26 1.11l-.1.03ZM58.05 41.34l-.9.43c.2-.36.52-.44.9-.42v-.01ZM64.75 54.54l-1.13.06v-.1l1.12-.07.01.1ZM8.91 41.9l.84.1v.1l-.86-.08.02-.12ZM5.3 10.83l.79.9-.1.08-.76-.91.06-.07ZM11.78 53c-.12-.14-.23-.22-.24-.3 0-.07.12-.15.18-.22.08.07.2.13.23.22.02.05-.08.16-.17.3ZM4.65 47.86l-.6-.22c0-.05.03-.1.04-.15l.63.15-.07.22ZM57.73 8.18l-.55.95-.08-.04.53-.97.1.06ZM8.97 17.82l-.26-.42.16-.1.26.42-.16.1ZM8.92 32.75l-.16.99v-1l.16.01ZM21.1 28.1v1.46h-.03v-1.47h.03ZM29.29 60.46l-.61-.81.1-.07.6.82-.1.06ZM68.67 47.82l.26-.54.15.07-.23.53-.18-.06ZM42.3 60.37H41.2v-.1l1.08.1ZM52.71 2.2v.77h-.06l-.06-.78h.12ZM62.86 21.21v-.95h.08l-.07.96h-.01ZM16.2 51.16c.08.08.17.17.34.31-.16.03-.27.08-.29.05-.07-.08-.1-.2-.15-.3l.1-.06ZM28.75 60.87l.3.87c-.3-.04-.44-.36-.3-.87ZM12.62 64.02l.84.79-.06.06-.84-.78.06-.07ZM39.86 11.76l-.47.04-.03-.19.48-.07.02.22ZM6.82 29.92h.52v.1h-.52v-.1ZM7.28 56.36V55h.04v1.35h-.04ZM65.93 39.82l-1.03-.09v-.04h1.03v.13ZM39.34 8.23l1.07-.2.02.09-1.07.19-.02-.08ZM56.7 62.18l-1-.32.03-.1.99.34c0 .03-.02.05-.03.08ZM13.82 40.25v-.73l.09-.01.06.76-.15-.02ZM35.07 33.7c-.12.08-.2.17-.28.18-.05 0-.16-.15-.15-.2.03-.07.12-.15.2-.17.05-.01.13.1.23.2ZM35.13 37c-.1.1-.18.22-.21.2-.08-.03-.14-.12-.21-.19.06-.05.11-.14.18-.15.06 0 .13.08.24.15ZM18.26 66.1l1.08.18v.05l-1.1-.17.02-.07ZM6.62 53.88l-.03.53-.32-.36.35-.17ZM39.26 23.58v-1.17h.04v1.17h-.04ZM31.43 62.78l-.6.27c0-.04-.03-.08-.05-.12l.61-.25.04.1ZM55.94 62.24l.61.25-.05.13-.58-.31.02-.07ZM64.27 53.2l.34.04-.4.45.07-.49v.01h-.01ZM7.8 16.16c-.14.04-.24.09-.32.07-.06-.01-.14-.11-.14-.18 0-.06.08-.13.12-.2l.34.31ZM28.14 65.35l.22.3-.52.04-.04-.09.35-.24h-.01ZM7.42 40.87v-.32h.13l.02.32h-.15ZM59.5 15.35l-.05-.76h.07v.76h-.02ZM68.93 24.12v.52h-.07l-.03-.5.1-.02ZM64 52.78v1.03h-.03v-1l.02-.03ZM43.95-2.32v1.1h-.04v-1.1h.04ZM51.52 37.93v1.04-1.04ZM57.14 41.77l-.49.84-.13-.1.63-.73ZM15.3 9.99l-.71-.18.03-.14.7.22-.01.1ZM7.73 14.13l-.52-.52.05-.04.5.53-.03.03ZM30.71 22.36l.34.78-.08.04-.35-.78.1-.04ZM64.52 59.22 64 59.1l.04-.14.5.13-.02.13ZM28.75 22.16l.05.16-.03.34-.13-.01.11-.49ZM17.78 38.61l-.07-.32.15-.04.1.33-.18.03ZM23.91 61.24v-.48h.1v.48h-.1ZM16 50.11v.96h-.03v-.96H16ZM42.64 28.03l.55.43-.07.09-.53-.45.05-.07ZM58.7 40.25l-.28.39-.08-.06.23-.4.14.07ZM61.72 14.87l.03.52h-.08l-.05-.51.1-.01ZM64.02 50.17v.9l-.04-.03v-.84l.04-.03ZM12.33 36.8l.25.32-.12.1-.26-.34.13-.09ZM63.98 17l-.05.45-.17-.03.1-.45.12.02ZM26.61-.74l.63-.16.02.07-.61.22a7.42 7.42 0 0 1-.04-.13ZM39.29 24.34v.6a271 271 0 0 0-.07-.62l.07.02ZM60.47 19.73l.61.61-.06.06-.56-.66.01-.01ZM49.46 60.6l.79.1v.04l-.82-.06.03-.07ZM41.4 23.14c0-.11-.03-.23-.04-.35l.11-.02.08.34-.14.03ZM12.53 15.19c-.05-.1-.1-.15-.1-.2.02-.06.08-.12.12-.18.04.06.12.1.12.16s-.07.12-.14.22ZM7.32 57.27l.31.03-.36.34.05-.37Z'
        />
        <path
          fill={primaryColor}
          d='m3.69 66.07.6-.56.06.06-.62.54c-.02 0-.03-.02-.04-.04ZM17.2 41.22l.16-.54.13.04-.2.53-.09-.03ZM38.13 24.92l.38-.55.07.05-.4.54-.05-.04ZM7.28 61.7l-.12-.32.13-.06.13.35-.14.03ZM68.84 25.87l-.04-.36.13-.02.08.38h-.17ZM24.62-.13l-.08.33-.13-.02c0-.12.02-.24.03-.35l.18.04ZM5.78 48.5h.42v.07h-.42v-.08ZM54.84 20.01v-.32h.12V20h-.12ZM8.35 56.31v-.66h.02v.68l-.02-.02ZM56.39 18.95l.43-.26.06.1-.42.28-.07-.12ZM51.43 26.34v-.67h.02v.67h-.02ZM35.75 27.09l.56-.14V27l-.56.13v-.04ZM62.94 43.33v.65-.65ZM69.09 32.23l-.1.38-.13-.04.1-.39.13.05ZM38.58 62.02l.48-.25.05.08-.5.25-.03-.08ZM2.64 38.42l-.35-.12.02-.1.37.1-.04.12ZM64.75 61.71l-.27-.1.08-.18.25.17a6.6 6.6 0 0 0-.06.11ZM62.94 19.6h-.02v-.57h.02v.57ZM34.53 29.66l-.35-.36.04-.05.36.36-.05.05ZM52.03 66.33l-.53.09v-.07l.55-.09-.02.07ZM50.92 61.1c-.06-.07-.12-.13-.11-.14a.4.4 0 0 1 .13-.13c.01 0 .1.07.09.1 0 .05-.06.1-.11.16ZM51.4 27.54v-.39h.05v.39h-.06ZM36.64 16.43l-.05.39-.09-.01.03-.4.11.02ZM50.07 7.01h-.01l-.47-.39.08-.07.4.46ZM70.58 67.62l.32.25-.06.08-.31-.27.05-.06ZM64.06 58.09v-.3l.06-.02.05.32h-.1ZM52.44 14.84l-.04.35-.09-.01.05-.35h.08ZM40.59 14.61l-.06-.27.1-.02.06.27-.1.02ZM16.28 10.85h.02v.42l-.02-.02v-.4ZM52.19 62.33l-.25-.03v-.07l.26.02-.01.08ZM11.48 11.95h.46l.01.03h-.46l-.01-.03ZM37.02 21.16v-.3l.07.02.02.28h-.09Z'
        />
        <path fill='#000' d='M46.6 43.6v-1.86 1.86Z' />
        <path
          fill={primaryColor}
          d='M25.88 13.87c-.03-.07-.08-.15-.07-.21.11-.72-.3-.87-.9-.86-.27 0-.56-.05-.47-.45.02-.08.13-.2.2-.2 1.07.1 2.14.2 3.21.32v.17c-.42.11-.84.29-1.27.32-.4.02-.55.15-.52.55.01.12-.04.24-.06.36h-.12ZM25.94 7.7c.04.37.08.74.1 1.11.01.38 0 .76-.1 1.14V7.7ZM26.33 5.6v.49h-.14l-.05-.49h.19ZM25.95 7.7V6.5v1.2ZM23.91 27.87l-.05-.33.11-.03.08.34-.14.02ZM23.35 10.27l-.04.57-.1-.01.1-.57h.04ZM23.6 12.23h.08v.33h-.08v-.33Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h70v70H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AvailabilitiesSVG
