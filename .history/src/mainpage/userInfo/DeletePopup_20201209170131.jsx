import React, { useState } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import { Redirect } from 'react-router-dom';

export default function DeletePopup({ username }) {
    const [IsDeleted, setIsDeleted] = useState(false);
    var deleted= false
    const deleteUser = async () => {
        const response = await post(baseUrl + "deleteUser/", {
            username: username
        });
        console.log(response);
        if (response.msg === "SUCCESS") {
            setIsDeleted(true);
            // alert("User deleted successfully");
            console.log("delete"+IsDeleted);
            
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
            {IsDeleted && <Redirect to="/showUsers" />}

        </div>
        
    )

}
