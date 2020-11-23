import React from 'react'
import "./login.scss"

import Header from "../../shared/header/header"
import { post, baseUrl } from "../../shared/http-service";

export default function otpVerification() {
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

            <div style={{ backgroundColor: "black" }}>
                <Header />
                <div className="login-dialog-container">
                    <div className="login-dialog">

                        <div className="form">
                            Enter the OTP received on XXXXXXXXX01
                        </div>
                        <input
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
