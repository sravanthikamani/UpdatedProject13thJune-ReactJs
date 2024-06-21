import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FormContext } from '../../FormContext';
import SideBar from '../SideBar';
import Header from '../Header';
import './index.css';

const DateSelection = () => {
  const { formData, updateFormData, updateFormErrors } = useContext(FormContext);
  const { startDate, endDate, errors = {} } = formData;
  const history = useHistory();

  const handleChangeStartDate = event => {
    updateFormData('startDate', event.target.value);
    if (event.target.value) {
      updateFormErrors({ startDate: '' }); // Clear error if start date is selected
    }
  };

  const handleChangeEndDate = event => {
    const newEndDate = event.target.value; // Use a different variable name to avoid shadowing

    if (!startDate) {
      updateFormErrors({ startDate: 'Select start date' });
    } else if (!newEndDate) {
      updateFormErrors({ endDate: 'Select the end date' });
    } else if (new Date(newEndDate) < new Date(startDate)) {
      updateFormErrors({ endDate: 'The end date cannot be less than Start Date' });
    } else {
      updateFormData('endDate', newEndDate);
      updateFormErrors({ endDate: '' });
    }
  };

  const handleNext = () => {
    const newErrors = {}; // Use a different variable name to avoid shadowing

    if (!startDate) {
      newErrors.startDate = 'Select start date';
    } else if (!endDate) {
      newErrors.endDate = 'Select the end date';
    } else if (new Date(endDate) < new Date(startDate)) {
      newErrors.endDate = 'The end date cannot be less than Start Date';
    }

    updateFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      history.push('/guests');
    }
  };

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
                    className={`input-date ${errors.startDate ? 'error' : ''}`}
                    type="date"
                    id="startdate"
                    name="startDate"
                    value={startDate}
                    placeholder="dd/mm/yyyy"
                    onChange={handleChangeStartDate}
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
                    className={`input-date ${errors.endDate ? 'error' : ''}`}
                    type="date"
                    id="enddate"
                    value={endDate}
                    name="endDate"
                    placeholder="dd/mm/yyyy"
                    onChange={handleChangeEndDate}
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
                    <button
                      type="button"
                      className="dateselection-next-button"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSelection;
