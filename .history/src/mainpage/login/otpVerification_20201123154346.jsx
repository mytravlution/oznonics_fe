import React from 'react'
import "./login.scss"

import Header from "../../shared/header/header"
import { post, baseUrl } from "../../shared/http-service";

export default function otpVerification({mobile_number}) {
    const verifyMobile = async () => {
        const otp = document.getElementById("otp").value;
        if (otp === "") alert("Enter your OTP")
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

                        <p className="otp-text">    Enter the OTP received on XXXXXXXXX01
                            </p>
                        <input id="otp" placeholder="OTP" type="text" />
                        </div>
                        <div className="login-act">
                            <button className="no-bg" onClick={verifyMobile}>
                                Verify
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
