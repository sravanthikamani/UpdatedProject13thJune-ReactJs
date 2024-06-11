import React, {useContext} from 'react'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

const Confirmation = () => {
  const {formData} = useContext(FormContext)

  const {
    name,
    startLocation,
    endLocation,
    startDate,
    endDate,
    guests,
    isTravelAssistanceNeeded,
    travelAssistanceType,
  } = formData

  return (
    <>
      <Header />
      <div className="confirmation-left-section">
        <SideBar />
        <div className="confirmation-section">
          <div className="confirmation-right-section">
            <h1 className="confirmation-heading">Confirmation</h1>
            <p className="confirmation-paragraph">
              Review your details before submission
            </p>
            <div className="confirmation-details">
              <p>Name: {name}</p>
              <p>Start Location: {startLocation}</p>
              <p>End Location: {endLocation}</p>
              <p>Start Date: {startDate}</p>
              <p>End Date: {endDate}</p>
              <p>
                Guests - Adults: {guests.adults}, Children: {guests.children},
                Infants: {guests.infants}
              </p>
              <p>
                Travel Assistance Needed:{' '}
                {isTravelAssistanceNeeded ? 'Yes' : 'No'}
              </p>
              {isTravelAssistanceNeeded && (
                <p>Assistance Type: {travelAssistanceType}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Confirmation
