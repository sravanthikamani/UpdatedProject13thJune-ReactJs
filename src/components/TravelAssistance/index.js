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
        <div className="travel-assistance-left-section">
          <SideBar />
          <div className="travel-assistance-section">
            <div className="travel-assistance-right-section">
              <h1 className="travel-assistance-heading">Travel Assistance</h1>
              <p className="travel-assistance-paragraph">
                Select the required assistance
              </p>
              <form
                className="form-details-travel-assistance"
                onSubmit={this.submitFormTravelAssistance}
              >
                <div className="travel-assistance-form">
                  <div className="travel-assistance-checkbox">
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
                        className="label-dropdown"
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
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                      </select>
                    </div>
                  )}
                  <div className="travel-assistance-button-container">
                    <button
                      className="travel-assistance-prev-button"
                      type="button"
                      onClick={this.handlePreviousClick}
                    >
                      Previous
                    </button>
                    <button
                      className="travel-assistance-next-button"
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
