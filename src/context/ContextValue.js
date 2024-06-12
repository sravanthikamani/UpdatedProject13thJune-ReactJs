import React, {createContext, useState} from 'react'

const ContextValue = createContext()

const ContextProvider = ({children}) => {
  const [trips, setTrips] = useState([])

  const addTrip = trip => {
    setTrips(prevTrips => [...prevTrips, trip])
  }

  return (
    <ContextValue.Provider value={{trips, addTrip}}>
      {children}
    </ContextValue.Provider>
  )
}

export {ContextValue, ContextProvider}
