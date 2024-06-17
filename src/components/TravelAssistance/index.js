import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

class TravelAssistance extends Component {
  constructor(props) {
    super(props)
    this.travelAssistanceList = [
      {value: 'car', displayText: 'Car'},
      {value: 'flight', displayText: 'Flight'},
      {value: 'bus', displayText: 'Bus'},
      {value: 'train', displayText: 'Train'},
    ]
  }

  handleChange = event => {
    const {updateFormData} = this.context
    updateFormData('isTravelAssistanceNeeded', event.target.checked)
  }

  handleSelectChange = event => {
    const {updateFormData} = this.context
    const selectedValue = event.target.value
    updateFormData('travelAssistanceType', selectedValue)
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
                    <input
                      type="checkbox"
                      id="travelAssistance"
                      checked={isTravelAssistanceNeeded}
                      onChange={this.handleChange}
                    />
                    <label
                      className="label-checkbox"
                      htmlFor="travelAssistance"
                    >
                      Travel Assistance Needed
                    </label>
                  </div>
                  {isTravelAssistanceNeeded && (
                    <div className="select-container">
                      <label
                        className="travel-select-label"
                        htmlFor="assistanceType"
                      >
                        Travel Assistance
                      </label>
                      <select
                        id="assistanceType"
                        value={travelAssistanceType}
                        onChange={this.handleSelectChange}
                        className="select-section"
                      >
                        {this.travelAssistanceList.map((option, index) => (
                          <option
                            key={option.value}
                            value={option.value}
                            selected={index === 0}
                          >
                            {option.displayText}
                          </option>
                        ))}
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
