import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import {FormContext} from '../../FormContext'
import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const SideBar = () => {
  const {formData, activeTab, changeActiveTab} = useContext(FormContext)

  const isCompleted = step => {
    switch (step) {
      case 'Your Details':
        return formData.name && formData.startLocation && formData.endLocation
      case 'Date Selection':
        return formData.startDate && formData.endDate
      case 'Guests':
        return formData.totalGuests > 1 // Ensure initial state is not completed
      case 'Travel Assistance':
        return formData.isTravelAssistanceNeeded // Ensure initial state is not completed
      case 'Confirmation':
        return (
          formData.name &&
          formData.startLocation &&
          formData.endLocation &&
          formData.startDate &&
          formData.endDate &&
          formData.totalGuests > 1 &&
          formData.isTravelAssistanceNeeded
        )
      default:
        return false
    }
  }

  const getClassNames = step => {
    const isActive = activeTab === step.displayText
    const isComplete = isCompleted(step.displayText)
    let classNames = 'your-details-text'

    if (isActive) {
      classNames += ' active-tab'
    }

    if (isComplete) {
      classNames += ' complete-step'
    }

    return classNames
  }

  return (
    <div className="sidebar-container">
      <div className="white-container">
        <ul className="menu-list">
          {stepsList.map((step, index) => (
            <Link
              to={`/${step.stepId.toLowerCase().replace('_', '-')}`}
              className="link-item-details"
              key={step.stepId}
            >
              <li
                className={getClassNames(step)}
                onClick={() => changeActiveTab(step.displayText)}
              >
                <p
                  className={
                    isCompleted(step.displayText)
                      ? 'number-text complete'
                      : 'number-text'
                  }
                >
                  {isCompleted(step.displayText) ? (
                    <FaCheckCircle />
                  ) : (
                    index + 1
                  )}
                </p>
                <p className="your-head-text">{step.displayText}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
