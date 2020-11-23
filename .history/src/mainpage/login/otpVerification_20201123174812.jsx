import React, { useState } from 'react'
import "./login.scss"

import Header from "../../shared/header/header"
import { post, baseUrl } from "../../shared/http-service";
import { Redirect } from 'react-router-dom';


export default function OtpVerification({ mobile_number, username, user_type }) {

   
    const [loggedIn, setLoggedIn] = useState(false);

    const verifyMobile = async () => {
        console.log("phone:" + mobile_number);
        const otp = document.getElementById("otp").value;
        if (otp === "") {
            alert("Enter your OTP")

        }
        else {
            const response = await post(baseUrl + "verifyOtp", {
                otp,
                username,
                user_type
            });
            console.log(response);
            if (response.msg === "SUCCESS") {
               setLoggedIn(true);
                alert("Sucessfully sent the otp");
            }
            else alert("Error found");
        }
    };

    return (
        <div>
             {!loggedIn && <div>Hello</div>
            //  <OtpVerifyfunc  mobile_number={mobile_number} username={username} user_type={user_type} verifyMobile={verifyMobile} />
             }
      {/* {loggedIn && <Products />} */}
     
        </div>
    )
}


function OtpVerifyfunc({ mobile_number, username, user_type, verifyMobile }){
    console.log(mobile_number);
    
    const id = mobile_number.toString();
    return(
        <div style={{ backgroundColor: "black" }}>
                <Header />
                <div className="login-dialog-container">
                    <div className="login-dialog">
                        <div className="form">
                            <p className="otp-text">    Enter the OTP received on ******{id.substring(id.length - 3)}
                            </p>
                            <input id="otp" placeholder="OTP" type="text" />
                        </div>
                        <div className="login-act">
                            <button className="no-bg" onClick={OtpVerifyfunc}>
                                Verify
                            </button>
                        </div>

                    </div>
                </div>
            </div>
    )
}