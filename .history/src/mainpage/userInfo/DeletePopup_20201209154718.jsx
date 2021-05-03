import React, { Component } from 'react'

export default class DeletePopup extends Component {
    render() {
        return (
            <div className="delete-popup">
                <div className="delete-popup-inner">
                <p className="delete-p"> Please confirm to delete this user</p>
                <div className="popup-button">
                        <button className="clear-button" onClick={this.onClearButton.bind(this)}>Cancel</button>
                        <button className="add-button" onClick={this.onAddButton.bind(this)}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    }
}
