import React, {createContext, useState} from 'react'

const FormContext = createContext()

const FormProvider = ({children}) => {
  const [formData, setFormData] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    isTravelAssistanceNeeded: false,
    travelAssistanceType: '',
    totalGuests: 1, // Initialize with 1 adult as per the default guests state
    errors: {}, // Initialize errors in the initial state
  })

  const [trips, setTrips] = useState([])
  const [formValid, setFormValid] = useState(false)
  const [activeTab, setActiveTab] = useState('Your Details')

  const addTrip = trip => {
    setTrips(prevTrips => [...prevTrips, trip])
  }

  const updateTotalGuests = guests => {
    const {adults, children, infants} = guests
    const totalGuests = adults + children + infants
    setFormData(prevState => ({
      ...prevState,
      totalGuests,
    }))
  }

  const updateFormData = (key, value) => {
    setFormData(prevState => {
      const newFormData = {
        ...prevState,
        [key]: value,
      }
      if (key === 'guests') {
        updateTotalGuests(value)
      }
      console.log('Updated formData:', newFormData) // Log updated formData
      return newFormData
    })
  }

  const updateFormErrors = errors => {
    setFormData(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        ...errors,
      },
    }))
  }

  const updateFormValidity = isValid => {
    setFormValid(isValid)
  }

  const changeActiveTab = tabName => {
    setActiveTab(tabName)
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        updateFormErrors,
        trips,
        addTrip,
        updateFormValidity,
        activeTab,
        changeActiveTab,
        isFormValid: formValid,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, FormProvider}
