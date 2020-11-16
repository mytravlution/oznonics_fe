import React, { useState } from 'react'
import "./login.scss"
import { useEffect } from 'react';
import AllProducts from "../allProducts/allProducts"
import Header from "../../shared/header/header"
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import Products from '../allProducts/products';
export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogInClick = async () => {
    const username = document.getElementById("username").value || "admin";
    const password = document.getElementById("password").value || "admin12";
    //api is here
    const response = await post(baseUrl + "admin/login", {
      username,
      password
    });

    // if (response.msg === "SUCCESS") setLoggedIn(true);    
    if (username === "admin" && password === "admin12") setLoggedIn(true);
    else alert("Invalid USername or password");

  };
  return (

    <div>
     {!loggedIn && <LoginDialog handleLogInClick={handleLogInClick} />}
      {loggedIn && <Products />}
    </div>
  )
}


function LoginDialog({ handleLogInClick }) {
  return (
     
<div style={{ backgroundColor: "black"}}>
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
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
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