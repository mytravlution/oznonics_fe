import React from 'react'
import {  post, baseUrl } from "../../shared/http-service";


export default function Popup() {
    const onAddButton = async() => {
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const phone_num = document.getElementById("phone_num");
        const segment = document.getElementById("segment");


    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header">
                    <img className="popup-img" src={require("../../images/add_user.png")} alt="Add user" />
                    <p> Add User</p>
                    <span onClick={this.props.closePopup}>&times;</span>

                </div>
                <div className="add-user-form">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />

                    <label htmlFor="phone_num">Phone Number</label>
                    <input type="text" id="phone_num" />

                    <label htmlFor="segment">Segment to be handled</label>

                    <select id="segment">
                        <option value="All">All</option>
                        <option value="HR230">HR230 </option>
                        <option value="HR300">HR300</option>
                        <option value="Orion">Orion</option>
                        <option value="Orion2">Orion2 </option>
                        <option value="Pulse">Pulse</option>
                    </select>

                </div>

                <div className="popup-button">
                    <button className="clear-button">Clear</button>
                    <button className="add-button">Add</button>
                </div>
            </div>
        </div>
    )

}
