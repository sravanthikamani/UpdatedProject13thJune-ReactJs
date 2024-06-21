import React, {useContext} from 'react'
import {Link, useHistory, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FormContext} from '../../FormContext'
import Footer from '../Footer'
import './index.css'

const MyTrips = () => {
  const jwtToken = Cookies.get('jwt_token')
  const history = useHistory()
  const {trips} = useContext(FormContext)

  console.log('Trips data:', trips)

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

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
      {trips.length > 0 ? (
        <div>
          <h1 className="mytrips-heading">My Trips</h1>
          <ul>
            {trips.map(trip => {
              console.log('Rendering trip:', trip)
              return (
                <li key={trip.id} className="trip-item">
                  <div className="list-container">
                    <h2 className="trip-destination">{trip.endLocation}</h2>
                    <p className="trip-dates">
                      {trip.startDate} to {trip.endDate}
                    </p>
                    <button className="cancel-trip-button">Cancel</button>
                  </div>
                </li>
              )
            })}
          </ul>
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
}

export default MyTrips
