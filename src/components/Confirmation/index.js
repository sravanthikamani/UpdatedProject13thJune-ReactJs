import React, {useContext} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

const Confirmation = () => {
  const {formData, addTrip} = useContext(FormContext)
  const history = useHistory()
  const {
    name,
    startLocation,
    endLocation,
    startDate,
    endDate,
    totalGuests,
    isTravelAssistanceNeeded,
    travelAssistanceType,
  } = formData

  console.log('Form data in Confirmation:', formData) // Log formData in Confirmation component

  const submitFormConfirmation = event => {
    event.preventDefault()
    const tripDetails = {...formData}
    console.log('Submitting form with details:', tripDetails) // Log trip details on submit
    addTrip(tripDetails) // Add the new trip to the list
    history.push('/awesome') // Redirect to Awesome page after confirming
  }

  return (
    <>
      <Header />
      <div className="confirmation-left-section">
        <SideBar />
        <div className="confirmation-section">
          <div className="confirmation-right-section">
            <h1 className="confirmation-heading" data-testid="heading">
              Confirmation
            </h1>
            <p className="confirmation-paragraph" data-testid="confirm-details">
              Confirm your details
            </p>
            <form
              className="form-details-confirmation"
              onSubmit={submitFormConfirmation}
            >
              <div className="confirmation-form">
                <div className="confirmation-input-container">
                  <p className="list-name">Name:</p>
                  <p className="name-section" data-testid="name">
                    {name}
                  </p>
                </div>
                <div className="confirmation-input-container">
                  <p className="list-start">Start Location:</p>
                  <p className="start-section" data-testid="start-location">
                    {startLocation}
                  </p>
                </div>
                <div className="confirmation-input-container">
                  <p className="list-end">End Location:</p>
                  <p className="end-section" data-testid="end-location">
                    {endLocation}
                  </p>
                </div>
                <div className="confirmation-input-container">
                  <p className="list-start-date">Start Date:</p>
                  <p className="start-date-section" data-testid="start-date">
                    {startDate}
                  </p>
                </div>
                <div className="confirmation-input-container">
                  <p className="list-end-date">End Date:</p>
                  <p className="end-date-section" data-testid="end-date">
                    {endDate}
                  </p>
                </div>
                <div className="confirmation-input-container">
                  <p className="list-guests">Guests:</p>
                  <p className="guests-section" data-testid="guests">
                    {totalGuests}
                  </p>
                </div>
                <div className="confirmation-input-container">
                  <p className="list-travel">Travel Assistance:</p>
                  <p
                    className="travel-list-section"
                    data-testid="travel-assistance"
                  >
                    {travelAssistanceType}
                  </p>
                </div>
                <div className="confirmation-container">
                  <Link to="/your-details">
                    <button
                      type="button"
                      className="confirmation-cancel-button"
                      data-testid="cancel-button"
                    >
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="submit"
                    onClick={submitFormConfirmation}
                    className="confirmation-confirm-button"
                    data-testid="confirm-button"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Confirmation
