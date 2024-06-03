import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1710947156/Group_7520_tobb7a.png"
      className="notfound-image"
      alt="not found"
    />
    <h1 className="notfound-heading">Page Not Found.</h1>
    <p className="notfound-description">
      We are sorry, the page you requested could not be found.
    </p>
    <p className="mobile-notfound-description">
      We are sorry, the page you <br />
      requested could not be found.
    </p>
  </div>
)
export default NotFound
