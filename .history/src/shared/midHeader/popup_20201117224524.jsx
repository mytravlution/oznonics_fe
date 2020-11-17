import React, { Component } from 'react'

export default class popup extends Component {
    render() {
        return (
            <div className="popup">
                    <div className="popup-inner">
                        <div className="popup-header">
                            <img  className="popup-img" src={require("../../images/add_user.png")} alt="Add user" />
                            <p> Add User</p>
                            <span  onClick={this.props.closePopup}>&times;</span>

                        </div>
                        <div>
                            <label htmlFor ="username">Username</label>
                            <input type="text" id="username" />

                            <label htmlFor ="password">Password</label>
                            <input type="password" id="password" />

                            <label htmlFor ="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        </div>                
            </div>
        )
    }
}
