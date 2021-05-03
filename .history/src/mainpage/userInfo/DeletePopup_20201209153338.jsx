import React, { Component } from 'react'

export default class DeletePopup extends Component {
    render() {
        return (
            <div className="popup">
                <div className="popup-inner"></div>
                <p> Please confirm to delete this user</p>
            </div>
        )
    }
}
