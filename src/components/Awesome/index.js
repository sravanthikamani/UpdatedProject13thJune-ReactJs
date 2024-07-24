import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import SideBar from '../SideBar'
import Header from '../Header'
import {FormContext} from '../../FormContext'

import './index.css'

const Awesome = () => {
  const {resetFormData, changeActiveTab} = useContext(FormContext)
  const history = useHistory()

  const handleNewTrip = () => {
    resetFormData()
    changeActiveTab('Your Details')
    history.push('/your-details')
  }

  return (
    <>
      <Header />
      <div className="awesome-left-section">
        <SideBar />
        <div className="awesome-section">
          <div className="awesome-right-section">
            <div className="form-details-awesome">
              <div className="awesome-form">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                  className="tick-img"
                  alt="Success"
                />
                <h1 className="awesome-heading">Awesome!</h1>
                <p className="awesome-paragraph">
                  Your booking has been confirmed.
                </p>

                <button
                  type="button"
                  className="awesome-button"
                  onClick={handleNewTrip}
                >
                  Book a New Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Awesome
