import React, { Component } from 'react'

export default class DeletePopup extends Component {
    render() {
        return (
            <div className="delete-popup">
                <div className="delete-popup-inner">
                <p className="delete-p"> Please confirm to delete this user</p>
                </div>
            </div>
        )
    }
}
