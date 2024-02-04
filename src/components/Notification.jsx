import {useState, useEffect} from 'react';


export default Notification = (props) => {
  // const notifications =  ['', false];
  const {notifications} = props;
  const[notification, setNotification] = useState(false);
  const [notificationText, setNotificationText] = useState('Your Notifications Here');


if (notifications[1] === true || notifications[0].length <= 0) {
  return (
    <>
      <dir>{notifications}</dir>
         <div className="notification-container notification-text">
         <p >if you want to comment, or perform action on the posts you should register your name, email and password</p>
       </div>
    </>
  )
  }
}