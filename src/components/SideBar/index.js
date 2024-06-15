import {Link} from 'react-router-dom'
import ContextValue from '../../context/ContextValue'
import './index.css'

const SideBar = () => (
  <ContextValue>
    {value => {
      const {isNumberColored, changeActiveTab} = value

      const blueColoredNumber = isNumberColored
        ? 'number-text'
        : 'number-text-blue'
      const blueColoredText = isNumberColored
        ? 'your-head-text'
        : 'your-head-text-blue'

      const changeTabYourDetails = () => {
        changeActiveTab('Your Details')
      }

      const changeTabDateSelection = () => {
        changeActiveTab('Date Selection')
      }

      const changeTabGuests = () => {
        changeActiveTab('Guests')
      }

      const changeTabTravelAssistance = () => {
        changeActiveTab('Travel Assistance')
      }
      const changeTabConfirmation = () => {
        changeActiveTab('Confirmation')
      }

      return (
        <div className="sidebar-container">
          <div className="white-container">
            <ul className="menu-list">
              <Link to="/your-details" className="link-item-details">
                <li
                  className="your-details-text"
                  key="yourDetails"
                  onClick={changeTabYourDetails}
                >
                  <p className={blueColoredNumber}>1</p>
                  <p className={blueColoredText}>Your Details</p>
                </li>
              </Link>

              <Link to="/date-selection" className="link-item-details">
                <li
                  className="your-details-text"
                  key="dateSelection"
                  onClick={changeTabDateSelection}
                >
                  <p className={blueColoredNumber}>2</p>
                  <p className={blueColoredText}>Date Selection</p>
                </li>
              </Link>

              <Link to="/guests" className="link-item-details">
                <li
                  className="your-details-text"
                  key="guests"
                  onClick={changeTabGuests}
                >
                  <p className={blueColoredNumber}>3</p>
                  <p className={blueColoredText}>Guests</p>
                </li>
              </Link>
              <Link to="/travel-assistance" className="link-item-details">
                <li
                  className="your-details-text"
                  key="travelAssistance"
                  onClick={changeTabTravelAssistance}
                >
                  <p className={blueColoredNumber}>4</p>
                  <p className={blueColoredText}>Travel Assistance</p>
                </li>
              </Link>

              <Link to="/confirmation" className="link-item-details">
                <li
                  className="your-details-text"
                  key="confirmation"
                  onClick={changeTabConfirmation}
                >
                  <p className={blueColoredNumber}>5</p>
                  <p className={blueColoredText}>Confirmation</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )
    }}
  </ContextValue>
)

export default SideBar
