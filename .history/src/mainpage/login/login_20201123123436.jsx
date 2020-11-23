import React, { useState } from 'react'
import "./login.scss"
import Header from "../../shared/header/header"
import { post, baseUrl } from "../../shared/http-service";
import { Redirect } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogInClick = async () => {
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
      if (response.msg === "SUCCESS") setLoggedIn(true);
      // if (username === "admin" && password === "admin12") setLoggedIn(true);
      else alert("Invalid USername or password");
    }

  };

  const verifyMobile = async () => {
    const mobile_number = document.getElementById("mobile_number").value;
    if (mobile_number === "") alert("Mobile number cannot be empty")
    else {
      const response = await post(baseUrl + "sendOtp", {
        mobile_number
      });
      console.log(response);
      if (response.msg === "SUCCESS")
        alert("Sucessfully sent the otp");
      else alert("Error found");
    }
  };


  return (

    <div>
      {!loggedIn && <LoginDialog handleLogInClick={handleLogInClick} verifyMobile={verifyMobile} />}
      {/* {loggedIn && <Products />} */}
      {loggedIn && <Redirect to="/products/" />}
    </div>
  )
}


function LoginDialog({ handleLogInClick, verifyMobile }) {
const [value, setvalue] = useState('');

  return (

    <div style={{ backgroundColor: "black" }}>
      <Header />
      <div className="login-dialog-container">
        <div className="login-dialog">

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
              <PhoneInput
                placeholder="Enter phone number"
                id="mobile_number"
                value={value}
                onChange={setValue}
                 />

              <input
                type="mobile_number"
                id="mobile_number"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          <div className="login-act">
            <button className="no-bg" onClick={verifyMobile}>
              SendOTP
            </button>
          </div>
          <div className="login-act">
            <button className="no-bg" onClick={handleLogInClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}