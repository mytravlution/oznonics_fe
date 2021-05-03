import React from 'react'
import { post, baseUrl } from '../../shared/http-service';

export default function DeletePopup ({username}) {
  const confirm=async()=>{
    const response = await post(baseUrl + "deleteUser/", {
        username
    });
    console.log(response);
    if (response.msg === "SUCCESS") {
        console.log("true");
        alert("User successfully");
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
