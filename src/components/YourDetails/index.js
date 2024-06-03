import {Link} from 'react-router-dom'
import {Component} from 'react'
import SideBar from '../SideBar'
import Header from '../Header'

import './index.css'

class YourDetails extends Component {
  state = {
    name: '',
    startLocation: '',
    endLocation: '',
    errors: {
      name: '',
      startLocation: '',
      endLocation: '',
    },
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState(prevState => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: value.trim() === '' ? `Enter your ${name}` : '',
      },
    }))
  }

  handleNext = () => {
    const {name, startLocation, endLocation} = this.state
    const errors = {}
    if (!name.trim()) {
      errors.name = 'Enter your name'
    }
    if (!startLocation.trim()) {
      errors.startLocation = 'Enter your start location'
    }
    if (!endLocation.trim()) {
      errors.endLocation = 'Enter your end location'
    }
    this.setState({errors})
    if (Object.keys(errors).length === 0) {
      // Proceed to the next step
      console.log('Proceeding to next step')
    }
  }

  submitFormYourDetails = event => {
    event.preventDefault()
  }

  render() {
    const {name, startLocation, endLocation, errors} = this.state

    return (
      <>
        <Header />

        <div className="your-left-section">
          <SideBar />
          <div className="your-details-section">
            <div className="your-right-section">
              <h1 className="your-details-heading">Your Details</h1>
              <p className="your-details-paragraph">
                Enter your name and location details
              </p>

              <form
                className="form-details"
                onSubmit={this.submitFormYourDetails}
              >
                <div className="your-details-form">
                  <div className="your-input-container">
                    <label htmlFor="name" className="label-name">
                      NAME
                    </label>
                    <input
                      className="input-name"
                      type="text"
                      id="name"
                      value={name}
                      name="name"
                      placeholder="Enter name"
                      onChange={this.handleChange}
                    />
                    {errors.name && <p className="error-name">{errors.name}</p>}
                  </div>
                  <div className="your-input-container">
                    <label htmlFor="start" className="label-name">
                      Start Location
                    </label>
                    <input
                      className="input-name"
                      type="text"
                      id="start"
                      value={startLocation}
                      name="startLocation"
                      placeholder="Enter start location"
                      onChange={this.handleChange}
                    />
                    {errors.startLocation && (
                      <p className="error-name">{errors.startLocation}</p>
                    )}
                  </div>
                  <div className="your-input-container">
                    <label htmlFor="end" className="label-name">
                      End Location
                    </label>
                    <input
                      className="input-name"
                      type="text"
                      id="end"
                      value={endLocation}
                      name="endLocation"
                      placeholder="Enter end location"
                      onChange={this.handleChange}
                    />
                    {errors.endLocation && (
                      <p className="error-name">{errors.endLocation}</p>
                    )}
                  </div>
                  <div className="next-button-container">
                    <Link to="/date-selection">
                      <button
                        type="button"
                        className="your-next-button"
                        onClick={this.handleNext}
                      >
                        Next
                      </button>
                    </Link>
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
export default YourDetails
