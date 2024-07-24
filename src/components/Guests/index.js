// Guests Component
import {Component} from 'react'
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
    const {setActiveStep, setGuestsCompleted} = this.context
    setGuestsCompleted(true)
    setActiveStep('Travel Assistance')
    history.push('/travel-assistance')
  }

  handlePreviousClick = () => {
    const {history} = this.props
    const {setActiveStep, setGuestsCompleted} = this.context
    setActiveStep('Date Selection')
    setGuestsCompleted(false)
    history.push('/date-selection')
  }

  render() {
    const {formData} = this.context
    const {adults, infants, child} = formData.guests

    return (
      <>
        <Header />
        <div className="guests-left-section">
          <SideBar />
          <div className="guests-section-guest">
            <div className="guests-right-section">
              <h1 className="guests-heading">Guests</h1>
              <p className="guests-paragraph">Select your guests</p>
              <form className="form-details-guests">
                <div className="guests-form">
                  <div className="guest-input-container">
                    <p className="guests-adults">Adults</p>
                    <p className="guests-age">Age 13 or above</p>
                  </div>
                  <div className="adults-container">
                    <button
                      className="decrease"
                      type="button"
                      onClick={() => this.handleDecrement('adults')}
                    >
                      -
                    </button>
                    <p
                      className="adults-number"
                      name="adults"
                      data-testid="count-adults"
                    >
                      {adults}
                    </p>
                    <button
                      className="increase"
                      type="button"
                      onClick={() => this.handleIncrement('adults')}
                    >
                      +
                    </button>
                  </div>

                  <div className="guest-input-container">
                    <p className="guests-children">Children</p>
                    <p className="guests-age">Age 2-12</p>
                  </div>
                  <div className="adults-container">
                    <button
                      className="decrease"
                      type="button"
                      onClick={() => this.handleDecrement('child')}
                    >
                      -
                    </button>
                    <p
                      className="adults-number"
                      name="child"
                      data-testid="count-children"
                    >
                      {child}
                    </p>
                    <button
                      className="increase"
                      type="button"
                      onClick={() => this.handleIncrement('child')}
                    >
                      +
                    </button>
                  </div>

                  <div className="guest-input-container">
                    <p className="guests-infants">Infants</p>
                    <p className="guests-age">Under 2 years</p>
                  </div>
                  <div className="adults-container">
                    <button
                      className="decrease"
                      type="button"
                      onClick={() => this.handleDecrement('infants')}
                    >
                      -
                    </button>
                    <p
                      className="adults-number"
                      name="infants"
                      data-testid="count-infants"
                    >
                      {infants}
                    </p>
                    <button
                      className="increase"
                      type="button"
                      onClick={() => this.handleIncrement('infants')}
                    >
                      +
                    </button>
                  </div>
                  <div className="guests-container">
                    <button
                      className="guest-previous-button"
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
