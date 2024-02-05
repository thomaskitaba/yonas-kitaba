import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
// import { Notification } from './Notification';

export const User = () => {

  const[user, setUser] = useState('normal User');
  const[signedIn, setSignedIn] = useState(false);
  const [singedUp, setSignedUp] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);
  const notifications =  ['', false];
  const userInfoInitializer = {
    "userId": '',
    "userName": "",
    "userEmail": "",
    "createdDate": "",
  }
  const [userInfo, setUserInfo] = useState(userInfoInitializer);
  // const [tempUserInfo, setTempUserInfo] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      const signInForm = document.getElementById('sign-in-form');
      const signUpForm = document.getElementById('sign-up-form');

      if (signInForm && !signInForm.contains(event.target)) {
        setSignInClicked(false);
        setSignUpClicked(false);
      }
      if (signUpForm && !signUpForm.contains(event.target)) {
        setSignInClicked(false);
        setSignUpClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // toggle the sign in form when sign in is clicked
  const handleSignInClicked = () => {
    if (signInClicked) {
      setSignInClicked(false);
    } else {
      setSignInClicked(true);
      setSignUpClicked(false);
    }
  }
  const handleSignOutClicked = (e) => {
    e.preventDefault();
    setSignedIn(false);
    setSignInClicked(false);
    setUser('Normal User');
  }
  const handleSignUpClicked = (e) => {
    e.preventDefault();
    if (signUpClicked) {
      setSignUpClicked(false);

    } else {
      setSignUpClicked(true);
      setSignInClicked(false);
    }
  }
// task to be done when user signs in
 // update "tempUserInfo" with userName or userEmail
//  then inside hanleFormSignIn check if it is email or name then
// setUserInfo(tempUserInfo)  then update
  const handleDataSignIn = (value) => {
    const signInData = {
      ...userInfo,

    }
  }
  const handleFormSignIn = (e) => {
    e.preventDefault();
    // code for sign in goes here
    setSignedIn(true);
  }

  const handleFormSignUp = (e) => {
    e.prventDefault();
    // code for signup goes here
    setSignedUp(true);
  }

  return (
    <>
      {signedIn === false &&

      <div className="user-container">

        <div className='sign-in' id='sign-in' onClick={handleSignInClicked}>Sign In</div>
        {
        signInClicked &&
          <div className={ signInClicked && "sign-in-form"} id="sign-in-form">
            <form action="" onSubmit={handleFormSignIn}>
              <div className='form-fields'>
                <div>
                  <label For="user-name" placeholder='UserName/email' > UserName </label>
                </div>
                <div>
                  <input type="text" name="user-name" value={userInfo.name}></input>
                </div>
              </div>
              <div className='form-fields'>
                <div>
                  <label For="user-password" placeholder='Password'> Password </label>
                </div>
                <div>
                  <input type="text" name="user-password"></input>
                </div>
              </div>
              <div>

                <div>
                  <button >Sign In</button>
                </div>
              </div>
            </form>

          </div>
        }
        <div className='sign-up' onClick={handleSignUpClicked}>SignUp</div>
        {
        signUpClicked &&
          <div className={ signUpClicked && "sign-up-form"} id="sign-up-form">
            <form action="" onSubmit={handleFormSignUp}>
              <div className='form-fields'>
                <div>
                  <label For="user-name" placeholder='UserName' >userName </label>
                </div>
                <div>
                  <input type="text" name="user-name" value={userInfo.name}></input>
                </div>
              </div>
              <div className='form-fields'>
                <div >
                  <label For="user-email" placeholder='your Email address' > Email </label>
                </div>
                <div>
                  <input type="text" name="user-email" value={userInfo.email}></input>
                </div>
              </div>
              <div className='form-fields'>
                <div >
                  <label For="user-password" placeholder='Password'> Password </label>
                </div>
                <div>
                  <input type="text" name="user-password"></input>
                </div>
                </div>
              <div className='form-fields'>
                <div>
                  <label For="user-password" placeholder='Password'> Confirm </label>
                </div>
                <div>
                  <input type="text" name="user-password"></input>
                </div>
              </div>
              <div>
                <button >Sign Up</button>
              </div>
            </form>
          </div>
        }
      </div>
      }

      {/* to be displayed after succesfully singing in */}
      {signedIn === true &&

        <div className="user-container">
          <div> {signedIn ? "signedIn=true" : "signedIn=false"} </div>
          <div className='text-sucess'> Succesfully signed in </div>
          <div className='sign-out' onClick={handleSignOutClicked}>SignOut</div>
        </div>
      }
    </>
  )
}
