import {Link} from 'react-router-dom'
import {useContext} from 'react'
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
  const {
    activeTab,
    changeActiveTab,
    dateSelectionCompleted,
    yourDetailsCompleted,
    guestsCompleted,
    travelAssistanceCompleted,
  } = useContext(FormContext)

  const isCompleted = step => {
    switch (step) {
      case 'Your Details':
        return yourDetailsCompleted
      case 'Date Selection':
        return dateSelectionCompleted
      case 'Guests':
        return guestsCompleted
      case 'Travel Assistance':
        return travelAssistanceCompleted
      case 'Confirmation':
        return (
          yourDetailsCompleted &&
          dateSelectionCompleted &&
          guestsCompleted &&
          travelAssistanceCompleted
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

  const getNumberClassNames = step => {
    const isActive = activeTab === step.displayText
    const isComplete = isCompleted(step.displayText)
    if (isComplete) {
      return 'complete'
    }
    if (isActive) {
      return 'number-text-blue'
    }
    return 'number-text'
  }

  const getTextClassNames = step => {
    const isActive = activeTab === step.displayText
    const isComplete = isCompleted(step.displayText)
    if (isComplete) {
      return 'complete-step'
    }
    if (isActive) {
      return 'your-head-text-blue'
    }
    return 'your-head-text'
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
                <p className={getNumberClassNames(step)}>
                  {isCompleted(step.displayText) ? (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                      alt={step.displayText}
                      className="completion-image"
                    />
                  ) : (
                    index + 1
                  )}
                </p>
                <p className={getTextClassNames(step)}>{step.displayText}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar