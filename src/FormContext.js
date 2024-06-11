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
  })

  const updateFormData = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <FormContext.Provider value={{formData, updateFormData}}>
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, FormProvider}
