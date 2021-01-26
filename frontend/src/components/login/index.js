import { connect } from 'react-redux'
import { doLoginUser } from '../firebase/thunks'
import { Redirect } from 'react-router-dom'
import './index.css'

import dxLogo from '../../images/dextra-logo.png'

const LoginPage = ({ login, isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    )
  }

  return (
    <div className='content-login'>
      <div class='container'>
        <div className='d-flex justify-content-center h-100'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div>
                  <img className="Login-dx-image" src={dxLogo} alt="logo da dextra" />
                </div>
                <div className='text-center'>
                  <div onClick={login} className='custom-google-link' role='button'>
                    <img className='custom-image-button' width='40vw' alt='Google sign-in' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' />
                    Login com Google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ loginReducer }) => ({
  isAuthenticated: loginReducer.isAuthenticated,
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(doLoginUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
