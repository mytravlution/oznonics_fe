import React, { useState } from 'react'
import "./login.scss"
import Header from "../../shared/header/header"
import { post, baseUrl } from "../../shared/http-service";
// import { Redirect } from 'react-router-dom';
import OtpVerification from './otpVerification';



export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [phone, setphone] = useState('');
  const [username, setusername] = useState('');
  const [userType, setuserType] = useState('')
  const handleLogInClick = async (event) => {
    if (event.keyCode === 13) {
      console.log("enter");

    }
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // const mobile_number = document.getElementById("mobile_number").value;


    if (username === "" || password === "") { alert("Enter all fields") } else {
      //api is here
      const response = await post(baseUrl + "login/", {
        username,
        password
      });
      console.log(response);
      if (response.msg === "SUCCESS") {
        setLoggedIn(true);

        setphone(response.phone_num);
        setusername(response.username);
        setuserType(response.user_type);
        localStorage.setItem('user-type', response.user_type);
        localStorage.setItem('username', response.username)
      }
      // if (username === "admin" && password === "admin12") setLoggedIn(true);
      else alert("Invalid Username or Password");
    }

  };




  return (

    <div>
      {!loggedIn && <LoginDialog handleLogInClick={handleLogInClick} />}
      {/* {loggedIn && <Products />} */}

      {loggedIn && <OtpVerification mobile_number={phone} username={username} user_type={userType} />}

      {/* {loggedIn && <Redirect to="/products/" />} */}
    </div>
  )
}


function LoginDialog({ handleLogInClick }) {

  return (

    <div style={{ backgroundColor: "black" }}>
      <Header />
      <div className="login-dialog-container">
        <div className="login-dialog">
        <form onSubmit={handleLogInClick}>
          <div className="form">
            <div>
              {/* <label htmlFor="username">Username</label> */}
              <input
                type="text"
                id="username"
                placeholder="Username"
              />
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
    </form>
          {/* <div className="login-act">
            <button className="no-bg" onClick={handleLogInClick}>
              Login
            </button>

            <form onSubmit={handleLogInClick}>
              <input
                type="text"
                id="username"
                placeholder="Username"
              />
              <button type="submit">Submit</button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );

}