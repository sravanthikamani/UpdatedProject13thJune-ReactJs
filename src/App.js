import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import MyTrips from './components/MyTrips'
import BookNewTrip from './components/BookNewTrip'
import YourDetails from './components/YourDetails'
import DateSelection from './components/DateSelection'
import Guests from './components/Guests'
import TravelAssistance from './components/TravelAssistance'
import Confirmation from './components/Confirmation'
import Awesome from './components/Awesome'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'
import {FormProvider} from './FormContext'

// Note: Use the lists in your code to pass the test cases
/* const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]
*/

/* const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
] */

class App extends Component {
  state = {
    name: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    guests: '',
    travelOption: '',
  }

  handleInputChange = (name, value) => {
    this.setState({[name]: value})
    console.log('inHandleInput:', {name: value})
  }

  render() {
    return (
      <FormProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookNewTrip}
          />
          <ProtectedRoute
            exact
            path="/your-details"
            component={YourDetails}
            handleInputChange={this.handleInputChange}
          />
          <ProtectedRoute
            exact
            path="/date-selection"
            component={DateSelection}
            handleInputChange={this.handleInputChange}
          />
          <ProtectedRoute
            exact
            path="/guests"
            component={Guests}
            handleInputChange={this.handleInputChange}
          />
          <ProtectedRoute
            exact
            path="/travel-assistance"
            component={TravelAssistance}
            handleInputChange={this.handleInputChange}
          />
          <ProtectedRoute
            exact
            path="/confirmation"
            component={Confirmation}
            data={this.state}
          />
          <ProtectedRoute exact path="/awesome" component={Awesome} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </FormProvider>
    )
  }
}

export default App
