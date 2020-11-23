import React from 'react'
import Header from "../../shared/header/header"

export default function otpVerification() {


    return (
        <div>
          
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <div className="login-dialog-container">
        <div className="login-dialog">

          <div className="form">
            <div>
             

             
            </div>
          </div>
          <div className="login-act">
            <button className="no-bg" onClick={verifyMobile}>
              SendOTP
            </button>
          </div>
         
        </div>
      </div>
    </div>
  
        </div>
    )
}
