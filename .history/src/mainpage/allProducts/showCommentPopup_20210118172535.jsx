import React from 'react';
import '../userInfo/user.scss';

const refreshPage=>()={
    window.location.reload();
} 
export default function ShowCommentPopup({filename, comments, id}) {
    return (
        <div>
              <div className="delete-popup">
            <div className="delete-popup-inner">
                <p className="delete-p">  {filename}</p>
              
        <p>{comments}</p>
                <div className="popup-button">
                    <button className="delete-button cancel" onClick={refreshPage()}  >Close</button>
                    {/* <button className="delete-button confirm" onClick={deleteFile}>Confirm</button> */}
                </div>
            </div>
            </div>
        </div>
    )
}
