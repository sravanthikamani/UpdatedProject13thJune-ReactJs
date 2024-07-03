import React, {Component, useContext} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

class YourDetails extends Component {
  handleChange = e => {
    const {name, value} = e.target
    const {updateFormData, updateFormErrors} = this.context
   
    updateFormData(name, value)
    updateFormErrors({[name]: ''})
  }
  handleNext = e => {
    e.preventDefault()
    const {
      formData,
      updateFormData,
      setActiveStep,
      setYourDetailsCompleted,
      updateFormErrors,
    } = this.context
    const {name, startLocation, endLocation} = formData
    
    const errors = {}
    if (!name.trim()) {
      errors.name = 'Enter your name'
    } else if (!startLocation.trim()) {
      errors.startLocation = 'Enter your start location'
    } else if (!endLocation.trim()) {
      errors.endLocation = 'Enter your end location'
    }
    updateFormData('errors', errors)
    if (Object.keys(errors).length === 0) {
     
      setYourDetailsCompleted(true)
      setActiveStep('Date Selection')
      this.props.history.push('/date-selection')
    }
  }

  render() {
    const {formData} = this.context
    const {name, startLocation, endLocation, errors = {}} = formData

    return (
      <>
        <Header />

        <div className="your-left-section">
          <SideBar />
          <div className="your-details-section">
            <div className="your-right-section">
              <form
                className="form-details"
                onSubmit={this.submitFormYourDetails}
              >
                <div>
                  <h1 className="your-details-heading">Your Details</h1>
                  <p className="your-details-paragraph">
                    Enter your name and location details
                  </p>
                </div>
                <div className="your-details-form">
                  <div className="your-input-container input-container">
                    <label htmlFor="name" className="label-name">
                      NAME
                    </label>
                    <input
                      className={`input-name ${errors.name ? 'error' : ''}`}
                      type="text"
                      id="name"
                      value={name}
                      name="name"
                      placeholder="Enter name"
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    {errors.name && (
                      <AiOutlineExclamationCircle className="error-icon" />
                    )}
                    {errors.name && <p className="error-name">{errors.name}</p>}
                  </div>
                  <div className="your-input-container input-container">
                    <label htmlFor="start" className="label-name">
                      Start Location
                    </label>
                    <input
                      className={`input-name ${
                        errors.startLocation ? 'error' : ''
                      }`}
                      type="text"
                      id="start"
                      value={startLocation}
                      name="startLocation"
                      placeholder="Enter start location"
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    {errors.startLocation && (
                      <AiOutlineExclamationCircle className="error-icon" />
                    )}
                    {errors.startLocation && (
                      <p className="error-name">{errors.startLocation}</p>
                    )}
                  </div>
                  <div className="your-input-container input-container">
                    <label htmlFor="end" className="label-name">
                      End Location
                    </label>
                    <input
                      className={`input-name ${
                        errors.endLocation ? 'error' : ''
                      }`}
                      type="text"
                      id="end"
                      value={endLocation}
                      name="endLocation"
                      placeholder="Enter end location"
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    {errors.endLocation && (
                      <AiOutlineExclamationCircle className="error-icon" />
                    )}
                    {errors.endLocation && (
                      <p className="error-name">{errors.endLocation}</p>
                    )}
                  </div>
                  <div className="next-button-container">
                    <Link to="/date-selection">
                      <button
                        type="submit"
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

YourDetails.contextType = FormContext

export default withRouter(YourDetails)
