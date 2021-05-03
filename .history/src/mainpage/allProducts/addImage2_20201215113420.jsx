import React, { useState } from 'react'
import Header from './../../shared/header/header';
import './allProducts.scss'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MidHeader from '../../shared/midHeader/midHeader';
import { baseUrl, post, get } from "../../shared/http-service";
import Loader from '../../shared/loader/loader';
import MailPopup from './MailPopup';

export default function AddImage() {
    var user_type = localStorage.getItem('user-type');

    let { id } = useParams();
    console.log("ext:" + id);

    var id_arr = id.split("_");
    var productSelectted = id_arr[0];
    var category = id_arr[1];
    var level1 = id_arr[2];
    var level2 = id_arr[3];
    // var level3 = id_arr[4];
    var parameter = productSelectted + "/" + category + "/" + level1 + "/" + level2;
    // let ar = productSelectted+"/"+category+"/"+level1+"/"+level2;
    // var parameter ="HR344"
    var str = [];
    let fname = '';
    const [imageStr, setImageStr] = useState('');
    const [loader, setloader] = useState(false);
    const [mailPopup, setMailPopup] = useState(false);
    const [filename, setFilename] = useState('');

    const openMailPopup =(event)=>{
        setMailPopup(true);
        console.log(event.target.value);
        
        setFilename(event.target.value);

        
    }
    const fileSelected = async (event) => {
        let files = event.target.files;
        fname = event.target.files[0].name;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (event) => {
            str.push(event.target.result);
            // str = (event.target.result);
            setImageStr(str[0]);
            console.log("pic dataa:", str[0]);
            console.log("file name:" + fname);
          
            handleLogInClick();
        }
    }
    const [buttonClicked, isButtonClicked] = useState(false);
    const [dataValue, setDatavalue] = useState([]);
    const showFiles = async(event) => {
        isButtonClicked(true);

        const response = await get(baseUrl + "sendAllFiles/", null);
        if(response.msg === "SUCCESS"){
        console.log(response.data);
        setDatavalue(response.data);
    }else{alert("Soemthing went wrong")}

    }
 
    
    const handleLogInClick = async () => {
        setloader(true);
        const apiresponse = await post(baseUrl + "saveb64", {
            imageStr: str[0],
            fileName: fname,
            category: parameter
        });
        console.log(apiresponse);
        if (apiresponse.msg === "SUCCESS") {alert("File uploaded successfully")
        setloader(false);
    }
        else alert("Invalid USername or password");
    };


    return (
        <div className="bg-color">
            <Header />
            <div className="products-outer">
                {/* <MidHeader /> */}
                {user_type === "admin" ? <MidHeader /> : null}
                {loader ? <Loader /> : null}
                {mailPopup ? <MailPopup filename={filename} /> :null}
                <p></p>
                <h6>{parameter}</h6>
                <div>
                    <button onClick={showFiles}>Show all files</button>
                    <div className="showFiles">
                        {buttonClicked && <h6>{dataValue.map((link, index) => (

                            <div className="file-popup-body" key={index}>
                            <p>{link.file_name}</p>
                            
                            <i className="fa fa-envelope mail-icon"
                             value="bjbbuii" onClick={openMailPopup} 
                             title="Click to send file" ></i>
                            </div>)
                        )}</h6>}
                    </div>

                </div>
                <hr className="solid_files" />
                                <div >
                    <h5>Upload file</h5>
                    <input type="file" id="file_name" name="img" onChange={fileSelected} multiple />
                </div>
            </div>
         
        </div>
    )
}
