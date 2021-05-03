import React from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';
export default function DeleteFilePopup({ filename, ext }) {

   
    const deleteFile = async () => {
        const response = await post(baseUrl + "deleteFile/", {
            filename: filename
        });
        console.log(response);

        if (response.msg === "SUCCESS") {
            alert("File deleted successfully");
            window.location.reload();
        }else{
            alert("Something went wrong");
        }
    }



    return (
        <div>
                               
       
        <div className="delete-popup">
            <div className="delete-popup-inner">
                <p className="delete-p"> Deleting {filename}, please confirm!</p>
              

                <div className="popup-button">
                    <a href=""}<button className="delete-button cancel"  >Cancel</button>
                    <button className="delete-button confirm" onClick={deleteFile}>Confirm</button>
                </div>
            </div>


        </div>
        
    </div>
    )
}

