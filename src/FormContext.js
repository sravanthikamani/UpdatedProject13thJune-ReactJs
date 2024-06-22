import React, {createContext, useState} from 'react'

const FormContext = createContext()

const initialFormData = {
  name: '',
  startLocation: '',
  endLocation: '',
  startDate: '',
  endDate: '',
  guests: {
    adults: 1,
    child: 0,
    infants: 0,
  },
  isTravelAssistanceNeeded: false,
  travelAssistanceType: '',
  totalGuests: 1,
  errors: {},
}

const FormProvider = ({children}) => {
  const [formData, setFormData] = useState(initialFormData)
  const [trips, setTrips] = useState([])
  const [formValid, setFormValid] = useState(false)
  const [activeTab, setActiveTab] = useState('Your Details')

  const addTrip = trip => {
    setTrips(prevTrips => [...prevTrips, trip])
  }

  const updateTotalGuests = guests => {
    const {adults, child, infants} = guests
    const totalGuests = adults + child + infants
    setFormData(prevState => ({
      ...prevState,
      guests,
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

  const resetFormData = () => {
    setFormData(initialFormData)
  }
 const setActiveStep = step => { // Add setActiveStep method
    setActiveTab(step)
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
        resetFormData,
        setActiveStep,
        isFormValid: formValid,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, FormProvider}
