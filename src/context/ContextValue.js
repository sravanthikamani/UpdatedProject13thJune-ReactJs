import React from 'react'

const ContextValue = React.createContext({
  isNumberColored: true,
  changeActiveTab: () => {},
  isMyTrips: false,
})
export default ContextValue
