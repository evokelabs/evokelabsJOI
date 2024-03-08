import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'

import Calendar from 'react-calendar'

import availabilities from './data/availabilities.json'
import { RED } from '../libs/UIConstants'
import AvailabilitiesSVG from '../ui/svg/mainMenu/AvailabilitiesSVG'
import EmailSVG from '../ui/svg/button/EmailSVG'
import { NextRouter } from 'next/router'
interface Period {
  start: string
  end: string
}

interface Availabilities {
  status: string
  dates: Period[]
}

enum Status {
  BUSY = 'busy',
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable'
}

const VIEW_MODE = 'month'

const Pulse = () => {
  return (
    <span className='relative flex h-4 w-4 justify-center items-center'>
      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40'></span>
      <span className='relative inline-flex rounded-full h-2 w-2  bg-black'></span>
    </span>
  )
}

const Availabilities = () => {
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === VIEW_MODE && isUnavailable(date)) {
      return Status.UNAVAILABLE
    }
  }

  const isUnavailable = (date: Date) => {
    if (availabilities.dates.length === 0) {
      return false
    }
    return availabilities.dates.some((period: Period) => date >= new Date(period.start) && date <= new Date(period.end))
  }

  const CustomCalendar = ({ value }: { value: Date }) => (
    <Calendar
      className={`bg-grid-darkRed font-rajdhani text-white-blur font-semibold border-2-red p-2 text-center`}
      value={value}
      activeStartDate={value}
      next2Label={null}
      prev2Label={null}
      nextLabel={null}
      prevLabel={null}
      tileClassName={tileClassName}
    />
  )

  const today = new Date()
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1)
  const monthAfterNext = new Date(today.getFullYear(), today.getMonth() + 2, 1)

  let availabilityStatusColor
  if (availabilities.status === Status.BUSY) {
    availabilityStatusColor = 'bg-orange'
  } else if (availabilities.status === Status.AVAILABLE) {
    availabilityStatusColor = 'bg-teal'
  } else if (availabilities.status === Status.UNAVAILABLE) {
    availabilityStatusColor = 'bg-red'
  }

  return (
    <PanelBackground
      headerTitle='Fix a booking'
      contentHead={
        <ContentHead
          icon={
            <>
              <AvailabilitiesSVG primaryColor={RED} />
              <IconSmall />
            </>
          }
          heading='Availabilities'
        />
      }
    >
      <div className='space-y-10 my-4'>
        <div className='flex flew-row gap-4 justify-between'>
          <CustomCalendar value={today} />
          <CustomCalendar value={nextMonth} />
          <CustomCalendar value={monthAfterNext} />
        </div>
        <div className={`flex flex-row items-center gap-4 w-fit  p-3 ${availabilityStatusColor}`}>
          <div className='inline'>
            <Pulse />
          </div>
          <div className='inline text-black uppercase font-rajdhani font-semibold text-[36px]  leading-[0.7]'>
            currently {availabilities.status}
          </div>
        </div>
        <div className='flex justify-between'>
          <ButtonDefault label='Send an email' svgIcon={<EmailSVG />} />
          <ButtonDefault />
        </div>
      </div>
    </PanelBackground>
  )
}

export default Availabilities
