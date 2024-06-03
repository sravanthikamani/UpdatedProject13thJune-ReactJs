import {Link} from 'react-router-dom'
import {Component} from 'react'
import SideBar from '../SideBar'
import Header from '../Header'

import './index.css'

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

class TravelAssistance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTravelAssistanceNeeded: false,
    }
  }

  handleCheckboxChange = event => {
    this.setState({isTravelAssistanceNeeded: event.target.checked})
  }

  submitFormTravel = event => {
    event.preventDefault()
  }

  render() {
    const {isTravelAssistanceNeeded} = this.state
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
                onSubmit={this.submitFormTravel}
              >
                <div className="travelassistance-form">
                  <div className="travelassistance-input-container">
                    <input
                      type="checkbox"
                      id="travelid"
                      onChange={this.handleCheckboxChange}
                    />
                    <label
                      htmlFor="travelid"
                      className="travel-label"
                      type="checkbox"
                    >
                      Travel Assistance Needed
                    </label>
                  </div>

                  {isTravelAssistanceNeeded && (
                    <div className="select-container">
                      <label
                        htmlFor="travelAssistanceSelect"
                        className="travel-select-label"
                      >
                        Travel Assistance
                      </label>
                      <select
                        className="select-section"
                        id="travelAssistanceSelect"
                      >
                        {travelAssistanceList.map(option => (
                          <option
                            className="select-option"
                            value={option.value}
                            key={option.value}
                          >
                            {option.displayText}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="travelassistance-container">
                    <Link to="/guests">
                      <button type="button" className="travel-previous-button">
                        Previous
                      </button>
                    </Link>
                    <div className="travelassistance-previous">
                      <Link to="/confirmation">
                        <button type="button" className="travel-next-button">
                          Next
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
}
export default TravelAssistance
