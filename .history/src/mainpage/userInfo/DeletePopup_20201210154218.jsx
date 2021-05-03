import React, { useState, Component } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import { Redirect } from 'react-router-dom';

export default class DeletePopup extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            deletePopup: false
        };
    }
    deleteUser = async () => {
        const response = await post(baseUrl + "deleteUser/", {
            username: this.props.username
        });
        console.log(response);
        this.setState({
            deletePopup:true
        })
        
        
        if (response.msg === "SUCCESS") {
            
                 alert("User deleted successfully");
            
        }
    }
    render() {
    return (
        <div>
            
            {this.state.deletePopup && <Redirect to="/showUsers" />}

            <div className="delete-popup">
                <div className="delete-popup-inner">
                <h3>Deleted: {this.state.deletePopup}</h3>
                    <p className="delete-p"> Deleting {this.props.username}, please confirm!</p>
                   
                    <div className="popup-button">
                        <a href="/showUsers"><button className="delete-button cancel" >Cancel</button></a>
                        <button className="delete-button confirm" onClick={this.deleteUser.bind(this)}>Confirm</button>
                    </div>
                </div>


            </div>
        </div>
    )
    }
}
