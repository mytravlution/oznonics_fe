import React, { Component } from 'react'
import { post, baseUrl } from "../../shared/http-service";


export default class popup extends Component {
    // const onAddButton = async() => {
    //     const username = document.getElementById("username");
    //     const password = document.getElementById("password");
    //     const phone_num = document.getElementById("phone_num");
    //     const segment = document.getElementById("segment");
    //     console.log(username);

    //     const response = await post(baseUrl+"/addUser",{
    //         username,
    //         password,
    //         phone_num,
    //         segment
    //     });
    //     console.log(response);  
    // }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            phone_num:'',
            segment:''
        };
    }
    updateUsername(evt) {
        this.setState({
            username: evt.target.value
        })
    }

    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        })
    }
    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        })
    }
    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        })
    }
    onAddButton = async () => {
        console.log(this.state.username);

        const response = await post(baseUrl + "searchQuery/", {
            username: this.state.username
        });

    }
    render() {
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
                        <input type="text"
                            onChange={evt => this.updateUsername(evt)}
                            value={this.state.username} />

                        <label htmlFor="password">Password</label>
                        <input type="password"
                            onChange={evt => this.updateUsername(evt)}
                            value={this.state.password} />

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
                        <button className="add-button" onClick={this.onAddButton.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}
