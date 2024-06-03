import {Link} from 'react-router-dom'
import SideBar from '../SideBar'
import Header from '../Header'

import './index.css'

const Confirmation = props => {
  const {
    name,
    startLocation,
    endLocation,
    startDate,
    endDate,
    getTotalGuestsCount,
    isTravelAssistanceNeeded,
  } = props

  const submitFormConfirmation = event => {
    event.preventDefault()
  }

  return (
    <>
      <Header />
      <div className="confirmation-left-section">
        <SideBar />
        <div className="confirmation-section">
          <div className="confirmation-right-section">
            <h1 className="confirmation-heading">Confirmation</h1>
            <p className="confirmation-paragraph">Confirm your details</p>

            <form
              className="form-details-confirmation"
              onSubmit={submitFormConfirmation}
            >
              <div className="confirmation-form">
                <div className="confirmation-input-container">
                  <p className="list-name">Name:</p>
                  <p className="name-section">{name}</p>
                </div>

                <div className="confirmation-input-container">
                  <p className="list-start">Start Location:</p>
                  <p className="start-section">{startLocation}</p>
                </div>

                <div className="confirmation-input-container">
                  <p className="list-end">End Location:</p>
                  <p className="end-section">{endLocation}</p>
                </div>

                <div className="confirmation-input-container">
                  <p className="list-start-date">Start Date:</p>
                  <p className="start-date-section">{startDate}</p>
                </div>

                <div className="confirmation-input-container">
                  <p className="list-end-date">End Date:</p>
                  <p className="end-date-section">{endDate}</p>
                </div>

                <div className="confirmation-input-container">
                  <p className="list-guests">Guests:</p>
                  <p className="guests-section">{getTotalGuestsCount}</p>
                </div>

                <div className="confirmation-input-container">
                  <p className="list-travel">
                    Travel
                    <br /> Assistance:
                  </p>

                  <p className="travel-list-section">
                    {isTravelAssistanceNeeded}
                  </p>
                </div>

                <div className="confirmation-container">
                  <Link to="/your-details">
                    <button
                      type="button"
                      className="confirmation-cancel-button"
                    >
                      Cancel
                    </button>
                  </Link>
                  <div className="confirmation-previous">
                    <Link to="/awesome">
                      <button
                        type="button"
                        className="confirmation-confirm-button"
                      >
                        Confirm
                      </button>
                    </Link>
                  </div>
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
