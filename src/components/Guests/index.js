import {Link} from 'react-router-dom'
import {Component} from 'react'
import SideBar from '../SideBar'
import Header from '../Header'

import './index.css'

class Guests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
    }
  }

  handleIncrement = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }))
  }

  handleDecrement = type => {
    this.setState(prevState => ({
      [type]: Math.max(prevState[type] - 1, type === 'adults' ? 1 : 0),
    }))
  }

  getTotalGuestsCount = () => {
    const {adults, children, infants} = this.state
    return adults + children + infants
  }

  submitFormGuests = event => {
    event.preventDefault()
  }

  render() {
    const {adults, children, infants} = this.state

    return (
      <>
        <Header />
        <div className="guests-left-section">
          <SideBar />
          <div className="guests-section-guest">
            <div className="guests-right-section">
              <h1 className="guests-heading">Guests</h1>
              <p className="guests-paragraph">Select your Guests</p>

              <form
                className="form-details-guests"
                onSubmit={this.submitFormGuests}
              >
                <div className="guests-form">
                  <div className="guests-input-container">
                    <p className="guests-adults">Adults</p>
                    <p className="guests-age">Age 13 or above</p>
                  </div>
                  <div className="adults-container">
                    <button
                      type="button"
                      className="decrease"
                      onClick={() => this.handleDecrement('adults')}
                      data-testid="decrement-adults"
                    >
                      -
                    </button>
                    <p
                      className="adults-number"
                      name="adults"
                      data-testid="count-adults"
                    >
                      {adults}
                    </p>

                    <button
                      type="button"
                      className="increase"
                      onClick={() => this.handleIncrement('adults')}
                      data-testid="increment-adults"
                    >
                      +
                    </button>
                  </div>
                  <hr className="hr" />

                  <div className="guests-input-container">
                    <p className="guests-children">Children</p>
                    <p className="guests-age">Age 2-12</p>
                  </div>
                  <div className="adults-container">
                    <button
                      className="decrease"
                      type="button"
                      onClick={() => this.handleDecrement('children')}
                      data-testid="decrement-children"
                    >
                      -
                    </button>
                    <p
                      className="adults-number"
                      name="children"
                      data-testid="count-children"
                    >
                      {children}
                    </p>
                    <button
                      className="increase"
                      type="button"
                      onClick={() => this.handleIncrement('children')}
                      data-testid="increment-children"
                    >
                      +
                    </button>
                  </div>
                  <hr className="hr" />

                  <div className="guests-input-container">
                    <p className="guests-infants">Infants</p>
                    <p className="guests-age">Under 2</p>
                  </div>
                  <div className="adults-container">
                    <button
                      className="decrease"
                      type="button"
                      onClick={() => this.handleDecrement('infants')}
                      data-testid="decrement-infants"
                    >
                      -
                    </button>
                    <p
                      className="adults-number"
                      name="infants"
                      data-testid="count-infants"
                    >
                      {infants}
                    </p>
                    <button
                      className="increase"
                      type="button"
                      onClick={() => this.handleIncrement('infants')}
                      data-testid="increment-infants"
                    >
                      +
                    </button>
                  </div>
                  <p className="total-guests">
                    Total Count of the Guests : {this.getTotalGuestsCount()}
                  </p>
                  <div className="guests-container">
                    <Link to="/date-selection">
                      <button
                        type="button"
                        className="guests-previous-button"
                        data-testid="previous-button"
                      >
                        Previous
                      </button>
                    </Link>
                    <div className="guests-previous">
                      <Link to="/travel-assistance">
                        <button
                          type="button"
                          className="guests-next-button"
                          data-testid="next-button"
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

export default Guests
