import React, {Component, useContext} from 'react'
import {Link} from 'react-router-dom'
import {FormContext} from '../../FormContext'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

class DateSelection extends Component {
  handleChangeStartDate = event => {
    const {updateFormData} = this.context
    updateFormData('startDate', event.target.value)
  }

  handleChangeEndDate = event => {
    const {updateFormData} = this.context
    updateFormData('endDate', event.target.value)
  }

  render() {
    const {formData} = this.context
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
                onSubmit={this.submitFormDateSelection}
              >
                <div className="dateselection-form">
                  <div className="date-input-container">
                    <label htmlFor="startdate" className="label-date">
                      Start Date
                    </label>
                    <input
                      className="input-date"
                      type="date"
                      id="startdate"
                      name="startDate"
                      value={startDate}
                      placeholder="dd/mm/yyyy"
                      onChange={this.handleChangeStartDate}
                    />
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
                      <Link to="/guests">
                        <button
                          type="button"
                          className="dateselection-next-button"
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
