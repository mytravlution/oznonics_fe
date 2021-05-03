import React, { Component } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';

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

    updateEmail=()=>{
        this.setState({
            
        })
    }
    render() {
        return (
            <div>
                               
            {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}
       
            <div className="delete-popup">
                <div className="delete-popup-inner">
                    <p className="delete-p">Enter Email Id </p>
                    <input type="text" placeholder="Use comma separated for multiple Emails" />
                    <div style={{marginTop:"20px"}}>
                        <button className="delete-button confirm" >Send Mail</button>
                    </div>
                </div>


            </div>
          
        </div>
    
        )
    }
}
