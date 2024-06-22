import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-background">
        <div className="home-content">
          <img
            src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1710933893/image_5_ntqs9x.png"
            alt="mobile home"
            className="homepage-mobile-image"
          />
          <h1 className="home-heading">
            Travel. Relax. <br />
            Memories.
          </h1>
          <h1 className="mobile-home-heading">Travel. Relax. Memories.</h1>
          <p className="home-paragraph">
            With travel trip you can experience new travel and the best tourist
            destinations.
          </p>
          <p className="mobile-home-paragraph">
            With travel trip you can experience new
            <br /> travel and the best tourist destinations.
          </p>

          <Link to="/book-a-new-trip">
            <button type="button" className="book-button">
              Book a new trip
            </button>
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1710859670/image_5_mbr5qa.png"
          alt="desktop home"
          className="homepage-image"
        />
      </div>
      <Footer />
    </>
  )
}

export default Home