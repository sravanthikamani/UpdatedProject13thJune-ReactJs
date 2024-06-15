import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorPassword: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswordsClicked = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showErrorPassword: true,
      errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const { username, password, showErrorPassword, errorMsg, showPassword } =
      this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="background-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="travel-heading">Travel Trip</h1>

          <div className="input-container">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <input
              className="username-input-field"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="input-element">
              <input
                className="password-input-field"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              <button
                data-testid="show-password"
                type="button"
                className="eye-btn"
                onClick={this.onShowPasswordsClicked}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {showErrorPassword && <p className="error-message">{errorMsg}</p>}
          </div>

          <div className="button-size">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login
