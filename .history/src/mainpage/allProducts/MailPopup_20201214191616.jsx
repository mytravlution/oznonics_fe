import React, { Component } from 'react'

export default class MailPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletePopup: false
        };
    }
    sendMail = async () => {
        const response = await post(baseUrl + "deleteUser/", {
            username: this.props.username
        });
        console.log(response);
        this.setState({
            deletePopup: true
        })
        if (response.msg === "SUCCESS") {
            alert("User deleted successfully");
        }
        console.log(this.state.deletePopup);
    }
    render() {
        return (
            <div>
                               
            {this.state.deletePopup && <Redirect to="/showUsers/" />}
            {!this.state.deletePopup && 
            <div className="delete-popup">
                <div className="delete-popup-inner">
                    <p className="delete-p"> Deleting {this.props.username}, please confirm!</p>
                  

                    <div className="popup-button">
                        <a href="/showUsers"><button className="delete-button cancel" >Cancel</button></a>
                        <button className="delete-button confirm" onClick={this.deleteUser.bind(this)}>Confirm</button>
                    </div>
                </div>


            </div>
            }
        </div>
    
        )
    }
}
