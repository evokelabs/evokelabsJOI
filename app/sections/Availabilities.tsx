import { RED } from '../libs/UIConstants'
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
    return availabilities.some(period => date >= new Date(period.start) && date <= new Date(period.end))
  }

  const today = new Date()
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1)
  const monthAfterNext = new Date(today.getFullYear(), today.getMonth() + 2, 1)

  return (
    <PanelBackground headerTitle='Fix a booking' contentHead={<ContentHead icon={<IconSmall />} heading='Availabilities' />}>
      <div className='space-y-10 my-4'>
        <div className='flex flew-row gap-4 justify-between'>
          <Calendar
            className={`bg-grid-darkRed font-rajdhani text-white-blur font-semibold border-2-red p-2 text-center`}
            value={today}
            activeStartDate={today}
            next2Label={null}
            prev2Label={null}
            nextLabel={null}
            prevLabel={null}
            tileClassName={tileClassName}
          />
          <Calendar
            className={`bg-grid-darkRed font-rajdhani text-white-blur font-semibold border-2-red p-2 text-center`}
            value={nextMonth}
            next2Label={null}
            prev2Label={null}
            nextLabel={null}
            prevLabel={null}
            tileClassName={tileClassName}
          />
          <Calendar
            className={`bg-grid-darkRed font-rajdhani text-white-blur font-semibold border-2-red p-2 text-center`}
            value={monthAfterNext}
            next2Label={null}
            prev2Label={null}
            nextLabel={null}
            prevLabel={null}
            tileClassName={tileClassName}
          />
        </div>
        <HeadingHighlight BGColor={RED} fullWidth={false} heading='currently available' />
        <ButtonDefault label='Send an email' />
      </div>
    </PanelBackground>
  )
}

export default Availabilities
