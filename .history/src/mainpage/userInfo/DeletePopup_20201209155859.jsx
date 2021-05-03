import React from 'react'

export default function DeletePopup ({username}) {
  const confirm=async()=>{
    const response = await post(baseUrl + "verifyOtp", {
       
        username,
        user_type
    });
    console.log(response);
    if (response.msg === "SUCCESS") {
        setLoggedIn(true);
        console.log("true");

        alert("OTP Verified successfully");
    }
  }
        return (
            <div className="delete-popup">
                <div className="delete-popup-inner">
                <p className="delete-p"> Please confirm to delete this user</p>
                <div className="popup-button">
                        <button className="delete-button cancel" >Cancel</button>
                        <button className="delete-button confirm">Confirm</button>
                    </div>
                </div>
            </div>
        )
    
}
