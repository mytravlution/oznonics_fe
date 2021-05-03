import React from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';
export default function Dele({ filename }) {

   
    const sendMail = async () => {
        const response = await post(baseUrl + "deleteFile/", {
            filename: filename
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
                    <input type="text" style={{ "width": "70%"}}placeholder="Use , separated for multiple Emails"
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

