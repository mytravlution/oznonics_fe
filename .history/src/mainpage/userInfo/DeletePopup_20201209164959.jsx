import React from 'react'
import { post, baseUrl } from '../../shared/http-service';

export default function DeletePopup ({username}) {
    const [isDeleted, setIsDeleted] = useState(initialState)
  const deleteUser=async()=>{
    const response = await post(baseUrl + "deleteUser/", {
        username:username
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
        <p className="delete-p"> Please confirm to delete {username}</p>
                <div className="popup-button">
                        <a href="/showUsers"><button className="delete-button cancel" >Cancel</button></a>
                        <button className="delete-button confirm" onClick={deleteUser}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    
}
