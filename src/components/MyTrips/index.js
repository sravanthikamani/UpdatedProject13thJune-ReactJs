import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import ContextValue from '../../context/ContextValue'
import Footer from '../Footer'

import './index.css'

const MyTrips = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ContextValue.Consumer>
      {value => {
        const {isMyTrips} = value
        return (
          <>
            <nav className="nav-headertrip">
              <div className="nav-contenttrip">
                <Link to="/" className="travel-headingtrip">
                  Travel Trip
                </Link>

                <ul className="nav-menutrip">
                  <li className="nav-menu-itemtrip">
                    <Link to="/" className="nav-linktrip">
                      Home
                    </Link>
                  </li>

                  <li className="nav-menu-itemtrip">
                    <Link to="/my-trips" className="nav-linktrip">
                      My Trips
                    </Link>
                  </li>
                </ul>

                <button
                  type="button"
                  className="logout-buttontrip"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </div>
            </nav>
            )
            {isMyTrips === true ? (
              <div>
                <h1 className="mytrips-heading">My Trips</h1>
              </div>
            ) : (
              <div className="no-upcoming-container">
                <img
                  src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1714750712/Frame_1000003896_esga0v.png"
                  alt="no trips"
                  className="no-upcoming-trip-image"
                />
                <h1 className="no-upcoming-heading">No upcoming trips.</h1>
                <h1 className="no-upcoming-description">
                  When you book a trip, you will see your trip details here.
                </h1>
                <h1 className="no-upcoming-mobile">
                  When you book a trip, you will <br /> see your trip details
                  here.
                </h1>
                <Link to="/book-a-new-trip">
                  <button type="button" className="no-upcoming-button">
                    Book a new trip
                  </button>
                </Link>
              </div>
            )}
            <Footer />
          </>
        )
      }}
    </ContextValue.Consumer>
  )
}

export default MyTrips
