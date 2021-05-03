import React, { Component } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../'
export default class MailPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mailPopup: false
        };
    }
    sendMail = async () => {
        const response = await post(baseUrl + "deleteUser/", {
            username: this.props.username
        });
        console.log(response);
        this.setState({
            mailPopup: true
        })
        if (response.msg === "SUCCESS") {
            alert("User deleted successfully");
        }
        console.log(this.state.mailPopup);
    }
    render() {
        return (
            <div>
                               
            {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}
       
            <div className="delete-popup">
                <div className="delete-popup-inner">
                    <p className="delete-p"> Send Mail to: </p>
                  

                    <div className="popup-button">
                        <a href="/showUsers"><button className="delete-button cancel" >Cancel</button></a>
                        <button className="delete-button confirm" >Confirm</button>
                    </div>
                </div>


            </div>
          
        </div>
    
        )
    }
}
