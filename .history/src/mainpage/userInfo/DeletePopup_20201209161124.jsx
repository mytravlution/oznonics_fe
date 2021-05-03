import React from 'react'
import { post, baseUrl } from '../../shared/http-service';

export default function DeletePopup ({username}) {
  const delete=async()=>{
    const response = await post(baseUrl + "deleteUser/", {
        username
    });
    console.log(response);
    if (response.msg === "SUCCESS") {
        console.log("true");
        alert("User deleted successfully");
    }
  }
        return (
            <div className="delete-popup">
                <div className="delete-popup-inner">
                <p className="delete-p"> Please confirm to delete this user</p>
                <div className="popup-button">
                        <a href="/<button className="delete-button cancel" >Cancel</button>
                        <button className="delete-button confirm" onClick={delete}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    
}
