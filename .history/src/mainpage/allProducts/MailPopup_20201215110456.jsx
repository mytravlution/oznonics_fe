import React, { Component, useState } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';

export default function MailPopup({filename}) {

    const [mailPopup, setMailPopup] = useState(false);
    const [emailList, setEmailList] = useState('');
    const input = props => {

        let textInput = React.createRef();
        
        function handleClick() {
          console.log(textInput.current.value);
        }
        
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
        emailList= document.getElementById("emails").value
    }
    
   
        return (
            <div>

                {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}

                <div className="delete-popup">
                    <div className="delete-popup-inner">
                        <p className="delete-p">Enter Email Id </p>
                        <input type="text" placeholder="Use comma separated for multiple Emails"
                            onChange={updateEmail}
                           
                            id="emails" />

                        
                        <div style={{ marginTop: "20px" }}>
                            <button className="delete-button confirm" 
                            onClick={sendMail} >Send Mail</button>
                        </div>
                    </div>


                </div>

            </div>

        )
    }

