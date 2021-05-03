import React, { Component } from 'react'

export default class DeletePopup extends Component {
    render() {
        return (
            <div className="delete-popup">
                <div className="delete-popup-inner">
                <p className="delete-p"> Please confirm to delete this user</p>
                <div className="popup-button">
    .confirm{
                        <button className="delete-button " >Cancel</button>
                        <button className="delete-button">Confirm</button>
                    </div>
                </div>
            </div>
        )
    }
}
