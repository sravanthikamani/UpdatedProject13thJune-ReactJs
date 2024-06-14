import Cookies from 'js-cookie'
import YourDetails from '../YourDetails'

const BookNewTrip = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <YourDetails />
    </>
  )
}

export default BookNewTrip
