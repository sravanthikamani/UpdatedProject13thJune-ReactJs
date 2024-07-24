import {Component} from 'react'
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
    const selectedOption = this.travelAssistanceList.find(
      option => option.value === selectedValue,
    )
    if (selectedOption) {
      updateFormData('travelAssistanceType', {
        value: selectedValue,
        displayText: selectedOption.displayText,
      })
    }
  }

  handleNextClick = () => {
    const {
      updateFormData,
      setActiveStep,
      setTravelAssistanceCompleted,
    } = this.context
    const {history} = this.props
    console.log('Next button clicked') // Debugging log
    updateFormData('isTravelAssistanceNeeded', true)
    setTravelAssistanceCompleted(true)
    setActiveStep('Confirmation')
    console.log('Navigating to /confirmation') // Debugging log
    history.push('/confirmation')
  }

  handlePreviousClick = () => {
    const {setActiveStep, setTravelAssistanceCompleted} = this.context
    const {history} = this.props
    console.log('Previous button clicked') // Debugging log
    setActiveStep('Guests')
    setTravelAssistanceCompleted(false)
    console.log('Navigating to /guests') // Debugging log
    history.push('/guests')
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
                        value={travelAssistanceType?.value || ''}
                        onChange={this.handleSelectChange}
                        className="select-section"
                      >
                        {this.travelAssistanceList.map(option => (
                          <option key={option.value} value={option.value}>
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
