import { RED } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const FixABookingSVG = () => {
  return (
    <svg width='46' height='48' viewBox='-1 0 46 46' fill='none'>
      <g clip-path='url(#a)'>
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path
            fill={RED}
            d='M-7.46 57c.23-.2.4-.44.37-.77 0-.06.05-.14.1-.18 1-.9 2.02-1.82 3.05-2.7.15-.14.39-.21.59-.22h9.83c.26 0 .55.1.79.2 1.69.83 3.48 1.34 5.3 1.74 4.43.96 8.91 1.26 13.44.99 3.55-.22 7.05-.72 10.46-1.77.93-.3 1.83-.69 2.75-1.03.2-.07.42-.15.63-.15 3.1-.01 6.2 0 9.28-.02.36 0 .62.12.88.37 1.26 1.19 2.54 2.36 3.8 3.54H-7.45ZM28.48 1.05l.59.47V.36h.06v1.3c0 .08.08.16.12.24.07-.08.19-.15.2-.24.03-.22.01-.45.08-.68.01.25.01.5.05.74.02.09.12.22.2.23.73.13 1.46.22 2.18.36.63.13 1.24.31 1.88.48v-.9h.09v.55c-.02.32.16.5.43.61.42.19.85.37 1.26.57.09.04.13.18.19.27-.11 0-.23.01-.32-.02a32.7 32.7 0 0 1-1.44-.56c-.16-.07-.3-.19-.46-.3l-.1.13-.2-.18c-.1-.07-.2-.17-.3-.2a95.1 95.1 0 0 0-2.78-.47c-.48-.07-.97-.1-1.46-.14-.14-.01-.28.02-.44.04l.04.24-8.83-.29.02.07.41-.24c-.17-.04-.34-.13-.5-.12-.78.07-1.54.2-2.32.24-.82.06-1.64.03-2.46.09-1.44.1-2.84.37-4.17.94a.43.43 0 0 1-.32.01c.07-.08.13-.21.22-.25.56-.19 1.12-.43 1.7-.51 1.83-.27 3.67-.48 5.5-.68.32-.04.4-.13.37-.42-.02-.25 0-.5-.01-.76-.01-.3.14-.74-.53-.65.69-.11.5-.57.5-.95l-.01-.55c0-.24-.03-.51.38-.43.05.01.13-.13.2-.2v1.62l.99-.2c-.18.08-.34.19-.51.24-.3.08-.5.2-.44.55.01.14-.03.28-.05.42l.37.07c-.14.07-.39.12-.4.2-.04.3-.02.6 0 .9 0 .03.14.07.21.07.44 0 .87-.04 1.3-.05.28 0 .34-.14.34-.4-.03-1.53-.04-3.06-.05-4.59 0-.65.1-.8.73-.98.15-.04.3-.04.44-.1.1-.04.23-.13.28-.23.02-.04-.12-.16-.19-.25h3.2c-.31.1-.63.18-.94.3-.1.02-.18.11-.27.18.1.05.2.15.3.14.55-.05 1.1-.14 1.66-.19.18-.01.37.04.56.06l.02.16c-.18.09-.35.2-.54.26-.28.08-.4.2-.39.54.04.98.04 1.97.03 2.96 0 .33.06.56.42.62.07.01.12.06.2.1l-.06.04c-.55 0-.58 0-.6.54-.04 1.1-.16.86.79.95.95.1 1.9.14 2.86.2.08 0 .17-.04.26-.07-.03-.1-.04-.21-.1-.29-.13-.16-.3-.3-.44-.45Zm-4.76.44c-.33.11-.72-.34-1.13 0h1.13Zm-1.56-.02-.24-.33c-.05.4-.04.4.24.33ZM53.94 57l.01-1.5V-4.65L53.94-5l.06.03v61.7c0 .09-.04.18-.06.27ZM33.86-5v6.04c-.07-.33-.08-.61-.2-.85-.35-.8-.32-1.65-.31-2.5L33.37-5h.49ZM15.95-5c.05.27-.1.38-.33.5-.32.18-.59.45-.85.73l.25-.1c-.47.64-.29 1.37-.31 2.06-.01.22-.02.41-.3.4-.1-.01-.2-.05-.28-.07.02-.09.03-.2.08-.27.06-.08.15-.13.23-.23-.32.12-.36-.02-.34-.27l.04-.94c.02-.92.49-1.5 1.37-1.74l.2-.07h.24Z'
          />
          <path
            fill={RED}
            d='M27.8-5c.27.28.57.54.78.86.19.27.12.55-.23.7-.1.04-.19.2-.18.29 0 .41.05.82.08 1.23-.52.12-.62.05-.62-.47 0-.24-.05-.48-.04-.72 0-.18.07-.35.1-.5v-.8l.34-.15-.47-.33.19-.1h.06ZM30.9-5c-.02.66 0 1.31-.05 1.97-.08 1.08-.2 2.16-.29 3.24h-.15V-5h.48ZM38.03-5c-.02.31-.07.62-.07.93V8.7c0 .2-.07.42.22.48.03 0 .03.13.04.2l-.16.04c-.06-.22-.18-.43-.18-.65V-4.67L37.84-5h.18ZM-6.12-5l.16.29c.42.8.42.81-.33 1.39-.28-.19-.29-.6-.02-1.22-.31-.1-.34-.08-.37.23-.02.32-.04.64-.1.96v-1.27h.63l.05-.1-.33-.28h.3ZM12.08-5c-.01.55-.04 1.1-.04 1.66L12 .19c0 .1-.02.2-.03.29h-.13V-5h.24ZM13.53-5v4.95h-.12L13.35-5h.18ZM30.29-5l-.01 1.54c0 .1-.09.2-.13.29l-.1-.05V-5h.24ZM29.14-5v3.58h-.06V-5h.06ZM18.98-5c-.45.52-.45.51-1.1.18-.19-.1-.4-.12-.6-.18h1.69ZM21.34-5c-.34.07-.67.18-1.01.2-.32 0-.5.48-.94.21l.92-.4h1.03ZM26.66-5l.35.4c-.1.02-.22.1-.3.07-.26-.09-.5-.21-.74-.33l.02-.14h.67ZM-8 55.06l.68-.44.05.06-.73.56v-.18ZM-8 42.53l.23.02c0 .03.02.06.03.08l-.26.14v-.24ZM31.11 33.35c.03.5.08 1 .09 1.51 0 .38-.03.75.45.82-.34.86-.13 1.7-.11 2.54 0 .1.17.22.29.25.58.19.67.3.67.9l-.04 6.09c0 .24-.09.34-.34.33-.44-.04-.89-.05-1.33-.07l-.02.1c.07.02.13.05.2.06.36.02.71.03 1.07.07.15.02.28.14.43.17.12.02.26-.02.37.02l1.06.16v.03l-3.1-.17-.03.17c-.05.35.01.56.46.52.33-.03.68.05 1 .08l-.28.05c.79.1 1.45.18 2.12.28.13.01.27.04.37.11.06.04.07.18.06.27 0 .05-.08.12-.14.14-.1.04-.2.06-.37.1.34.15.63.3.52.67-.03.1-.13.24-.22.27-.46.12-.94.2-1.41.3-.3.06-.36-.08-.32-.34.03-.17.04-.35-.02-.53l-.05.28c-.1.67-.1.7-.8.75-1.29.08-2.59.12-3.89.16-.39.01-.83-.42-.9-.81-.04-.2-.14-.4-.2-.54.1-.31.24-.61.28-.92.04-.27.13-.36.4-.34.59.06 1.18.09 1.78.13h.3v-.11l-.36-.03c-.58-.03-1.17-.04-1.75-.08-.11 0-.21-.13-.32-.2.1-.06.21-.2.31-.19.53.03 1.05.1 1.57.14h.42c.1-.2-.4-.22-.04-.46l-.86-.1v-.02h.94l.01-.1c-.1-.03-.22-.08-.33-.08a113 113 0 0 0-1.81-.04c-.22 0-.33-.1-.33-.34 0-.8 0-1.6-.02-2.41 0-.22-.04-.44-.03-.66 0-.53.03-1.06.04-1.59l-.02-.37-.3.28-.1-.1c.35-.29.69-.6 1.05-.86.52-.38 1.06-.7 1.57-1.08.08-.06.14-.28.1-.37-1.42-2.61-1.99-5.48-2.47-8.37-.25-1.53-.58-3.05-.8-4.59-.1-.76-.01-1.54.06-2.35.07.17.16.34.2.51.08.45.19.9.2 1.34.04.85.57 1.5.83 2.24.28.81.54 1.64.7 2.49.1.56 0 1.15.01 1.73 0 .12.05.23.07.35l.14.01.24-1.16c.48.35.53.72.26 1.24-.1.2-.2.4-.27.6-.04.15 0 .3 0 .46l.39-.14v.02l.06.47c.1-.14.25-.27.3-.43.12-.47.36-.86.68-1.21.04-.05.05-.13.08-.2l.22-.44c.02-.04.02-.1.01-.15l-.24-2.02a.49.49 0 0 1 .1-.3c.13-.17.04-.87-.13-.97-.17-.11-.42-.97-.32-1.23.11-.3.03-.48-.22-.66-.11-.08-.19-.26-.2-.4l-.3-2.91a.85.85 0 0 0-.18-.37c-.14-.2-.31-.37-.45-.57-.07-.1-.18-.25-.15-.32.3-.54-.25-.92-.26-1.41-.01-.51-.12-1.02-.19-1.53v-.06c-.08-.88-.34-1.6-1.33-1.82-.31-.07-.6-.26-.87-.42-.46-.28-.87-.6-1.14-1.1-.17-.32-.44-.59-.67-.89.39-.31.56-.74.5-1.3l-.28.1c.05-.59.1-1.16-.25-1.71l.15 1.47-.12.02c-.01-.06-.03-.1-.03-.16-.01-.75-.18-.73-.8-1-.23-.09-1.47.4-1.56.62-.09.22-.11.47-.26.71l-.1-1.18h-.06v1.5l-.03.01c0-.06 0-.12-.03-.17-.03-.05-.08-.1-.14-.12-.03 0-.1.05-.13.1-.12.23.04.74.31.92l.04-.26.2.07.07-.1.16.85-.3-.4c-.8.45-1.58.87-2.35 1.32a5.1 5.1 0 0 0-1.96 1.92c-.07.13-.1.3-.12.46l-.38 2.53-.02.24.34-.04.1-1.16h.04c0 .3.03.62-.02.91-.02.2-.13.4-.27.55-.83.9-1.4 1.9-1.42 3.2-.02.82-.17 1.64-.27 2.47l-.32 2.46c-.05.36-.07.73-.08 1.1 0 .14 0 .3.04.44.06.23.26.44 0 .7-.07.08.03.38.13.53.43.62.87 1.22 1.32 1.82.2.28.28.07.34-.08l.42.02c-.04-.15-.05-.33-.12-.46-.3-.51-.65-1-.34-1.63l.12-.16c.04.2.06.36.1.5.03.06.1.1.14.15.05-.06.12-.11.13-.17.02-.15.02-.3 0-.45a8.67 8.67 0 0 1 .43-3.4c.07-.24-.04-.53.02-.77.12-.46.33-.89.43-1.34.08-.35.05-.73.09-1.1 0-.09.1-.18.15-.26.06-.1.2-.26.18-.3-.31-.43.12-.5.32-.77 0 1.07.13 2.08-.03 3.04-.43 2.7-.92 5.4-1.53 8.06-.34 1.5-.94 2.95-1.43 4.42-.02.07-.13.1-.2.16-.05-.1-.16-.18-.17-.28-.1-.9-.2-1.8-.27-2.7-.04-.5-.01-1-.1-1.53-.03.1-.07.21-.07.32 0 1.15-.01 2.3.02 3.45 0 .27.16.53.24.8.04.13.07.27.08.41.07.6.55 1.1 1.15 1.18.06 0 .2-.13.22-.22.03-.2 0-.4 0-.68.57.3 1.06.54 1.52.8.07.05.1.27.07.35-.46.93-.05 1.85-.02 2.77 0 .09.05.19.03.27a3.71 3.71 0 0 0-.07 2.02c0 .04-.2.17-.3.18l-2.57.08c-.25.01-.5.03-.75.07-.29.05-.38-.1-.37-.35v-.57l-.03.09c-.02.59-.32.89-.92.9-.2 0-.38-.05-.57-.03-.42.05-.52-.12-.52-.53.02-2.67 0-5.34.1-8.02.02.1-.01.25.05.31.12.14.29.23.44.34.06-.12.16-.24.16-.36l.03-3.18c.01-3.83.07-7.65.03-11.47-.02-2.47-.17-4.93-.27-7.39-.01-.42.02-.85-.01-1.27-.15-2.06.06-4.11.06-6.16 0-.45-.24-.55-.54-.64-.05-.01-.22.2-.23.3-.03.57-.04 1.14-.04 1.7l-.04 7.87c0 .06 0 .12-.05.18V4.82l-1.03.41c.7.32.42.83.43 1.27.04 2.15.1 4.3.11 6.45.02 3.35 0 6.7-.06 10.06-.05-.68-.16-1.35-.16-2.02 0-2.34.02-4.68.05-7.02l.06-3.84V8.65h-.1l-.08.58h-.05V7.62h-.08l-.06.57A4.2 4.2 0 0 1 8.8 6.9c-.03-.03.02-.11 0-.15a2.46 2.46 0 0 0-.21-.33c-.04-.06-.1-.1-.15-.15l.18-.09c.1-.03.22-.04.41-.08.21.28.4.76.97.85-.6-.6-.61-.7-.15-1.62l-.66.55c.05-.4.45-.77.79-.76.03 0 .08-.01.1-.03.72-.62 1.63-.74 2.5-.92a47.2 47.2 0 0 1 11.63-.9c1.6.08 3.2.27 4.79.42.05 0 .1.02.14.06-.9-.02-1.78-.15-2.63-.03.07.3.12.5.15.7 0 .04-.09.09-.14.13-.04-.05-.1-.1-.12-.16-.03-.05-.04-.12-.06-.18l-.15.1c-.28-.4-.73-.17-1.1-.36v.68h.44c-.5.03-.5.37-.5.74.02.7.02 1.4 0 2.09 0 .29.1.37.38.34l.96-.06c.51-.05.67-.21.68-.74.01-.38 0-.76.08-1.15.03.06.07.11.07.17 0 .4.03.79 0 1.18-.04.42-.28.63-.7.65h-1.15c-.1 0-.2.08-.3.13.1.03.19.1.28.1.56-.01 1.13-.05 1.7-.06.2 0 .3-.07.3-.3-.03-.9-.04-1.8-.05-2.69 0-.14.04-.28.06-.42h.12c.02.12.05.24.05.36l-.01 2.67c0 .28.07.4.38.43.7.04.71.06.7-.65l-.08-2.96c0-.07.01-.15.06-.22l.13.76.06-.02c-.03.12-.08.25-.08.37l.01 2.4c0 .11.13.23.2.35.06-.12.18-.23.18-.34.02-.9.01-1.8.09-2.7v3c0 .23-.11.3-.31.31-1.18.07-2.36.15-3.53.2-.27 0-.34.1-.3.33l.05.33c.08.72.08.72.81.8.3.04.6.06.86.15.14.05.22.24.33.36-.12.06-.24.15-.36.16-.46.02-.91.02-1.36.02-.2 0-.32.04-.3.26l.15 2.17c0 .07-.06.15-.05.22 0 .13 0 .33.08.37.47.23.63.7.91 1.09l.12.16c.21-.03.36-.07.5-.07.27 0 .52-.3.52-.67l.05-3.66c0-.17.04-.34.06-.5l.14-.01c.02.12.06.25.06.37.02 1.98.04 3.95.04 5.93 0 .28.06.5.3.68.15.12.22.33.3.51.14.27.24.55.38.81.05.1.21.24.26.22.18-.08.37-.2.48-.36.06-.08 0-.28-.06-.41-.02-.04-.2.02-.3 0-.12-.02-.3-.12-.3-.14.04-.18-.16-.51.16-.51.54 0 .55-.29.55-.7.02-2.59.05-5.18.06-7.78 0-.28.07-.4.36-.4.08 0 .15-.03.23-.05L30 8.18c-.6.1-.54-.3-.53-.69.03-.63.02-1.25.02-1.88 0-.57 0-.57.4-.91l-.41-.17.03-.08.42.15-.26-.19c.06-.04.1-.08.16-.1.05-.03.12-.01.18-.04.63-.24.7-.19.7.5v2.76c0 .12.06.23.08.32-.04.11-.13.23-.13.34l.05 7.99c0 .1.02.2.04.35.1-.09.2-.12.22-.18.14-.4.36-.81.38-1.23.03-1.23 0-2.48-.03-3.72 0-.17-.07-.34-.12-.55l.28-.04v.31c0 .87-.02 1.74-.03 2.6 0 .55 0 1.09.05 1.65.34-.53.23-1.4 1.25-1.43-.1.12-.13.2-.2.25-.3.22-.42.52-.39.9.06.8-.39 1.31-.98 1.75a.74.74 0 0 0-.27.34c-.09.29-.13.6-.18.9-.05.23-.05.43.27.43.06 0 .12.07.2.12-.05.04-.09.09-.1.08-.48-.12-.45.19-.44.5.03 1.95.04 3.9.09 5.87 0 .3.15.6.24.91h.1v-2.44h.1l.08 1.74-.08-.15v7.9c0 .1-.05.21-.08.32v-1.39 1.39ZM13.3 20.95l.23-.01V9.84h.15c.01.1.04.2.03.28-.02.16-.08.3-.08.46 0 1.41.04 2.82.04 4.23.02 3.13.04 6.26.02 9.39 0 .58.2.92.82 1.11v-1.47c-.04-1.4-.1-2.79-.12-4.18-.02-1.74 0-3.47 0-5.21 0-.19.04-.37.06-.56h.15v5.43c.67-.13.8-.27.8-.86 0-.2 0-.4.02-.6.03-.31.08-.61.13-.92l.08.02v1.37c.07-.43.06-.87.14-1.3.07-.4.23-.8.35-1.2.01-.04.08-.06.1-.1l.38-.54c.2-.28.36-.6.61-.81.24-.2.39-.38.38-.67l-.07-1.64c0-.24.03-.44.35-.45.06 0 .14-.12.18-.2.03-.08.02-.18.04-.36.17.33-.17.73.3.84l-.2.29c.11 0 .2.02.28.03l.1 2.14h.12c.06-.26.15-.53.16-.8.03-.8.03-1.61.05-2.42 0-.52 0-.52-.5-.5-.08 0-.15.08-.22.08l-.4-.03.02-.33.04-.42.53.3V9.05c0-.09-.08-.17-.13-.26-.03.1-.1.19-.1.28-.04.22-.05.44-.07.66h-.14l-.06-.97c0-.2-.09-.29-.29-.28l-.51-.03c.15-.12.3-.2.45-.22.32-.06.4-.22.4-.54-.03-.95-.03-1.9-.02-2.84 0-.26 0-.5-.25-.52.07-.15.15-.3.2-.45 0-.02-.2-.15-.3-.14-1.73.23-3.45.47-5.17.73-.09 0-.22.12-.22.18-.02.48-.01.96-.01 1.47l1-.23c.07.63.17.99.32 1.08-.4.62-.43.71-.42 1.54 0 .45.08.9.1 1.36.04 1.13.07 2.26.08 3.38v3.07c-.08.13-.17.2-.16.27.1.68-.15 1.35.2 2.06.2.44.02 1.07.02 1.61l.01.69Zm5.21-16.78.12-.13.83.28c-.14.11-.34.2-.34.29-.03 1.09-.03 2.18-.03 3.26 0 .08.07.2.14.23.73.23 1.1-.07 1.02-.81v-.03l-.32-.24c-.06.08-.16.16-.17.25-.03.2 0 .4 0 .6h-.06l-.32-1.14c.19-.02.39-.02.6-.05.07 0 .2-.07.2-.1a.65.65 0 0 0-.1-.27c-.1-.14-.26-.26-.33-.42-.08-.2-.05-.4.27-.37.07 0 .21-.13.21-.2 0-.48 0-.96-.05-1.44 0-.08-.16-.2-.25-.21a9.93 9.93 0 0 0-1.24-.01c-.09 0-.24.17-.24.26-.02.44.02.88.02 1.32 0 .86 0 1.73.02 2.6 0 .11.14.22.22.33.07-.11.22-.22.22-.34.02-.86.02-1.71 0-2.57 0-.4.23-.89-.42-1.09Zm-6.53 1.29c0-.16.02-.33-.01-.49-.03-.13-.11-.25-.17-.37-.2.1-.57.01-.57.38 0 .71.02 1.43.07 2.14 0 .08.26.16.41.21.04.01.16-.1.17-.16l.1-1.71Zm8.25 2.97c-.23.09-.42.22-.6.2-.49-.03-.6.2-.54.61v.15c0 .85.13.95.94.69.08-.03.2-.12.2-.19V8.43Zm-6.3 25.73-.19.04v5.48l.1-1.23c.1-1.25.2-2.51.27-3.77 0-.17-.12-.34-.19-.52Zm17.08.18-.05.01-.04-.79-.11.01V37.1c.45-.97.27-1.94.25-3.02l-.05.26ZM18.98 9.6h-.01c0-.21.02-.43 0-.64-.02-.1-.12-.19-.19-.29-.09.1-.24.17-.25.27-.05.43-.07.86-.06 1.29 0 .08.18.2.28.2.07.01.2-.14.21-.23.04-.2.02-.4.02-.6Zm.19 1.02-.01.1c.05.01.11.03.17.02.4-.05.56.13.5.53l-.01.39v.81l.15.04c.09-.15.24-.3.25-.46.05-.36.03-.72.02-1.08 0-.07-.06-.18-.1-.2l-.97-.15Zm-5.68 26.03h-.04v3.96h.04v-3.96Zm20.87 10.93.02-.14-2.48-.39-.02.1 1.72.44-.34-.2 1.1.19ZM13.5 21.8h-.03v2.55h.03V21.8Zm15.74 24.92.02-.08-2-.12-.01.08 2 .12Zm1.69-17h-.06v2.17c.04-.06.06-.08.06-.1v-2.07Zm-2.14-10.03.14-.03-.12-.74-.1.02.08.75ZM18.3 12.48h-.09l.03.22h.06v-.22Z'
          />
          <path
            fill={RED}
            d='m34.5 35 .12-.13c.02-.06.04-.11.1-.16l-.2.73c-.03.14-.07.27-.07.41 0 3.23-.02 6.46 0 9.69 0 .35-.1.5-.46.43-.33-.06-.66-.08-.98-.15-.09-.02-.21-.17-.21-.26l.08-7.53.04-5.9c0-.11 0-.22.08-.34v1.3h.1v-.38c0-1.7-.05-3.4-.03-5.1.01-3.08.07-6.16.1-9.23V9.69c0-.3.06-.52.38-.63.24-.08.33.01.4.21.16.4.35.8.46 1.22.07.29.05.6.05.9l-.02 1.21c0 .2-.07.44.22.53.01 0 0 .15-.03.21-.06.16-.21.3-.21.46-.02 2.05-.02 4.1-.01 6.15l.1 13.13V35Zm-1.1-1.76h.1v-3.12h-.1v3.12ZM43.42 47.21c-1.4 0-2.77.04-4.13-.02-.45-.02-.9-.27-1.34-.44-.06-.02-.12-.13-.12-.2V40.2c.1.21.16.5.33.59.19.1.48 0 .71.04 1 .22 2-.25 3-.01.16.03.34-.02.51-.05l.7-.1v-4.04h.14v7.03h.12l.05-.34c-.01.36.1.71-.24 1.02-.42.38-.35 1.12.07 1.35l-.17.1c.09.17.2.32.23.48.02.08-.09.19-.14.29-.08-.07-.19-.12-.23-.2-.2-.4-.74-.5-1.14-.13.77 0 1.29.34 1.65.97Zm-3.02-4.86.68-.14c.32-.06.48.06.46.4v.8h.1c.03-.23.08-.46.07-.7-.01-.37.14-.5.5-.48.25.01.5-.02.74-.03-.44-.16-.87-.3-1.3-.32-.3-.01-.6.12-.9.22-.12.03-.2.14-.35.25ZM6.18 47.55c-.16.1-.35.15-.46.28-.16.2-.32.42-.4.66-.05.22-.1.39-.33.48-.2.08-.37.2-.54.32-.82.62-.9 1.44-.16 2.17.3.3.65.53.99.79l.37.27h-8.63c.4-.38.7-.7 1.03-1C-.63 50.25.7 49 2.03 47.75c.16-.15.41-.25.63-.26 1.02-.03 2.03-.03 3.05-.03h.45l.02.08ZM49.1 52.54h-8.51c.13-.1.23-.16.3-.24.44-.37.92-.7 1.28-1.14.48-.56.34-1.24-.24-1.7-.14-.1-.28-.2-.43-.28-.37-.19-.67-.36-.76-.87-.05-.33-.5-.6-.72-.84h1.66c.58 0 1.17 0 1.75.02.18 0 .39.07.51.2 1.68 1.54 3.35 3.1 5.02 4.67l.14.18ZM24.15 44.98c-.05.7-.05.7-.78.7-.97-.03-.87.12-.87-.88 0-1.14 0-2.28-.02-3.42l-.03-.33c-.17.43-.3.45-.57.16-.09-.09-.2-.15-.33-.25v2.34c0 .69.02 1.38 0 2.07 0 .1-.18.27-.28.28-.4.03-.8 0-1.21.01-.27 0-.36-.13-.28-.36.47-1.46.59-2.95.54-4.48-.02-.6.14-1.2.24-1.8.01-.06.14-.17.21-.17h3.12v1.85c0 .54-.1 1.09 0 1.6.15.93.42 1.83.64 2.74.02.1.08.18.12.27.02.08.08.2.05.23a.55.55 0 0 1-.3.13c-.07 0-.16-.11-.18-.19-.05-.16-.05-.33-.07-.5Z'
          />
          <path
            fill={RED}
            d='m33.7 6.02.38.62.06-.48.39.55.1-.05c-.19-.54-.32-1.11-.56-1.63-.1-.2-.45-.26-.75-.41l-.03.76-.05-.07c.01-.69.14-.55-.56-.75-.67-.19-1.34-.41-2.02-.59-.3-.08-.64-.07-.96-.11-.1-.01-.18-.03-.27-.13.52.06 1.05.09 1.56.21 1.25.3 2.5.6 3.72 1.02.4.14.76.4 1.2.53.28.07.29.64.08 1.04l.5-.33.07.06c-.19.23-.39.44-.57.67-.08.1-.2.22-.2.33l-.05 3.1-.01 6.24c0 1.57-.02 3.15-.01 4.72l.03 4.41c0 .13.08.24.12.37.02.04.04.09.04.13-.05.5-.12.98-.15 1.47-.02.44 0 .89.03 1.33 0 .16.09.31.13.47.01.08.03.16.01.23-.05.27-.17.53-.17.8 0 3.27.04 6.53.05 9.8 0 .33.13.45.44.48.55.04.99-.34.99-.88 0-.33 0-.67.04-1v.61c.03 1.96.06 3.91.11 5.87 0 .3-.05.42-.38.4-.45-.02-.9.01-1.36.02-.24 0-.37-.1-.33-.34.06-.44.14-.87.21-1.3.04-.22.12-.45.12-.68 0-2.5-.04-5.02-.04-7.53 0-3.27.02-6.55 0-9.83-.03-3.11-.11-6.23-.17-9.4l-.22.64c0-.13-.02-.2-.01-.29.03-1.34.05-2.68.12-4.02.01-.33.25-.64.27-.97.04-.57 0-1.14 0-1.71l-.03-3.03c0-.33-.35-.54-.67-.43-.38.14-.76.25-1.15.37-.31.1-.45-.11-.47-.34-.03-.32.02-.66.04-1.03l.38.09Zm1.66-.23c-.06-.3-.66-.76-1.02-.78l.19.38.06-.1.77.5ZM10.31 15.6c0 3.92-.03 7.84.01 11.77.05 3.9-.16 7.82.09 11.73h.15c.01-.13.05-.27.05-.4l-.1-8.08-.04-4.78c0-.36.03-.72.05-1.09h.11c.05.8.15 1.6.15 2.39l-.14 17.85c0 .52-.27.76-.8.73-.35-.03-.7-.06-1.07-.04.4.3 1.09.08 1.27.78-.32.07-.67.23-1 .19-.22-.03-.5-.31-.59-.54a3.5 3.5 0 0 1-.17-1.15c-.02-.97 0-1.94 0-2.9v-1.74l.48.21c.35-.38-.07-.67-.23-1.1l.32.3c.06-.42.36-.35.64-.38.46-.04.7-.33.7-.85v-7.02c0-.5.02-1.01 0-1.52-.06-1.09.09-2.18.06-3.27l-.03-3.39v-3.36l-.02-3.39v-.96h.12ZM2.44 47.26c.4-.4.69-.78 1.24-.76.32.02.64 0 .97 0 .2 0 .24-.09.24-.28-.05-1.23-.1-2.45-.1-3.68 0-.15.16-.3.3-.55.17.31.38.46.11.67-.03.02.01.2.07.26.23.19.48.35.72.53l.18.19c-.03-.25 0-.43-.07-.56a8.2 8.2 0 0 0-.55-.9c-.05-.08-.18-.12-.26-.19-.1-.08-.37.1-.32-.2-.17 0-.33.02-.5.03l-.04-.13c-.5.26-1 .1-1.48.05-.07 0-.16-.19-.16-.3-.02-.45 0-.91.04-1.37v1.08c0 .2.06.27.3.25.54-.07 1.1-.14 1.65-.12.26 0 .5.22.77.3.26.07.53.12.8.14.37.03.74.03 1.11 0 .1 0 .25-.13.26-.22.06-.3.07-.6.13-.9.01.1.03.21.03.32 0 1.78 0 3.56-.02 5.33 0 .8 0 .8-.8.93-.36.06-.72.07-1.08.07l-3.09.01h-.45ZM11.64 46.95c.4-.05.78-.13 1.17-.15l4.01-.2h.36c.2-.03.3.03.44.23s.45.27.69.4l.02-.16c-.23.13-.46.25-.66.4-.03.02.1.24.15.34-.02.2-.05.38-.05.56.01.27-.58 1.05-.84 1.04-2.17-.09-4.34-.12-6.43-.76a.93.93 0 0 1-.41-.24c.2-.06.42-.13.63-.17.23-.05.48-.04.72-.1.2-.04.53-.04.27-.41-.03-.05 0-.14.01-.27.51-.05 1.03-.08 1.54-.16.32-.04.63-.19.95-.22.22-.02.45.08.67.13l.03-.12-.26-.07 2.75-.18v-.1l-5.74.32-.02-.11Zm1.54 2h.05V48h-.05v.95Zm.12-.34h.03v-.5h-.03v.5ZM24.43 47.05l.49 1.07c-.06.32-.13.72-.22 1.1-.02.09-.16.2-.24.2-1.45.04-2.9.06-4.35.07-.09 0-.2-.16-.26-.27-.04-.07.02-.18 0-.27a1.4 1.4 0 0 1 .3-1.32c.07-.1-.02-.35-.05-.58h4.33Z'
          />
          <path
            fill={RED}
            d='M7.85 47.3c-.22.1-.36.16-.47.25-.09.08-.13.21-.22.3a1.1 1.1 0 0 1-.27.24c-.09.05-.2.06-.31.13.37-.16.46.14.66.32.28.24.65.41 1 .52 1 .32 2 .45 3.06.43 1.1-.03 2.21.14 3.32.21.64.05 1.28.07 1.93.12.08 0 .16.13.24.2.09.05.18.15.27.15.81.02 1.63.01 2.44.01.1 0 .18 0 .28.09-.48.04-.96.11-1.45.1-2.11-.04-4.23-.05-6.34-.17-1.3-.08-2.6-.32-3.88-.54a3.75 3.75 0 0 1-2.13-1.06c-.33-.34-.3-.53.1-.78.51-.32 1.06-.51 1.77-.53ZM46.38 6.38c.18-.22.37-.43.52-.66.3-.44.6-.88.98-1.33 0 .46.02.92 0 1.38-.01.13-.11.28-.2.39l-1.2 1.48 1.2.17v.05L46.3 8c-.12.02-.25.05-.32.13-.49.53-.96 1.06-1.42 1.6-.39.47-.75.96-1.12 1.43l-.26.32-.19-.27v.47c.2-.15.38-.25.5-.39.3-.34.57-.71.87-1.04.16-.17.38-.27.57-.4l.28.53h2.05c-.63.04-1.26.08-1.88.14-.09 0-.17.12-.28.22-.08-.02-.15-.26-.2-.72l-.18.3-.06-.09-2.07 2.2c-.07-.72.02-1.25.42-1.74 1.05-1.3 2.06-2.61 3.08-3.92.09-.1.16-.22.23-.33l.06-.06ZM-1.91 4.92c.4.42.71.79 1.06 1.1.18.15.45.28.68.29 1.12.02 2.25 0 3.38 0 .19 0 .37.07.56.1l-.03.13H-.5c.1.17.16.3.24.4l2.78 3.42c.04.05.02.16.01.24l-.1.73-.8-.93c-.13-.14-.29-.26-.4-.4-.09-.11-.1-.28-.18-.39-.18-.24-.39-.46-.59-.68-.23-.27-.45-.54-.7-.8-.08-.06-.24-.05-.35-.09l-.69-.24.02-.13.37-.17c-.23-.24-.43-.5-.68-.72A.86.86 0 0 1-1.93 6c.03-.32 0-.64 0-1.08h.01ZM-6.53-.01c.15.07.3.1.39.19.73.8 1.46 1.6 2.17 2.43.14.17.22.43.23.66.04.43.02.88.02 1.4-.13-.1-.2-.14-.24-.2l-2.4-2.59a.94.94 0 0 1-.28-.92c.06-.3.07-.6.11-.97ZM48.72 14.57c.02.13.06.26.06.38l-.06 25.57c0 1.8-.02 3.6-.04 5.4 0 .16 0 .33-.09.5v-3.96l.04-21.79v-5.71c0-.13.06-.26.1-.4l-.01.01ZM52.63.84l.2 1.1-.15.01-.27-1.78-.07-.04c-.15.58-.42 1.16-.43 1.74a1.97 1.97 0 0 1-.72 1.5c-.46.42-.87.9-1.34 1.4V2.8c0-.04.06-.08.09-.11.74-.83 1.5-1.65 2.23-2.5.18-.22.23-.54.31-.74l.15 1.4ZM-2.74 50.79c-.05-7.68-.1-15.35-.13-23.03h.16V50c.25-.17.4-.25.54-.36.38-.32.77-.65 1.14-.99.4-.34.4-.35.74.02l-.14-.43c.19-.19.37-.37.7-.2.12.05.32-.06.6-.12-1.23 1.02-2.37 1.98-3.5 2.94l-.11-.06ZM4.5 42.47v2.81c0 .42-.16.52-.56.4a5.3 5.3 0 0 0-.9-.15c-.2-.02-.32-.07-.32-.3v-2.86c.12.69.2.76.94.85.29.04.53-.2.84-.75ZM46.98 39.94c-.43-.06-.5 0-.5.46l.01 7.05c0 .13-.05.26-.08.38l-.1-.02c-.01-.11-.03-.23-.03-.35V40.3c0-.6 0-.57.6-.61.27-.02.52-.18.78-.27a.3.3 0 0 1 .18-.02c.1.04.21.1.3.16.07.04.18.12.17.15-.02.08-.1.15-.16.21-.03.03-.1.02-.15.03-.68.13-.83.3-.84 1v7.42c0 .11-.02.23-.1.34-.1-2.92-.12-5.83-.08-8.76ZM20.68 38.7c.13-.34.23-.67.38-.97.04-.08.22-.14.33-.14l2.28.12c.08 0 .16.02.3.04l-.13-1.46h.06c.04.7.1 1.4.13 2.09 0 .06-.11.19-.18.2l-3.07.17c-.03 0-.07-.03-.1-.05ZM37.2 49.69l.26-.14v-.06l-2.55.34v-.09l2.33-.32c.16-.2.24-.32.35-.4.19-.12.4-.21.6-.34.29-.2.5-.45.35-.8.2-.08.38-.13.53-.23.37-.22.89-.05 1.18.42.16.27.04.63-.38.79-.88.31-1.78.55-2.67.82ZM25.23 50.19c.7-.04 1.42.02 2.1-.13 1.3-.3 2.64-.3 3.96-.4 1-.07 2.01 0 3.02 0 .03 0 .07.03.1.05-.38.43-8.97.84-9.18.48ZM20.77 14.01c-.3.45-.56.91-.9 1.33-.13.18-.4.26-.61.36-.69.33-1.38.64-2.07.98-.16.08-.29.23-.45.32.88-1.58 2.53-2.18 3.93-3.08l.1.1ZM52.87 26.75h.07v21.73l-.07.01V26.75ZM-6.04 53.39l.22.15-.85.63.32-.95c.04-.12.08-.25.17-.34.66-.62 1.33-1.22 2-1.83.08-.07.18-.11.31-.2.03.59.17 1.1-.44 1.45-.31.18-.57.47-.86.71-.25.2-.45.54-.87.38ZM49.93 50.92c.74.58 1.5 1.14 2.21 1.76.27.24.19.62.05 1.1-.81-.74-1.58-1.4-2.3-2.1-.13-.13-.06-.46-.08-.7l.12-.06ZM8.23 18.92v-6.45c0-.1.12-.2.18-.3.05.1.15.2.15.3l-.01 5.9c0 .08-.13.16-.18.25-.06.1-.1.22-.14.3ZM20.02 50.25l.24-.12-.08-.3h2.55c.6 0 1.21-.02 1.81-.01.1 0 .18.13.26.2-.08.09-.15.25-.23.25l-4.43.02-.12-.04ZM25.08 51.02h-5.74l-.03-.09c.13-.06.26-.17.4-.18 1.68-.04 3.36-.08 5.04-.1.12 0 .25.15.37.23l-.04.14ZM37.17 32.58v-15.1l.13-.01c.01.2.05.41.04.62l-.03 2-.07 2.47V23l.09-.24v9.82l-.16-.01ZM32.23 30.43V26.4c-.01-1.32 0-2.65-.1-4.01.03-.11.14-.3.14-.49.02-1.24 0-2.48 0-3.72v-.41c.21.65.15 12.48-.04 12.67ZM11.13 45.6V27.66h.01l.17 17.95h-.18ZM-6.68 27.54v14.4h-.06v-14.4h.06ZM22 45.12c-.08-.27-.18-.46-.19-.66-.02-.78 0-1.57-.01-2.35 0-.49 0-.51.46-.4v3.22c0 .14.02.29 0 .42-.03.1-.08.23-.16.28-.05.02-.24-.07-.25-.13-.02-.1.04-.23.1-.34.01-.04.09-.06.05-.04ZM17.79 17.34l-.35-.19-.07.1-.16-.35 2.27-1.13-1.03 1.8-.07-.04.21-.58-.06-.04c-.13.15-.24.32-.39.45-.07.06-.2.06-.31.1l-.04-.12ZM52.8 23.56V12.37h.09v11.2h-.08Z'
          />
          <path
            fill={RED}
            d='m5.13 8.39-1.6-.01c-.1 0-.2-.12-.3-.19.09-.06.18-.17.28-.17 1.1-.01 2.2-.01 3.31 0 .1 0 .18.1.26.16-.09.06-.17.18-.27.19H5.13v.02ZM20.49 17.78c-.58-.75-.45-1.38.32-1.49l-.08-.5.34.09v.04l-.2-.02c.2.65.4 1.3.58 1.94l-.1.05-.9-.7.04.6ZM24.3 16.28c-.25-.21-.41-.4-.33-.81.06-.32-.2-.7-.3-1.04a1 1 0 0 1-.06-.34c.63.57.58 1.6 1.43 2.06l.03-.48c.27.13.35.33.33.9l-1.06-.27a.67.67 0 0 1-.04-.02ZM-6.91 13.94c-.02.19-.06.38-.06.57v9.83c0 .13 0 .26-.07.4l-.03-.33c0-3.37-.02-6.75-.01-10.13 0-.12.1-.25.17-.37v.03ZM51.04 9.64c.07-.1.13-.19.21-.27.46-.47.93-.92 1.38-1.4.1-.1.17-.29.17-.44.02-1.33.01-2.66.02-4 0-.1 0-.2.08-.31v5.63l-.26-.44-1.51 1.32-.1-.1Z'
          />
          <path
            fill={RED}
            d='M-6.91 13.94v-.03c.05-.11.13-.22.14-.34l-.02-.78c-.02-.62.46-.98 1.06-.83-.28.22-.6.42-.84.69-.11.13-.07.4-.07.61l.02 6.1c0 .14 0 .28-.08.42l-.03-.24-.01-5.3c0-.1-.12-.2-.17-.3ZM46.63 48.63c.7.61 1.33 1.14 1.92 1.71.14.14.16.41.24.62l-.12.06c-.68-.62-1.36-1.24-2.03-1.88-.06-.06 0-.26 0-.51ZM52.37 22.71v-4.84l.03-4.54c0-.57-.43-1.14-1-1.31l-.12-.05.03-.12c.15.04.32.04.44.12.52.37.76.83.75 1.52-.07 3-.06 6.01-.09 9.02v.2h-.04ZM46.38 6.38l-.06.06c-1.2.07-2.4-.07-3.66.11-.04-.01-.18-.1-.31-.1l-2.14.01c-.1 0-.2.15-.28.22.1-.33.12-.35.5-.36l5.64-.05c.1 0 .21.07.31.1ZM24.73 46.9h-.67l-3.84-.05c-.11 0-.22-.06-.33-.1.1-.05.2-.14.3-.14 1.3 0 2.6 0 3.9.03.22 0 .44.07.66.1l-.02.15ZM34.67 43.22l.15-12.15h.07l-.13 12.15h-.09ZM40.16 36.7l.06-.18h.06c0 .26.05.52-.02.76-.02.08-.29.11-.45.12.3-.65-.08-1.05-.32-1.53a3.25 3.25 0 0 0-.73-.89c-.13-.12-.34-.18-.5-.27-.05-.03-.12-.11-.1-.15.02-.08.07-.18.14-.22.07-.04.22-.06.26-.01.33.33.7.65.95 1.03.27.4.43.88.65 1.33ZM46.3 48.82l-1.84-1.67c.38-.07.67-.05.94.25.27.3.63.53.92.82.1.12.12.33.17.5l-.18.1ZM16.13-4.93l2.17.55c-.08.54-.17.6-.62.4l-.94-.4a.52.52 0 0 0-.22-.04c-.41.03-.47-.03-.4-.5ZM-.53 43.28c.42-.1 1.02-.22 1.62-.37.06-.01.14-.13.14-.2.02-.3 0-.6 0-.92.3.2.42.6.32.88a.8.8 0 0 0-.04.39c.06.37-.1.66-.47.75-.29.07-.59.12-.88.16.4-.2.93-.09 1.26-.58l-1.27.26-.01-.06 1.05-.25-.01-.06H-.53ZM27 16.8l-1.02.1.1.93c-.2-.06-.6-1.39-.52-1.91.08.03.15.05.22.09l1.2.64.01.15ZM52.09-4.85c.16.16.29.28.4.41.03.04.04.11.04.17v.96l-.55-.49-.38.62-.14-.02c0-.11-.03-.26.02-.33.16-.2.21-.4.22-.68 0-.24.28-.48.4-.64h-.01ZM37.09 46.75c-.56-.1-1.1-.19-1.64-.3-.07 0-.12-.1-.18-.16.08-.06.14-.15.22-.16l1.26-.12c.28-.02.41.25.34.74ZM52.6 45.83v6.61c-.19-.13-.23-6.09 0-6.61ZM-.67 42.22l.43-.1c.69-.17.82-.37.68-1.07-.03-.13-.05-.26-.11-.38-.52-.97-.37-2.04-.39-3.07l.03-.12.13-.08c.02.15.04.27.04.38 0 .63-.02 1.26 0 1.88 0 .2.08.4.13.6.12.42.3.83.36 1.25.07.46-.18.7-.65.7h-.65ZM52.35 35.1v-8.27h.06v8.26h-.06ZM8.44 12.05c-.1-.21-.2-.34-.2-.47a5.5 5.5 0 0 1 .24-1.72c.03-.1.17-.23.27-.24.4-.03.82-.02 1.23-.02.07 0 .14.07.2.11-.06.04-.13.12-.2.12-.39.01-.78.02-1.18.01-.21 0-.31.09-.3.3.02.52.05 1.03.05 1.54 0 .13-.08.26-.11.37ZM40.92 28.23l-.43.32.04-2.32c0-.11.05-.25.13-.33.72-.68 1.57-.53 2.43-.33-.3-.02-.61 0-.9-.05-.58-.1-.99.2-1.4.5-.05.03-.1.1-.1.14-.02.52-.03 1.04-.01 1.56 0 .14.12.27.24.51ZM15.16 22.6l.86.6c-.17.1-.33.17-.47.26-.4.24-.4.39-.03.64l.12.1c-.1.1-.3.06-.63-.1l.33.4-.31.17c-.17-.4-.04-.74.11-1.09.05-.11.04-.25.04-.38l-.02-.6ZM31.47 10.13V8.03c0-.06-.04-.17-.06-.18-.56-.06-.2-.46-.24-.7l.06.5c.25-.8 0-1.56-.05-2.34.5 1.57.31 3.2.42 4.8l-.13.02ZM18.5-2.28c-.12 0-.24 0-.36-.03-.06-.02-.14-.1-.14-.17 0-.29-.03-.58.03-.87.03-.2.18-.37.27-.55l.2.05v1.58ZM11.5 50.43l5.68.36v.1a42.5 42.5 0 0 1-5.69-.46ZM8.35 34.47c.2-.26.4-.55.64-.8.33-.34.25-.76.21-1.16 0-.07-.14-.12-.21-.18l-.21-.2c.04-.03.09-.1.13-.1.1 0 .24 0 .3.06.35.36.34 1.2.01 1.6-.12.15-.18.35-.31.5-.13.15-.3.26-.46.4l-.1-.12ZM2.9 11.63l-.23-.46.3-.28c.52.32.6 1.02.44 1.55-.2-.18-.42-.34-.61-.53-.03-.03.05-.16.08-.25l.44.67.1-.08-.52-.62ZM-6.75 8.07l1.97 1.87c-.73-.18-1.97-1.38-1.97-1.87ZM47.93 38v.94c-.01.08-.1.16-.15.24-.04-.07-.12-.15-.12-.22 0-.64.02-1.29.04-1.93 0-.08.08-.15.12-.23.03.08.1.16.1.24v.97ZM24.3 16.28l.04.02c.2.14.4.3.62.4.33.14.43.34.28.67l-.17.37-.18-.58-.12.04-.07.72c.06-.37 0-.7-.23-1.03-.12-.16-.12-.4-.17-.61ZM-3.38 47.4h-.03v-5.77h.03v5.77ZM8.18 34.44V27.1h.05v7.36h-.05ZM28.04 50.84l5.89-.37v.1l-5.87.36-.02-.09ZM3.82 24.8c.18.18.35.38.55.54.1.08.26.14.4.15.7.01 1.42-.02 2.13.02.33.01.64.15.95.3-1.01-.4-2.06-.11-3.1-.18-.31-.02-.55-.12-.72-.4-.08-.12-.2-.24-.3-.36l.1-.07ZM-6.6 45.79v7.73h-.03v-7.74h.03ZM1.26 45.99c.7-.32.24-1 .42-1.52l-.52.13c.04-.15.06-.26.1-.36.03-.12.09-.24.14-.36.11.1.32.2.33.31.03.65.01 1.3.01 1.94l-.48-.14ZM19.77 15.97l-.07.55.48-.11c-.09.23-.74.6-.91.53-.04-.02-.08-.07-.1-.1-.18-.34.18-.88.6-.87ZM22.14 17.44 23.71 16c-.02.23-.57.46-.04.85l-1.49.64-.04-.05ZM-1.28 24.78h3.24v.09h-3.24v-.1ZM39.15 8.23c.1-.07.21-.18.32-.19.5-.02.99-.01 1.48 0 .1 0 .2.1.3.14l-.03.13h-2l-.07-.08ZM17.52 45.78l-5.8.39c.1-.17 4.82-.51 5.8-.4ZM40 9.62h3.55v.08H40L40 9.62ZM38.57 14.2l1.34.01c.06 0 .15.11.15.17 0 .06-.1.16-.15.17a8.7 8.7 0 0 1-1.08-.01c-.08-.01-.14-.18-.26-.34ZM1.2 47.03c-.38-.22-.39-.23-.13-.63.06-.08.15-.16.22-.23.03.1.08.21.08.32 0 .3-.03.6-.06.91-.01.07-.11.18-.16.17-.07 0-.16-.1-.19-.16-.02-.05.05-.14.1-.2l.14-.18ZM22.98 17.31c.36-.16.71-.34 1.08-.48.08-.03.23.08.32.16.02.02-.03.2-.08.22-.41.2-.85.26-1.32.1ZM24.59 46.47h-4.6v-.09h4.6v.09ZM-7 49.95v-4.36h.05v4.35h-.04ZM4.54 31.12v-5.24h.09c0 .15 0 .3.02.45l.1.7c0 .05.03.1.01.15-.34.96-.1 1.96-.15 2.94-.03.33.02.66.04 1h-.11ZM6.48 31.73c-.02.39-.15.86-.04 1.27.1.4.43.75.65 1.1-.15 0-.85-.67-.94-.94-.14-.45.07-1.2.33-1.43ZM46.42 8.24 45.2 9.62c-.03.03-.12.02-.18.04 0-.07 0-.15.03-.19l1.1-1.25c.05-.05.15-.05.22-.07l.05.1ZM37.92 22.51c0-.42-.06-.85.03-1.25.04-.19.35-.35.57-.46.2-.1.45-.12.72-.12l-.18.14c-.04.03-.1.04-.14.06-.6.25-.9.7-.9 1.33l-.01.3h-.09ZM45.44 34.72c-.07.1-.17.2-.2.32-.13.39-.43.23-.68.25 0-.13-.04-.34.01-.36.27-.14.55-.22.84-.33l.03.12ZM46.48 1.79 47.53.1c.04-.07.14-.1.21-.13 0 .1.05.22 0 .28-.39.53-.8 1.04-1.2 1.56l-.06-.03ZM24.8 45.9h-4.87v-.08h4.88v.07ZM-7.02 34.56v-6.9H-7v6.9h-.03ZM6.87 36.49l-.22 1.35c-.01 0-.1-.04-.1-.08-.05-.35-.12-.7-.1-1.05.01-.26.19-.31.42-.22ZM52.52 53c.29.08.38.83.19 1.42-.22-.1-.31-.8-.19-1.41ZM28.48 1.05c-.1-.04-.24-.05-.32-.12-.46-.34-.9-.7-1.42-1.11.84.17 1.25.75 1.74 1.23ZM38.96 13.64V9.65h.8l.01.07c-.14.02-.27.05-.4.04-.25-.02-.32.09-.32.32l.03 3.27v.29h-.12ZM-6.65 20.17v4.57h-.05v-4.57h.05ZM11.2-4.04v3.27h-.03v-3.27h.03ZM48.72 14.57c-.03-.09-.1-.17-.1-.26-.01-.71 0-1.43.07-2.14l.03 2.4ZM2.7 46.76c0-.25-.02-.4 0-.54.03-.12.1-.23.15-.35.15.08.31.14.42.25.03.03-.07.23-.15.33-.09.1-.22.16-.42.3ZM48.6 5.58V1.63h.05v3.96h-.04ZM34.66 16.08v-2.06l.07.25.04-.09v1.9h-.11ZM40.62 14.66l-.4-.3c.16-.08.33-.21.51-.22.1-.01.21.18.32.29l-.43.23ZM17.33 49.6l-.1-.09v-.1c.75.04 1.5.1 2.24.15v.04h-2.14ZM44.33 40.53c0-.3-.02-.58 0-.87 0-.07.11-.13.18-.2.05.07.14.14.15.22.03.22.03.43-.23.55-.07.04-.07.2-.1.3ZM50.8 53.53l1.82 1.68-.08.08-1.82-1.69.07-.07ZM44.16 34.67h-.04V31.1h.04v3.58ZM34.87 40.98v4.83h-.03v-4.82h.03ZM15.36 22l.4-.63.05.13.87-.22-1.25.79-.07-.06ZM20.88 37.6l.55-3.13h.08l-.55 3.14h-.08ZM52.91 9.94v1.82h-.07V9.94h.07ZM-1.7 33.34v1.65c-.23-.23-.2-1.47 0-1.65ZM43.3 23.18v-4.54h.03v4.54h-.03ZM28.74 28.38c.07-.06.08-.09.1-.08.34.04.52-.26.71-.44.1-.1.02-.41.02-.61l.29.92-1.12.2ZM44.18 23.93v4.5h-.03v-4.5h.03ZM7.87 16.3v-4.5h.02v4.5h-.02ZM40.24 38.42c.04.31.47.44.12.7-.1.06-.36.06-.42-.02-.27-.33.21-.36.3-.68ZM-1.9 10.35H.3v.05H-1.9v-.05ZM34.77 22.15v4.09h-.05v-4.1h.05ZM35.22 22.14v3.34h-.03v-3.34h.03ZM7.9 39.46c-.71-.13-1.26-.84-1.12-1.39.08.65.57.99 1.12 1.39ZM1.64 28.93v2.4h-.05v-2.4h.05ZM44.16 35.52v2.1h-.04v-2.11h.04ZM10.26 11.58v3.68h-.04v-3.68h.04ZM42.43 3.35c-.25.75-.98 1.34-1.56 2.04l1.56-2.04ZM30-2.69c0-.08-.02-.16 0-.24.03-.07.1-.12.14-.18.05.06.13.12.14.2.02.13.03.28 0 .41-.02.1-.11.17-.17.25-.04-.08-.09-.17-.12-.26v-.18ZM51.36 30.5v-3.87h.03v3.88h-.03ZM-6.65 10.25l.57.16.01.12-.58.36v-.64ZM5.68 9.7h1.97v.02H5.68V9.7ZM24.7 17.92c.09.56-.12 1.35-.5 1.94l.5-1.93ZM10.57 45.86l.29.32c-.13.07-.25.16-.39.21-.03.02-.17-.13-.16-.16.04-.1.13-.2.26-.37ZM23.68 33l-.46-2.46.05-.01.5 2.44-.09.02ZM40.12 29.03l.08.54-.63.03.44-.62.1.05ZM35.94 7.15c.3-.09.55-.17.81-.22.07-.01.2.03.22.08.04.06.01.18-.03.24-.02.04-.15-.01-.23-.02l-.77-.08ZM-7.01 8.4V5.03H-7v3.39h-.02ZM44.24 47.6l1.73 1.6-.06.07-1.73-1.61.06-.06ZM20.89 14.9l-.1-.1-.65 1.07-.1-.06c.2-.35.42-.7.64-1.05.02-.04.12-.07.14-.05.06.04.08.11.11.17l-.04.03ZM15.48 27.32c-.31.08-.52-.16-.53-.44-.02-.48.48-.07.6-.33-.13.18-.27.34-.37.53-.01.02.2.17.3.24ZM2.6 7.72l-.03-.84c0-.05.08-.1.12-.16.04.06.12.12.12.18l-.09.82h-.11ZM-2.06 4.67V1.4h.03v3.25l-.03.02ZM8.78 35.49l-.04-.27 1.17.23v.04H8.78ZM-7.06 13.64v-1.19h.14l-.07 1.2h-.07ZM19.4-3.97h-.61c-.05-.01-.15-.13-.13-.16.03-.07.12-.18.16-.17.2.06.4.14.6.22l-.02.1Z'
          />
          <path
            fill={RED}
            d='M41.47 15.53c-.29-.25-.54-.6-.88-.72-.34-.12-.75-.03-1.13-.03.76 0 1.63-.26 2.02.74v.01ZM35.32 48.61l-.6.03.02-.32.6.13-.02.16ZM14.98 25.45v.2l.5-.07.01.1-.69.23-.01.17-.07-.01.15-.67.11.05ZM37.2 13.33h-.06v-2.19h.06v2.19ZM52.35 35.53v3h-.03v-3h.03ZM35.95 50.17l2.18-.41v.07l-2.17.4-.01-.06ZM37.2 49.68l-2.28.38-.01-.1 2.3-.27h-.01ZM-4.83 40.65c.03-.17.08-.33.09-.5 0-.63 0-1.26.05-1.9v2.62l-.05.02-.09-.25ZM31.93 18.17c-.03-.02-.08-.04-.08-.07l-.06-.54h.16l.1.58-.12.03ZM43.3 40.81v1.86h-.04V40.8h.04ZM-4.08 53.16c-.23.2-.47.39-.8.65l.58-.65-.46.14-.02-.1.65-.15.05.11ZM1.51 45.44c-.42.48-.9.5-1.42.59l1.42-.59ZM33.04 8.56l.62-.26c.03-.02.11.04.12.07 0 .05-.02.14-.05.15-.21.07-.43.11-.64.17l-.05-.13ZM29.3 26.28c0-.4-.13-.54-.72-.78l.05-.1c.24.15.5.27.72.46.06.05-.03.28-.05.42ZM25.96 49.34l1.22-.11.01.14-1.22.09-.01-.12ZM7.7 15.82c-.3-.19-.6-.37-.88-.57-.1-.07-.16-.2-.15-.36l1.06.9c-.01.02-.02.03-.04.03ZM38.17 8.11h.73c-.16.13-.24.25-.32.25-.15 0-.3-.07-.45-.1l.04-.15ZM41.44 8.4c-.04-.5.25-.37.43-.38.04 0 .1.1.14.16l-.57.22ZM45.61 37.6v-2.64h.02v2.65h-.02ZM44.95 46.93l-.36-.57c.08 0 .17-.03.25 0 .25.06.26.22.11.57ZM39.67 31.67l.08-.27c.1.04.24.05.28.12.06.1.05.25.08.38-.06-.01-.13 0-.18-.04-.1-.05-.17-.13-.25-.2v.01ZM47.92 14.12l-.01.64c0 .04-.11.09-.17.08-.04-.01-.13-.1-.12-.12.07-.21.16-.41.24-.61l.06.01ZM2.82 29.9h.07v.97h-.07v-.96ZM-3.88 39.24c.03.27.09.57.1.88 0 .09-.1.2-.17.27-.05.04-.15 0-.34 0 .65-.33.27-.85.4-1.15ZM47.7 6.43l-.6.99-.16-.1c.25-.3.5-.6.76-.88ZM50.02 16.74h1.43v.06h-1.43v-.06ZM19.5 17.2l.3-.23.3.74-.6-.51ZM37.4 28.27v2.32h-.02v-2.32h.02ZM15.95-1.74h-.03v-2.24h.03v2.24ZM34.86 11.9c-.08-.17-.17-.35-.22-.54-.02-.08.06-.18.1-.27.05.07.13.15.14.23.01.2-.01.4-.02.58Z'
          />
          <path
            fill={RED}
            d='m14.98 25.45-.11-.05c0-.21.03-.36.32-.32.15.01.31-.1.45-.16l-.66.53ZM15.59 30.31l-.75.07-.02-.12.75-.11.02.16ZM4.1 32.9c-.16.08-.25.17-.3.15-.1-.03-.16-.14-.24-.2.06-.07.14-.2.18-.2.1.04.2.13.35.25ZM52.92-4.34v1.58h-.05v-1.58h.05ZM46.52 39.34v-2.26h.02v2.25h-.02ZM36.3 10.83c-.31.02-.26-.2-.26-.38 0-.06.07-.11.11-.17.05.05.13.1.14.14.02.13 0 .26 0 .41ZM-.9 50.17l-1.24 1.17-.05-.06 1.25-1.14.03.03ZM4.51 9.75H3.38V9.7h1.13a.7.7 0 0 0 0 .04ZM34.4 8.85v.82l-.05.01-.09-.82.14-.01ZM14.48 28.41v-.84h.08v.86l-.08-.02ZM-1.97 25.01v2.05H-2V25h.02ZM24.16 40.64v1.3c-.06-.42-.3-.84 0-1.3ZM-6.97-1.63l.08 1.2H-7v-1.2h.03ZM50.52 53.55l.87.88.03-.03-.88-.87-.02.02ZM25.43 17.35l-.03-.13.08-.43c.05.02.14.05.14.07l-.07.5h-.12ZM47.28 17.95v.03h-2.02v-.03h2.02ZM35.36 11.08l-.26.34c-.04-.05-.13-.14-.12-.17.06-.1.15-.2.23-.3l.15.13ZM44.67 42.63c-.23.02-.48.09-.63-.33l.66.23-.03.1ZM19.48-.85l.27-.23V.28c-.03-.32-.06-.65-.12-.96 0-.07-.1-.12-.15-.17ZM7.94 5.75v1.9h-.02v-1.9h.02ZM4.82 33.18c-.11.1-.18.2-.25.2s-.14-.1-.22-.15c.07-.08.13-.18.21-.22.05-.01.14.1.26.17ZM37.94 19.73v-1.87 1.87ZM52.4 10.99c-.29-.17-.3-.39 0-.58v.58ZM47.8 11.2V13 11.2ZM50.03 34.2l.41.12.01.1c-.11.04-.23.1-.34.08-.07-.02-.1-.16-.16-.24l.08-.06ZM25 46.45l.2-.33c.08.18.18.37.32.62l-.52-.29ZM-4.83 40.64c-.08-.08-.23-.16-.23-.25-.02-.47-.01-.94.03-1.41 0 .4-.02.82 0 1.22.02.16.13.3.2.45ZM34.35 50.08l-1.2.08v-.05l1.2-.12v.09ZM8.75 38.7c-.1.07-.19.16-.2.15a.47.47 0 0 1-.17-.2c0-.04.08-.1.13-.16l.24.2ZM23.51 34.22l.25 1.37-.07.01-.24-1.37.06-.01ZM2.79 37.59v-1.63h.02v1.63h-.02ZM17.71 42.95l.64.8-.06.04-.65-.78.07-.06ZM51.55 46.44v-1.56h.04v1.58l-.04-.02ZM1.4 44.76v.43l-.37-.2.37-.23ZM35.3 19.62v1.59h-.04v-1.59h.04ZM48.55 11.57v-.95a2 2 0 0 1 .06 0v.95h-.06ZM31.24 26.88v1.59h-.03v-1.6h.03ZM44.57 43.34c-.14.02-.29.04-.43.04-.02 0-.04-.07-.05-.11l.45-.09.03.16ZM28.85 23.65c-.05.18.04.51-.34.37l.34-.37ZM-3.14 52.3l.6-.56.04.04-.55.6-.09-.08ZM8.26 36.34c-.04-.14-.1-.23-.08-.28a.37.37 0 0 1 .2-.17c.04-.02.11.08.17.12l-.3.33ZM4.48 32.5l-.05-.35.2-.02.02.35-.17.02ZM43.32 24.16v1.42-1.42ZM22.94 14.93l.35-.58.1.06-.34.59-.11-.07ZM52.77-1.56h.1V-1h-.1v-.56ZM52.92 24.4v.55h-.05l-.05-.55h.1ZM46.65 34.6l.4.39-.08.09-.41-.38.1-.1ZM24.17 40.28l-.2-.83.08-.02.2.83-.08.02ZM51.61 47.7a1 1 0 0 1-.04 0v-.72h.04v.72ZM39.68 31.67l-.68.32c.15-.27.39-.33.67-.32ZM44.68 41.52l-.84.05v-.07l.84-.06v.08ZM41.95.64l.77.7-.75-.72-.02.02ZM2.97 32.08l.62.08v.08l-.64-.06c0-.04 0-.07.02-.1ZM.26 8.87l.6.67-.08.07-.56-.69.04-.05ZM-5.86 39.96v1.26h-.02v-1.27l.02.01ZM52.63.85V-.7.84ZM5.11 40.38c-.09-.1-.17-.16-.18-.23 0-.05.09-.1.14-.16.06.05.14.1.17.17.01.03-.06.1-.13.22ZM39.1-.4l.45.04-.02.1h-.44l.01-.13ZM-7.01-3.45v.58h-.03v-.58H-7ZM-6.59-2.67l-.27-.3.13-.09c.2.05.2.2.14.4ZM31.95-2.01v-.7h.06v.7h-.06ZM-.22 36.54l-.45-.17.03-.1.47.1-.05.17ZM49.98 35.7v-.87h.1c-.03.12-.08.24-.1.36v.5ZM39.44 6.9a736 736 0 0 1-.42.7l-.05-.02.4-.73.07.05Z'
          />
          <path
            fill={RED}
            d='M-6.6-2.66v1.4l.01-1.4ZM3 14.1l-.18-.32.11-.07.2.31-.12.08ZM2.97 25.25l-.12.74v-.76l.12.02ZM12.07 21.77v1.1h-.02v-1.1h.02ZM18.19 45.95l-.46-.61.07-.05.45.61-.06.05ZM47.61 36.5l.2-.4.1.05-.17.4-.13-.04ZM50.06 42.61l-.02.46h-.12l.02-.47.12.01ZM27.9 45.88h-.8v-.07l.8.07ZM35.69 2.42v.59h-.05l-.04-.59h.09ZM43.27 16.63v-.7h.06l-.05.7h-.01ZM8.4 39l.26.24c-.11.02-.2.05-.21.03-.05-.06-.08-.15-.11-.22L8.4 39ZM17.78 46.25l.23.66c-.22-.04-.33-.27-.23-.66ZM5.74 48.61l.62.59-.04.04-.63-.58.05-.05ZM50.07 53.07c.13-.02.25-.06.37-.06.04 0 .08.12.16.26l-.53-.2ZM26.09 9.57l-.36.03-.01-.14.35-.06.02.17ZM1.4 23.13h.4v.08h-.4v-.08ZM1.75 42.89v-1.01h.03v1h-.03ZM45.56 30.53l-.77-.07v-.03h.77v.1ZM25.7 6.93l.8-.15v.07l-.79.14-.01-.06ZM47.87 7.2v.95-.96ZM38.66 47.23l-.74-.23.02-.08.74.25-.02.06ZM6.63 30.85v-.55h.07l.04.57-.11-.02ZM22.51 25.96c-.1.06-.15.13-.22.13-.03 0-.11-.1-.1-.14.01-.06.09-.12.15-.14.03 0 .09.08.17.15ZM-6.23 42.1l-.3.46-.08-.06.31-.44.07.04ZM49.97 11.92h.94v.03h-.94v-.03ZM50.02 20.6l.67.09-.02.12-.65-.2ZM22.55 28.43c-.07.07-.13.16-.16.15-.06-.03-.1-.1-.15-.15.04-.04.08-.1.13-.1.05-.01.1.05.18.1ZM9.95 50.16l.8.13v.04l-.8-.12v-.05ZM1.25 41.03l-.02.4-.24-.27.26-.13ZM-1.39-1.83v-.84h.01v.84h-.01ZM25.64 18.4v-.87h.02v.86h-.02ZM19.8 47.68l-.45.2-.04-.09.45-.18.03.07ZM38.1 47.27l.46.2-.04.09-.44-.23.02-.06ZM44.32 40.53l.26.03-.3.33.05-.36ZM2.13 12.86c-.1.02-.17.06-.23.05-.05-.01-.1-.09-.11-.13 0-.05.06-.1.1-.16l.24.24ZM17.33 49.6l.16.22-.39.03-.03-.06.26-.18ZM1.85 31.32v-.24h.1l.01.24h-.1ZM40.76 12.25l-.04-.57h.05v.57h-.01ZM42.34 2.73l.32-.63.05.03-.3.63-.07-.03ZM47.8 18.8v.4h-.05l-.02-.39h.07ZM51.7 53.5l.47.42-.04.04-.47-.43.05-.04ZM44.12 40.2v.78h-.02v-.75l.02-.02ZM29.14-.95v.82h-.03v-.82h.03ZM34.8 29.12v.78-.78ZM39 31.99l-.37.62-.1-.08L39 32ZM7.74 8.24l-.53-.13.02-.1.52.16v.07ZM2.08 11.34l-.38-.39.03-.03.38.4-.03.02ZM19.25 17.49l.25.58-.06.03-.26-.58.07-.03ZM44.5 45.02l-.38-.08c0-.04.02-.08.03-.11l.38.1-.03.1ZM17.79 17.34l.04.11-.03.26h-.1l.09-.37ZM9.6 29.63l-.06-.24.1-.03c.04.08.06.16.09.25l-.14.02ZM14.17 46.53v-.36h.07v.36h-.07ZM8.26 38.22v.71h-.02v-.71h.02ZM28.16 21.72l.41.32-.05.07-.4-.34.04-.05ZM40.17 30.85l-.22.3-.06-.05.17-.3.1.05ZM42.41 11.9l.03.38h-.06l-.04-.38h.07ZM49.29 44.93v-.66h.02v.65h-.02ZM44.14 38.26v.68l-.04-.03v-.63l.04-.02ZM5.52 28.27l.19.24-.1.07-.19-.24.1-.07ZM44.1 13.48c0 .11-.02.22-.04.34l-.12-.03.08-.33.08.02ZM16.19.23l.47-.12.01.05-.46.17-.02-.1ZM25.66 18.97v.44l-.05-.46.05.02ZM41.48 15.52l.46.46-.04.04-.43-.49h.01Z'
          />
          <path
            fill={RED}
            d='m50.07 53.07.05.15-.34-.21.02-.06.27.12ZM33.25 46.06l.6.07v.03l-.61-.05.01-.05ZM27.24 18.07l-.04-.26.09-.02.06.26-.1.02ZM5.67 12.13c-.04-.07-.08-.11-.07-.14 0-.05.05-.1.08-.14.03.04.1.08.1.12 0 .04-.06.09-.1.16ZM1.78 43.57l.23.02-.27.25.04-.27ZM-.94 50.14l.45-.42.05.05-.47.4-.03-.03ZM9.16 31.58l.12-.4.09.02-.15.4-.06-.02ZM24.8 19.4l.28-.41.05.04-.3.4-.04-.03ZM1.75 46.88l-.1-.25.1-.04.1.26-.1.03ZM47.73 20.11l-.02-.27.09-.01.06.28h-.13ZM14.7.69l-.06.24-.1-.01.03-.26.13.03ZM.63 37h.31v.06H.63v-.05ZM37.28 15.73v-.24h.09v.24h-.09ZM-1.66-1.4l.22.12-.04.08-.22-.11.04-.09ZM2.55 42.85v-.5h.01v.51h-.01ZM38.43 14.94l.32-.2.05.07-.31.22-.06-.09ZM34.73 20.46v-.5h.02v.5h-.02ZM23.01 21.02l.42-.1v.04l-.41.09v-.03ZM43.32 33.15v.49-.49ZM47.7 6.44l.14-.23.03.32-.17-.1ZM47.92 24.86l-.07.28-.1-.02.08-.3.09.04ZM47.86-4.21c-.08-.05-.15-.1-.23-.13l.04-.1.23.14c0 .03-.02.06-.04.09ZM-6.75-.92v.48h-.01v-.48ZM25.13 47.11l.36-.19.03.06-.37.2-.02-.07ZM-1.72 29.48l-.26-.09.02-.06.27.06-.03.1ZM44.68 46.88l-.2-.08.06-.13.18.13a6.3 6.3 0 0 0-.04.08ZM52.17 55.22l-.26-.24.02-.02.27.24-.03.02ZM52.4 39.96v.42-.41ZM48.66 49.15v.44h-.02v-.45h.02ZM50.9 34.05l-.05.37h-.02l.04-.38h.04ZM43.33 15.43h-.01V15v.43ZM22.1 22.94l-.26-.27.03-.04.27.27-.04.04ZM35.17 50.33l-.39.07v-.05l.42-.07-.03.05ZM34.35 46.42l-.09-.1a.3.3 0 0 1 .1-.1c.01 0 .07.06.07.08 0 .04-.04.07-.08.12ZM34.7 21.36v-.3h.04v.3h-.04ZM23.68 13.06l-.03.29-.08-.01.03-.3.08.02ZM-7-2.45v.41h-.02v-.4h.03ZM33.7 6.02l-.35-.29.06-.05.3.34ZM43.62 1.77l-.36-.07.01-.07.36.06v.08ZM52.12 34.3l.1.22-.1.04-.07-.24.07-.03ZM49.04 51.3l.24.18-.05.06-.23-.2.04-.05ZM44.17 44.18v-.23h.04l.04.23h-.08ZM35.48 11.87l-.03.26h-.06l.04-.27h.05ZM26.63 11.7l-.04-.2.07-.02.05.2-.08.02ZM8.47 8.89h.02v.31l-.02-.01v-.3ZM35.3 47.34l-.2-.02.01-.05.2.02-.01.05ZM52.84 2.86h-.05v-.4h.05v.4ZM4.88 9.71h.35v.02H4.9v-.02ZM23.96 16.6v-.23l.06.01.01.21h-.07Z'
          />

          <path
            fill={RED}
            d='M15.64 11.14c-.02-.05-.06-.1-.05-.16.08-.53-.23-.64-.67-.63-.2 0-.42-.04-.35-.34.01-.06.1-.15.14-.15l2.4.24v.13c-.31.08-.62.21-.94.23-.31.02-.42.12-.4.41.01.1-.02.19-.04.28h-.09ZM15.69 6.53c.02.28.06.56.07.84.01.28 0 .56-.07.85v-1.7.01ZM15.98 4.97v.36h-.1l-.04-.36h.14Z'
          />
          <path
            fill={RED}
            d='M15.7 6.53v-.89l-.01.9v-.01ZM14.17 21.6l-.04-.24.09-.03.05.26-.1.02ZM13.75 8.45c0 .15-.02.29-.03.43h-.07l.07-.43h.03ZM13.94 9.92H14v.25h-.06v-.25Z'
          />
        </g>
      </g>
    </svg>
  )
}

export default FixABookingSVG