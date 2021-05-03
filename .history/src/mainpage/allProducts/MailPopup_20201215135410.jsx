import React, { Component, useState } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function MailPopup({ filename, id }) {

    const [mailPopup, setMailPopup] = useState(false);
    const [emailList, setEmailList] = useState('');

    const sendMail = async () => {
        const emailid= document.getElementById("emails").value;
        // setEmailList(document.getElementById("emails").value);
        const response = await post(baseUrl + "sendMail/", {
            emailList: emailid,
            filename: filename
        });
        console.log(response);

        if (response.msg === "SUCCESS") {
            alert("Email sent successfully");
        }else{
            alert("Something went wrong");
        }
        console.log(mailPopup);
    }

    const updateEmail = (evt) => {
        emailList = document.getElementById("emails").value
    }
    const closeEmail = () => {
        console.log("button");

        setMailPopup(false);
        console.log(mailPopup);

    }
    const history = useHistory();

    return (
        <div>

            {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}

            <div className="delete-popup">
                <div className="delete-popup-inner">
                    <div className="mail-header">
                        <p className="delete-p">Enter Email Id {mailPopup}</p>
                        <span style={{ "fontSize": "25px" }} onClick={() => { history.goBack() }}>&times;</span>
                    </div>
                    <input type="text" placeholder="Use comma separated for multiple Emails"
                        id="emails" />


                    <div style={{ marginTop: "20px" }}>
                        <button className="delete-button confirm"
                            onClick={sendMail} >Send Mail</button>
                    </div>
                </div>


            </div>
            {!mailPopup && <Redirect to={`/addImage/${id}`} />}
        </div>

    )
}

