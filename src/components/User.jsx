import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
// import { Notification } from './Notification';

export const User = () => {

  const[user, setUser] = useState('normal User');
  const[signedIn, setSignedIn] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);
  const notifications =  ['', false];
  const userInfoInitializer = {
    "userId": '',
    "userName": "",
    "userEmail": "",
    "createdDate": "",
  }
  const [userInfo, setUserInfo] = useState(userInfoInitializer);
  // const [tempUserInfo, setTempUserInfo] = useState('');

  // toggle the sign in form when sign in is clicked
  const handleSignInClicked = () => {
    if (signInClicked) {
      setSignInClicked(false);
    } else {
      setSignInClicked(true);
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
  const handleFormSignIn = () => {

  }
  return (
    <>
      <div className="user-container">
        <div className='sign-in' onClick={handleSignInClicked}>SignIn</div>
        {
        signInClicked &&
          <div className="sign-in-form">
            <form action="" >
              <div>
                <label For="user-name" aria-placeholder='UserName/email' > </label>
                <input type="text" name="user-name" value={userInfo.name}></input>
              </div>
              <div>
                <label For="user-password" aria-placeholder='Password'> </label>
                <input type="text" name="user-password"></input>
              </div>
              <div>
                <button>Sign In</button>
              </div>
            </form>

          </div>

        }
        <div className='sign-up'>SignUp</div>
        <div className=''></div>
        <div></div>
      </div>
      <div>
        {/* <Notification notifications={notifications} /> */}
      </div>
    </>
  )

}