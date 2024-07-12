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
        </Link>
        <Link to="/my-trips" className="mytrip-link">
          <MdOutlineLuggage className="mytrip-icon" />
        </Link>
        <div className="button-container">
          <TbLogout2 className="logout-icon" onClick={onClickLogout}/>
        </div>
      </div>
    </footer>
  )
}

export default withRouter(Footer)
