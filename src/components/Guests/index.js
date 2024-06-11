import React, {Component, useContext} from 'react'
import {withRouter} from 'react-router-dom'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

class Guests extends Component {
  handleIncrement = type => {
    const {formData, updateFormData} = this.context
    const guests = {...formData.guests}
    guests[type] += 1
    updateFormData('guests', guests)
  }

  handleDecrement = type => {
    const {formData, updateFormData} = this.context
    const guests = {...formData.guests}
    guests[type] = Math.max(guests[type] - 1, type === 'adults' ? 1 : 0)
    updateFormData('guests', guests)
  }

  handleNextClick = () => {
    const {history} = this.props
    console.log('History props:', history)
    history.replace('/travel-assistance')
  }

  handlePreviousClick = () => {
    const {history} = this.props
    history.replace('/date-selection')
  }

  render() {
    const {formData} = this.context
    const {adults, children, infants} = formData.guests

    return (
      <>
        <Header />
        <div className="guests-left-section">
          <SideBar />
          <div className="guests-section-guest">
            <div className="guests-right-section">
              <h1 className="guests-heading">Guests</h1>
              <p className="guests-paragraph">
                Please enter the following details
              </p>
              <form
                className="form-details-guests"
                onSubmit={this.submitFormGuests}
              >
                <div className="guests-form">
                  <div className="guest-input-container">
                    <label className="label-guest" htmlFor="adults">
                      Adults
                    </label>
                    <div className="input-container">
                      <button
                        className="increment-decrement-button"
                        type="button"
                        onClick={() => this.handleDecrement('adults')}
                      >
                        -
                      </button>
                      <input
                        id="adults"
                        className="input-guest"
                        type="text"
                        value={adults}
                        readOnly
                      />
                      <button
                        className="increment-decrement-button"
                        type="button"
                        onClick={() => this.handleIncrement('adults')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="guest-input-container">
                    <label className="label-guest" htmlFor="children">
                      Children
                    </label>
                    <div className="input-container">
                      <button
                        className="increment-decrement-button"
                        type="button"
                        onClick={() => this.handleDecrement('children')}
                      >
                        -
                      </button>
                      <input
                        id="children"
                        className="input-guest"
                        type="text"
                        value={children}
                        readOnly
                      />
                      <button
                        className="increment-decrement-button"
                        type="button"
                        onClick={() => this.handleIncrement('children')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="guest-input-container">
                    <label className="label-guest" htmlFor="infants">
                      Infants
                    </label>
                    <div className="input-container">
                      <button
                        className="increment-decrement-button"
                        type="button"
                        onClick={() => this.handleDecrement('infants')}
                      >
                        -
                      </button>
                      <input
                        id="infants"
                        className="input-guest"
                        type="text"
                        value={infants}
                        readOnly
                      />
                      <button
                        className="increment-decrement-button"
                        type="button"
                        onClick={() => this.handleIncrement('infants')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="guest-button-container">
                    <button
                      className="guest-prev-button"
                      type="button"
                      onClick={this.handlePreviousClick}
                    >
                      Previous
                    </button>

                    <button
                      className="guest-next-button"
                      type="button"
                      onClick={this.handleNextClick}
                    >
                      Next
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
}
Guests.contextType = FormContext

export default withRouter(Guests)
