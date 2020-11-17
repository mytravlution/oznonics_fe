import React, { Component } from 'react'

export default class midHeader extends Component {
    render() {
        return (
             <div className="search-bar">
                    <input type="text" placeholder="Search here.." name="search"
                       />
                    <button type="submit" ><i className="fa fa-search"></i></button>
                </div>
                <div className="add-user">
                <img src={require("../../images/add_user.png")} alt="Add User" />
                <p>Add User</p>
                </div>
        )
    }
}
