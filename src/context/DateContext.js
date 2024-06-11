// DateContext.js
import React, {createContext, useState} from 'react'

const DateContext = createContext()

export const DateProvider = ({children}) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <DateContext.Provider
      value={{startDate, setStartDate, endDate, setEndDate}}
    >
      {children}
    </DateContext.Provider>
  )
}

export default DateContext
