import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

class DateSelection extends Component {
  handleChangeStartDate = event => {
    const {updateFormData, updateFormErrors} = this.context
    updateFormData('startDate', event.target.value)
    if (event.target.value) {
      updateFormErrors({startDate: ''}) // Clear error if start date is selected
    }
  }

  handleChangeEndDate = event => {
    const {updateFormData, updateFormErrors, formData} = this.context
    const {startDate} = formData
    const endDate = event.target.value

    if (!startDate) {
      updateFormErrors({startDate: 'Select start date'}) // Set error if start date is not selected
    } else if (!endDate) {
      updateFormErrors({endDate: 'Select the end date'}) // Set error if end date is not selected
    } else if (new Date(endDate) < new Date(startDate)) {
      updateFormErrors({endDate: 'The end date cannot be less than Start Date'}) // Set error if end date is less than start date
    } else {
      updateFormData('endDate', endDate)
      updateFormErrors({endDate: ''}) // Clear error if end date is valid
    }
  }

  render() {
    const {
      formData,
      formData: {errors},
    } = this.context
    const {startDate, endDate} = formData

    return (
      <>
        <Header />
        <div className="dateselection-left-section">
          <SideBar />
          <div className="dateselection-section">
            <div className="dateselection-right-section">
              <h1 className="dateselection-heading">Date Selection</h1>
              <p className="dateselection-paragraph">
                Select your Start and End Date.
              </p>

              <form
                className="form-details-dateselection"
                onSubmit={e => e.preventDefault()}
              >
                <div className="dateselection-form">
                  <div className="date-input-container">
                    <label htmlFor="startdate" className="label-date">
                      Start Date
                    </label>
                    <input
                      className={`input-date ${
                        errors.startDate ? 'error' : ''
                      }`}
                      type="date"
                      id="startdate"
                      name="startDate"
                      value={startDate}
                      placeholder="dd/mm/yyyy"
                      onChange={this.handleChangeStartDate}
                    />
                    {errors.startDate && (
                      <p className="error-date">{errors.startDate}</p>
                    )}
                  </div>

                  <div className="date-input-container">
                    <label htmlFor="enddate" className="label-date">
                      End Date
                    </label>
                    <input
                      className="input-date"
                      type="date"
                      id="enddate"
                      value={endDate}
                      name="endDate"
                      placeholder="dd/mm/yyyy"
                      onChange={this.handleChangeEndDate}
                    />
                    {errors.endDate && (
                      <p className="error-date">{errors.endDate}</p>
                    )}
                  </div>

                  <div className="dateselection-container">
                    <Link to="/your-details">
                      <button
                        type="button"
                        className="dateselection-previous-button"
                      >
                        Previous
                      </button>
                    </Link>
                    <div className="dateselection-previous">
                      <Link to={endDate ? '/guests' : '#'}>
                        <button
                          type="button"
                          className="dateselection-next-button"
                          onClick={() => {
                            if (!endDate) {
                              alert('Select the end date') // Display error message if end date is not selected
                            }
                          }}
                        >
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

DateSelection.contextType = FormContext
export default DateSelection
