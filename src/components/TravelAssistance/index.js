import React, {Component, useContext} from 'react'
import {withRouter} from 'react-router-dom'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

class TravelAssistance extends Component {
  handleChange = event => {
    const {updateFormData} = this.context
    updateFormData('isTravelAssistanceNeeded', event.target.checked)
  }

  handleSelectChange = event => {
    const {updateFormData} = this.context
    updateFormData('travelAssistanceType', event.target.value)
  }

  handleNextClick = () => {
    const {history} = this.props
    history.replace('/confirmation')
  }

  handlePreviousClick = () => {
    const {history} = this.props
    history.replace('/guests')
  }

  render() {
    const {formData} = this.context
    const {isTravelAssistanceNeeded, travelAssistanceType} = formData

    return (
      <>
        <Header />
        <div className="travelassistance-left-section">
          <SideBar />
          <div className="travelassistance-section">
            <div className="travelassistance-right-section">
              <h1 className="travelassistance-heading">Travel Assistance</h1>
              <p className="travelassistance-paragraph">
                Select your Travel Assistance.
              </p>
              <form
                className="form-details-travelassistance"
                onSubmit={this.submitFormTravelAssistance}
              >
                <div className="travelassistance-form">
                  <div className="travelassistance-input-container">
                    <label
                      className="label-checkbox"
                      htmlFor="travelAssistance"
                    >
                      Need Travel Assistance?
                    </label>
                    <input
                      type="checkbox"
                      id="travelAssistance"
                      checked={isTravelAssistanceNeeded}
                      onChange={this.handleChange}
                    />
                  </div>
                  {isTravelAssistanceNeeded && (
                    <div className="travel-assistance-dropdown">
                      <label
                        className="travel-select-label"
                        htmlFor="assistanceType"
                      >
                        Assistance Type
                      </label>
                      <select
                        id="assistanceType"
                        value={travelAssistanceType}
                        onChange={this.handleSelectChange}
                      >
                        <option value="">Select</option>
                        <option value="Car">Car</option>
                        <option value="Bus">Bus</option>
                        <option value="Train">Train</option>
                      </select>
                    </div>
                  )}
                  <div className="travelassistance-container">
                    <button
                      className="travel-previous-button"
                      type="button"
                      onClick={this.handlePreviousClick}
                    >
                      Previous
                    </button>
                    <button
                      className="travel-next-button"
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
TravelAssistance.contextType = FormContext

export default withRouter(TravelAssistance)
