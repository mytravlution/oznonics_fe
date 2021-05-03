import React from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';
export default function MailPopup({ filename, file_id}) {

   
    const sendMail = async () => {
        const emailid= document.getElementById("emails").value;
        const response = await post(baseUrl + "sendMail/", {
            emailList: emailid,
            file_id: file_id
        });
        console.log(response);

        if (response.msg === "SUCCESS") {
            alert("Email sent successfully");
            window.location.reload();
        }else{
            alert("Something went wrong");
        }
    }



    return (
        <div>

            {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}

            <div className="delete-popup">
                <div className="delete-popup-inner">
                    <div className="mail-header">
    <p className="delete-p">Enter Email Id</p>
                        <span className="mail-popup-cross" onClick={()=>window.location.reload()}>&times;</span>
                    </div>
                    <input type="text" style={{ "width": "70%"}} className="mailInput" placeholder="Use “,” to separate multiple email addresses"
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

