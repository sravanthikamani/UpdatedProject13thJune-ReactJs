import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiHome} from 'react-icons/fi'
import {MdOutlineLuggage} from 'react-icons/md'
import {TbLogout2} from 'react-icons/tb'
import './index.css'

const Footer = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <footer className="footer-container">
      <div className="footer-items">
        <Link to="/" className="home-link">
          <FiHome className="home-icon" />

          <h1 className="footer-home">Home</h1>
        </Link>
        <Link to="/my-trips" className="mytrip-link">
          <MdOutlineLuggage className="mytrip-icon" />
          <h1 className="footer-mytrip">My Trips</h1>
        </Link>
        <div className="button-container">
          <TbLogout2 className="logout-icon" />
          <button className="logout-btn" type="button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </footer>
  )
}

export default withRouter(Footer)
