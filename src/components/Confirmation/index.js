import React, {useContext} from 'react'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
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

  const submitFormConfirmation = event => {
    event.preventDefault()
    const tripDetails = {...formData}
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
            {/* Main heading element with text content "Confirmation" */}
            <h1 className="confirmation-heading" data-testid="heading">
              Confirmation
            </h1>

            {/* Paragraph element with text content "Confirm your details" */}
            <p className="confirmation-paragraph" data-testid="confirm-details">
              Confirm your details
            </p>

            <form
              className="form-details-confirmation"
              onSubmit={submitFormConfirmation}
            >
              <div className="confirmation-form">
                <div className="confirmation-input-container">
                  {/* Paragraph element with text content "Name" */}
                  <p className="list-name">Name:</p>
                  {/* Paragraph element displaying the name value from formData */}
                  <p className="name-section" data-testid="name">
                    {name}
                  </p>
                </div>

                <div className="confirmation-input-container">
                  {/* Paragraph element with text content "Start Location" */}
                  <p className="list-start">Start Location:</p>
                  {/* Paragraph element displaying the startLocation value from formData */}
                  <p className="start-section" data-testid="start-location">
                    {startLocation}
                  </p>
                </div>

                <div className="confirmation-input-container">
                  {/* Paragraph element with text content "End Location" */}
                  <p className="list-end">End Location:</p>
                  {/* Paragraph element displaying the endLocation value from formData */}
                  <p className="end-section" data-testid="end-location">
                    {endLocation}
                  </p>
                </div>

                <div className="confirmation-input-container">
                  {/* Paragraph element with text content "Start Date" */}
                  <p className="list-start-date">Start Date:</p>
                  {/* Paragraph element displaying the startDate value from formData */}
                  <p className="start-date-section" data-testid="start-date">
                    {startDate}
                  </p>
                </div>

                <div className="confirmation-input-container">
                  {/* Paragraph element with text content "End Date" */}
                  <p className="list-end-date">End Date:</p>
                  {/* Paragraph element displaying the endDate value from formData */}
                  <p className="end-date-section" data-testid="end-date">
                    {endDate}
                  </p>
                </div>

                <div className="confirmation-input-container">
                  {/* Paragraph element with text content "Guests" */}
                  <p className="list-guests">Guests:</p>
                  {/* Paragraph element displaying the totalGuests value from formData */}
                  <p className="guests-section" data-testid="guests">
                    {totalGuests}
                  </p>
                </div>

                <div className="confirmation-input-container">
                  {/* Paragraph element with text content "Travel Assistance" */}
                  <p className="list-travel">Travel Assistance:</p>
                  {/* Paragraph element displaying the travelAssistanceType value from formData */}
                  <p
                    className="travel-list-section"
                    data-testid="travel-assistance"
                  >
                    {travelAssistanceType}
                  </p>
                </div>

                <div className="confirmation-container">
                  <Link to="/your-details">
                    {/* Button element with text content "Cancel" */}
                    <button
                      type="button"
                      className="confirmation-cancel-button"
                      data-testid="cancel-button"
                    >
                      Cancel
                    </button>
                  </Link>
                  {/* Button element with text content "Confirm" */}
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
