import React, { Component, useState } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';

export default function MailPopup({filename, id}) {

    const [mailPopup, setMailPopup] = useState(false);
    const [emailList, setEmailList] = useState('');
   
    const sendMail = async () => {
        const response = await post(baseUrl + "sendEmail/", {
            emailList: emailList,
            filename:filename
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
    const closeEmail=()=>{
        setMailPopup(false);
    }

        return (
            <div>

                {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}
                {(isFilethere ==="no" &&    <Redirect to={`/addImage/${id}` }/>}
                <div className="delete-popup">
                    <div className="delete-popup-inner">
                        <div className="mail-header">
        <p className="delete-p">Enter Email Id {id}</p>
       <span style={{"fontSize":"25px"}} onClick={closeEmail}>&times;</span>
        </div>
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

