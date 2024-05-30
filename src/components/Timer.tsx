'use client'

import Countdown from 'react-countdown'

export const Timer = () => {
  return (
    <Countdown
      // June 11 noon EST
      date={1718121600000}
      renderer={({ hours, minutes, days }) => (
        <p className="font-bold text-[42px] leading-[0.8]">
          {days}D {hours}H {minutes}M
        </p>
      )}
    />
  )
}
