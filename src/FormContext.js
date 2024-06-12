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
    totalGuests: '',
  })
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
      return newFormData
    })
  }

  return (
    <FormContext.Provider value={{formData, updateFormData}}>
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, FormProvider}
