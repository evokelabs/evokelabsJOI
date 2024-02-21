import { RED, TEAL, ORANGE } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'

import Calendar from 'react-calendar'
import availabilities from './availabilities.json'

const Availabilities = () => {
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    // Add 'unavailable' class to dates within unavailable periods
    if (view === 'month' && isUnavailable(date)) {
      return 'unavailable'
    }
  }

  const isUnavailable = (date: Date) => {
    // Check if the date is within any of the unavailable periods
    return availabilities.dates.some(period => date >= new Date(period.start) && date <= new Date(period.end))
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

  return (
    <PanelBackground headerTitle='Fix a booking' contentHead={<ContentHead icon={<IconSmall />} heading='Availabilities' />}>
      <div className='space-y-10 my-4'>
        <div className='flex flew-row gap-4 justify-between'>
          <CustomCalendar value={today} />
          <CustomCalendar value={nextMonth} />
          <CustomCalendar value={monthAfterNext} />
        </div>
        <HeadingHighlight
          BGColor={availabilities.status === 'unavailable' ? RED : availabilities.status === 'available' ? TEAL : ORANGE}
          fullWidth={false}
          heading={`currently ${availabilities.status}`}
        />
        <ButtonDefault label='Send an email' />
      </div>
    </PanelBackground>
  )
}

export default Availabilities
