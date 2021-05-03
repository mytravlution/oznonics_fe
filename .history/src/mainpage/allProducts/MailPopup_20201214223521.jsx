import React, { Component, useState } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';

export default function MailPopup() {

    const [mailPopup, setMailPopup] = useState(false);
    const [emailList, setEmailList] = useState('');
   
    const sendMail = async () => {
        const response = await post(baseUrl + "sendEmail/", {
            emailList: emailList
        });
        console.log(response);
        setMailPopup(true);
        if (response.msg === "SUCCESS") {
            alert("Email sent successfully");
        }
        console.log(mailPopup);
    }

    const updateEmail=(evt)=>{
        emailList: document.getElementById("username").value
    }
    
   
        return (
            <div>

                {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}

                <div className="delete-popup">
                    <div className="delete-popup-inner">
                        <p className="delete-p">Enter Email Id{this.props.fileName} </p>
                        <input type="text" placeholder="Use comma separated for multiple Emails"
                            onChange={evt => this.updateEmail(evt)}
                            value={this.state.emailList}
                            id="emails" />

                        
                        <div style={{ marginTop: "20px" }}>
                            <button className="delete-button confirm" 
                            onClick={this.sendMail.bind(this)} >Send Mail</button>
                        </div>
                    </div>


                </div>

            </div>

        )
    }

