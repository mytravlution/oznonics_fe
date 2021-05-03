import React from 'react'

export default function DeletePopup ({username}) {
  const del
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
