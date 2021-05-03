import React, { Component } from 'react'

export default class DeletePopup extends Component({username}) {
    render() {
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
}
